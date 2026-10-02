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
