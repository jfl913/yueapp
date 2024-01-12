---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Followers Pro"
  text: "Attract real and relevant followers to grow your Instagram audience."
  tagline: Get more Instagram followers automatically. Grow your account, expand your reach, build your brand and get more leads — organically.
  image: /insta-auto-follow.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/followers-pro/iiaohnpoogjkomcdkhdfljgpglejpaad
    - theme: brand
      text: Add to Edge
      link: https://microsoftedge.microsoft.com/addons/detail/ig-auto-followunfollow/kpmddcnchbdoenhghgpgfdeahipcijle
features:
  - title: Feature One
    details: You can follow the user's followers and following automatically
  - title: Feature Two
    details: You can follow the users who have commented on a post automatically
  - title: Feature Three
    details: You can follow the users who have liked a post automatically
  - title: Feature Four
    details: You can unfollow the users who don't follow you back and who you are following
---

<script setup>
    import InstaAutoFollowPricing from './components/InstaAutoFollowPricing.vue'
    import InstaAutoFollowFAQ from './components/InstaAutoFollowFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<InstaAutoFollowPricing />
<InstaAutoFollowFAQ />
<Checkout chrome-extension-name="insta_follow" />
