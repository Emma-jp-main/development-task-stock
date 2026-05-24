CREATE TABLE if not exists stock
(
    id serial primary key,
    ticker varchar(4) unique not null,
    name varchar(255) not null,
    exchange_market varchar(16) not null,
    shares_issued bigint not null
);

CREATE TABLE if not exists trade
(
    id serial primary key,
    traded_datetime timestamp not null,
    stock_id integer not null,
    side varchar(10) not null,
    quantity bigint not null,
    traded_price numeric(10,2) not null,
    created_datetime timestamp not null default NOW()
);