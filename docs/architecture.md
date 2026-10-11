# Architecture

## Overview

The platform is split into small read services behind an API gateway:

```
storefront / back-office
        │  HTTPS (JSON)
        ▼
  API gateway  ──auth, rate limits, routing──┐
        │                                    │
        ▼                                    ▼
  orders service (api/orders.ts)     users service (api/users.ts)
        │                                    │
        └──────────► Postgres (read replicas) ◄────────┘
```

This repository contains the **service handlers** for orders and users. The gateway, auth
and database access live in other repositories; here the data is an in-memory fixture so
the contract can be tested quickly.

## Orders service

- `listOrders()` backs `GET /orders`.
- Returns the account's orders, newest first. Each order has `id` and `total` (integer cents
  in the database, number in the response).
- Owner: **Douglas**.

## Users service

- `listUsers()` backs `GET /users`.
- Returns the members of the workspace with `id` and `name`.
- Owner: **Ale**.

## Data flow for a request

1. The client calls the gateway with a session token.
2. The gateway authenticates and routes to the service handler.
3. The handler builds the **response envelope** (see `docs/api-conventions.md`).
4. The gateway adds pagination headers and returns JSON.

## Quality loop

Every push to `main` is watched by Team Brain (Slack app on Modelence Cloud, memory in
MongoDB Atlas, traces in Raindrop). It checks that tests and docs still match the response
shape and opens a fix PR when they drift.
