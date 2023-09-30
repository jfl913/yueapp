---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IG Follower Export Tool"
  text: ""
  tagline: IG Follower Export Tool automatically extract user profile from Instagram followers and following and export to CSV with one click.
  image: /ig-follower-export-tool.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chrome.google.com/webstore/detail/ig-follower-export-tool/iacchdhbljnmihoeeelcgljnajfafpkh?hl=zh-CN&authuser=0

features:
  - title: Feature One
    details: Export followers from Instagram to CSV.
  - title: Feature Two
    details: Export following list from Instagram to CSV.
  - title: Feature Three
    details: Extract user profile, including user id, username, full name, profile url, avatar url and is verified, etc.
---

<script setup>
    import IGFollowerExportToolPricing from './components/IGFollowerExportToolPricing.vue'
    import Checkout from './Checkout.vue'
</script>

<IGFollowerExportToolPricing />
<Checkout />