---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Group Extractor"
  text: "Facebook Group Members Export"
  tagline: Automatically extract up to 5000 members from any single Facebook group you are a member of into a CSV file. Utilize extracted data to generate quality leads
  image: /fb-group-export.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/group-extractor/oakdlcfhapgllacidemajdmmdcjfbiig
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/group-extractor/oakdlcfhapgllacidemajdmmdcjfbiig
features:
  - title: Feature One
    details: Export Facebook group members into a CSV file.
  - title: Feature Two
    details: Extract up to 5k group members from any single group you're a member of.
  - title: Feature Three
    details: Scrape basic profile data including name and profile URL to use as the first step for any Facebook workflow.
---

<script setup>
    import GroupExtractorFAQ from './components/GroupExtractorFAQ.vue'
</script>

<GroupExtractorFAQ />
