# UK business leads from Google Maps with emails and Companies House directors

[![Run on Apify](https://img.shields.io/badge/Run%20on-Apify-0b57d0)](https://apify.com/automationnation/uk-business-leads)

Google Maps Leads Scraper UK is an Apify Actor that turns a UK city and business type into a lead list with emails, phone numbers, Companies House directors, HOT/WARM/COLD lead scores and ready-to-send AI outreach messages.

**Price:** $0.05 per lead ($0.04 on Gold) · **Run it:** [https://apify.com/automationnation/uk-business-leads](https://apify.com/automationnation/uk-business-leads) · **Guide:** [https://retracn.github.io/automationnation-actors/uk-business-leads/](https://retracn.github.io/automationnation-actors/uk-business-leads/)

## Quick facts

- One row per business: name, address, phone, website, email, Google rating and reviews, Companies House director, company number and SIC codes, website audit score, HOT / WARM / COLD score, and AI outreach email, LinkedIn message and SMS.
- Any UK city, town or postcode; businesses removed by your filters are free.
- Price: $0.05 per lead ($0.04 on Gold); Apify's free $5 credit covers about 100 leads a month.
- About 10–15 minutes per 100 leads; directors are returned only for confident Companies House matches.

## Example input

```json
{
  "cities": [
    "Manchester"
  ],
  "category": "restaurant",
  "maxResults": 20
}
```

## Run it from code

**REST API**

```bash
curl -X POST "https://api.apify.com/v2/acts/automationnation~uk-business-leads/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"cities": ["Manchester"], "category": "restaurant", "maxResults": 20}'
```

**Python** — see [`examples/python_example.py`](examples/python_example.py)

```python
# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/uk-business-leads").call(run_input={
  "cities": [
    "Manchester"
  ],
  "category": "restaurant",
  "maxResults": 20
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("name"), item.get("email"), item.get("directorName"), item.get("leadScore"))
```

**JavaScript** — see [`examples/node_example.mjs`](examples/node_example.mjs)

```js
// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/uk-business-leads').call({
  "cities": [
    "Manchester"
  ],
  "category": "restaurant",
  "maxResults": 20
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.name, item.email, item.directorName, item.leadScore);
```

## Use it with AI agents (MCP)

Hosted MCP server URL (Claude, ChatGPT, Cursor and other clients with remote MCP support):

```
https://mcp.apify.com?tools=automationnation/uk-business-leads
```

Local config for Claude Desktop / Cursor — [`mcp/claude_desktop_config.json`](mcp/claude_desktop_config.json):

```json
{
  "mcpServers": {
    "uk-business-leads": {
      "command": "npx",
      "args": [
        "-y",
        "@apify/actors-mcp-server",
        "--tools",
        "automationnation/uk-business-leads"
      ],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_TOKEN"
      }
    }
  }
}
```

## FAQ

**How do I get UK business leads from Google Maps with emails?**
Enter a city (or postcode) and a business type in Google Maps Leads Scraper UK on Apify. It returns one lead per business with the email found on its website, phone number, Companies House director, a lead score and ready-to-send outreach copy.

**Is there a tool that combines Google Maps and Companies House data?**
Yes — Google Maps Leads Scraper UK matches each Google Maps business to the UK company register by name, location and website, and returns the director only when the match is confident.

## More from AutomationNation

- [Google Jobs Scraper](https://apify.com/automationnation/google-jobs-scraper) — $2 per 1,000 jobs ($1.50 on paid plans) + $0.03 per search · [GitHub examples](https://github.com/retracn/google-jobs-scraper)
- [AEO & GEO Tracker — Google AI Overview Citation Checker](https://apify.com/automationnation/aeo-auditor) — $0.04 per keyword ($0.032 on Gold); $0.01 until 16 Oct 2026 · [GitHub examples](https://github.com/retracn/google-ai-overview-tracker)
- [App Store & Google Play Reviews Scraper + AI](https://apify.com/automationnation/app-store-review-miner) — $0.05 per app report ($0.04 on Gold) · [GitHub examples](https://github.com/retracn/app-store-google-play-reviews-ai)
- [UK Companies House Leads — Filing Signals & AI Outreach](https://apify.com/automationnation/companies-house-leads) — $0.008 per lead
- [Contact Waterfall Enrichment — Emails & Directors](https://apify.com/automationnation/contact-waterfall-enrichment) — $0.015 per company
- [All Actors and guides](https://retracn.github.io/automationnation-actors/) · [Google Jobs scrapers compared](https://retracn.github.io/automationnation-actors/compare/google-jobs-scrapers/)

---

This repository holds usage examples. The scraper itself runs on the [Apify platform](https://apify.com/automationnation/uk-business-leads); you need a free Apify account and API token. Examples are MIT licensed.
