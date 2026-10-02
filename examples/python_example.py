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
