---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IG Auto Like"
  text: ""
  tagline: IG Auto Like extension can automatically like Instagram posts, enhancing your engagement.
  image: /ig-auto-like.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/ig-auto-like/hmgfjlghckknhafggpnnniffdiggdmpd
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/ig-auto-like/hmgfjlghckknhafggpnnniffdiggdmpd

features:
  - title: Feature One
    details: Automatically like the latest posts with a specified hashtag.
  - title: Feature Two
    details: Automatically like the latest posts of users who have commented on a specific post.
  - title: Feature Three
    details: Automatically like the latest posts of users who have liked a specified post.
  - title: Feature Four
    details: Automatically like the latest posts of the followers of a specified user.
  - title: Feature Four
    details: Automatically like the latest posts of the following of a specified user.
---

<script setup>
    import IGAutoLikeFAQ from './components/IGAutoLikeFAQ.vue'
</script>

<IGAutoLikeFAQ />