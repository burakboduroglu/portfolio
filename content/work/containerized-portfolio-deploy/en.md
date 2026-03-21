---
slug: containerized-portfolio-deploy
locale: en
category:
  - devops
case_study_status: draft
stack:
  - Docker
  - Dokploy
  - VPS
title: Containerized deploy to a VPS
summary: Draft for repeatable releases with one image, env vars, and a reverse proxy.
demo_url: null
repo_url: null
privacy_note: Hostnames and provider details generalized.
---

## Title and summary

A layout was designed so personal or small product sites move from “works on my machine” to reliable publishing on a VPS using containers and Dokploy (or equivalent).

## Your role

DevOps and deployment automation.

## Timeline and team

Estimated duration: 1–2 weeks (initial setup). Team: solo.

## Problem

Manual copy-paste deploys cause drift; rollbacks are painful.

## Constraints

TLS termination and single-machine budget; near-zero ops overhead goal.

## Solution overview

Multi-stage Docker image, env vars such as `NEXT_PUBLIC_SITE_URL`, HTTPS via reverse proxy, application definition in Dokploy.

## Technical architecture

Build → registry or direct host → container run → health check → proxy route. Detailed schema in Phase 2.

## Technologies used

Docker or Podman-compatible image, Linux VPS, Dokploy (or similar), Caddy/Nginx per choice.

## Prompt / context engineering

N/A — infrastructure-focused work.

## Automation and DevOps

Future: `docker build` in CI and image push; version tags.

## Security and privacy

Secrets not baked into images; SSH and panel access restricted.

## Results

Draft: deploy duration and outage targets to measure in Phase 2.

## Learnings

- Routing traffic without health checks is risky.
- Canonical URL env is required for SEO and OG.

## Links

Live example: this portfolio site may adopt this draft in Phase 3.
