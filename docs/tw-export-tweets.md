---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TwExport - Export Tweets"
  text: ""
  tagline: With this chrome extension for Twitter, you can export and download tweets from any account as a CSV file.
  image: /tw-export-tweets.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/twitter-export-followers/amflfbkcoeanhfcdcbebeimpjnoebakn
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/twitter-export-followers/amflfbkcoeanhfcdcbebeimpjnoebakn

features:
  - title: Feature One
    details: Export Posts from Twitter to CSV.
  - title: Feature Two
    details: Export Replies from Twitter to CSV.
  - title: Feature Four
    details: Extract tweet information, including id, text, tweet_url, language, type, author_name, author_username, view_count, bookmark_count, favorite_count, retweet_count, reply_count, quote_count, created_at, source, hashtags, urls, media_type, media_urls.
---

<script setup>
    import TwExportPricing from './components/TwExportPricing.vue'
    import TwExportFAQ from './components/TwExportFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<TwExportPricing />
<TwExportFAQ />
<Checkout chrome-extension-name="tw_export_tweets" />
