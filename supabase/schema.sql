-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query)

create extension if not exists "uuid-ossp";

create table if not exists public.users (
  id          uuid primary key references auth.users on delete cascade,
  email       text,
  name        text,
  native_lang text default 'en',
  daily_goal_mins int default 10,
  created_at  timestamptz default now()
);

create table if not exists public.assessments (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users on delete cascade,
  score       int not null,
  level       text not null check (level in ('A1.1', 'A1.2')),
  answers_json jsonb,
  ai_feedback text,
  created_at  timestamptz default now()
);

create table if not exists public.progress (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users on delete cascade,
  unit_slug   text not null,
  score       int,
  completed_at timestamptz default now(),
  unique (user_id, unit_slug)
);

create table if not exists public.xp_events (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users on delete cascade,
  amount      int not null,
  reason      text not null,
  created_at  timestamptz default now()
);

create table if not exists public.streaks (
  user_id         uuid primary key references public.users on delete cascade,
  current_streak  int default 0,
  longest_streak  int default 0,
  last_active_date date
);

create table if not exists public.badges (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users on delete cascade,
  badge_key   text not null,
  earned_at   timestamptz default now(),
  unique (user_id, badge_key)
);

create table if not exists public.flashcards (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid references public.users on delete cascade,
  unit_slug       text not null,
  front           text not null,
  back            text not null,
  fsrs_state_json jsonb default '{}',
  due_at          timestamptz default now()
);

-- Row Level Security
alter table public.users         enable row level security;
alter table public.assessments   enable row level security;
alter table public.progress      enable row level security;
alter table public.xp_events     enable row level security;
alter table public.streaks       enable row level security;
alter table public.badges        enable row level security;
alter table public.flashcards    enable row level security;

-- Policies: users can only touch their own rows
create policy "own rows" on public.users         for all using (auth.uid() = id);
create policy "own rows" on public.assessments   for all using (auth.uid() = user_id);
create policy "own rows" on public.progress      for all using (auth.uid() = user_id);
create policy "own rows" on public.xp_events     for all using (auth.uid() = user_id);
create policy "own rows" on public.streaks       for all using (auth.uid() = user_id);
create policy "own rows" on public.badges        for all using (auth.uid() = user_id);
create policy "own rows" on public.flashcards    for all using (auth.uid() = user_id);

-- Auto-create user row on sign-up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;

  insert into public.streaks (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
