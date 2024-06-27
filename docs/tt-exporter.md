---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TT Exporter"
  text: ""
  tagline: Export TikTok Followers and Following lists to a CSV file
  image: /tt-exporter.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/twitter-auto-follow/fmkhphcddlhkmggaldkibecjmgpkbpdl
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/twitter-auto-follow/fmkhphcddlhkmggaldkibecjmgpkbpdl

features:
  - title: Feature One
    details: Extract and export Followers from TikTok to CSV.
  - title: Feature Two
    details: Extract and export Following from TikTok to CSV.
---

<script setup>
    import TTExporterFAQ from './components/TTExporterFAQ.vue'
</script>

<TTExporterFAQ />