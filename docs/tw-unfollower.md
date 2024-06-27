---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Twitter Unfollower"
  text: ""
  tagline: A smart unfollowing extension for X (Twitter) that unfollows inactive users, small accounts, and protects those who follow back.
  image: /tw-unfollower.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/twitter-unfollower/eilkgadngbcjchnpmndgafhaihmohfho
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/twitter-unfollower/eilkgadngbcjchnpmndgafhaihmohfho

features:
  - title: Feature One
    details: Unfollow users who do not follow you.
  - title: Feature Two
    details: Unfollow users who you are following.
  - title: Feature Three
    details: Filter accounts by Maximum inactive days and Minimum follower count for people to be unfollowed
  - title: Feature Four
    details: A well-developed strategy to bypass restrictions.
---

<script setup>
    import TwitterAutoFollowFAQ from './components/TwitterAutoFollowFAQ.vue'
</script>

<TwitterAutoFollowFAQ />