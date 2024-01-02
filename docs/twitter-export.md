---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Twitter Export"
  text: ""
  tagline: A smart tool for Twitter, one click to export Twitter Followers, Verified Followers and Following list to csv.
  image: /twitter-export.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chrome.google.com/webstore/detail/ig-follower-export-tool/iacchdhbljnmihoeeelcgljnajfafpkh?hl=zh-CN&authuser=0

features:
  - title: Feature One
    details: Export Followers from Twitter to CSV.
  - title: Feature Two
    details: Export Verified Followers from Twitter to CSV.
  - title: Feature Three
    details: Export Following from Twitter to CSV.
  - title: Feature Four
    details: Extract user profile, including user_id, name, user_name, bio, created_at, can_dm, tweets_count, followers_count, following_count, favourites_count, media_count, location, profile_url, avatar_url, profile_banner_url, verified, is_blue_verified.
---

<script setup>
    import TwitterExportPricing from './components/TwitterExportPricing.vue'
    import TwitterExportProFAQ from './components/TwitterExportProFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<TwitterExportPricing />
<TwitterExportProFAQ />
<Checkout chrome-extension-name="tw_export" />
