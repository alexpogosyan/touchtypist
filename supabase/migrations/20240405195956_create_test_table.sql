create table test (
    id uuid not null primary key default uuid_generate_v4(),
    name text,
    created_at timestamptz default now()
)
