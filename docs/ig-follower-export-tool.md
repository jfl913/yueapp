---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IG Exporter - Follower Export Tool"
  text: ""
  tagline: IG Exporter can automatically extract user profiles from Instagram followers and following, and export them to CSV with one click.
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
    details: Extract user profile, including id, username, full_name, profile_url, is_verified, followed_by_you, avatar_url.
---

<script setup>
    import IGFollowerExportToolPricing from './components/IGFollowerExportToolPricing.vue'
    import IGFollowerExportToolFAQ from './components/IGFollowerExportToolFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<IGFollowerExportToolPricing />
<IGFollowerExportToolFAQ />
<!-- <Checkout chrome-extension-name="ig_follower_export_tool" /> -->
