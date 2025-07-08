# 🕷️ Web Scraping & Enrichment Tool

A production-ready web scraping tool built with **Bun**, **Express**, **Prisma**, and **CLI-based enrichment** (`httpx`, `subfinder`, `findomain`, `whois`, etc.) to extract company data from search queries or seed URLs.  
Includes rate limiting, proxy support, Redis caching, CLI runner, and modular extraction layers (basic, medium, advanced).

## TLDR
I used some of the Redteam/cyber tools to get scraping done, another proper addtional feature could be Spiders which will help us further etc.
---

## ✨ Features

### ✅ Minimal Requirements
- Accepts query or URL input
- Validates reachability
- Extracts:
  - Company Name
  - Website URL
  - Email / Phone
- Outputs structured JSON or CLI print

### ⚙️ Optional Enhancements
- Medium-level enrichment:
  - Social profiles
  - Address
  - Product keywords
  - WHOIS data
  - Subdomain listing (findomain)
- Advanced-level enrichment:
  - Tech stack (httpx + subfinder)
  - Market profile (Clearbit API)
  - Competitor mentions
  - Dynamic HTML support (WIP)

---

## 🧱 Tech Stack

| Layer        | Tech                    |
|--------------|-------------------------|
| Backend      | [Bun](https://bun.sh), [Express](https://expressjs.com), [Zod](https://zod.dev) |
| Scraping     | [Cheerio](https://cheerio.js.org), [axios](https://axios-http.com) |
| CLI Tools    | `httpx`, `subfinder`, `findomain`, `whois` |
| Data Store   | PostgreSQL (via Prisma ORM) |
| Caching      | Redis (optional)        |
| API Logging  | Winston                 |
| Scheduler    | `node-cron` (optional)  |

---

## 🛠 Setup

### 🐇 Prerequisites

- Bun ≥ v1.1.0
- Redis (optional but recommended)
- PostgreSQL
- CLI Tools installed globally:
  ```bash
  go install github.com/projectdiscovery/httpx/cmd/httpx@latest
  go install github.com/projectdiscovery/subfinder/cmd/subfinder@latest
  wget https://github.com/findomain/findomain/releases/latest/download/findomain-linux -O /usr/local/bin/findomain
  chmod +x /usr/local/bin/findomain
  brew/apt install whois
