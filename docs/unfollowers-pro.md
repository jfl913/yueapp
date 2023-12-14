---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Unfollowers Pro"
  text: "Mass unfollow users who don't follow you back on Instagram."
  tagline: Mass unfollow users who don't follow you back and who you are following on Instagram.
  image: /unfollowers-pro.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/ig-auto-follow-unfollow/iiaohnpoogjkomcdkhdfljgpglejpaad
    - theme: brand
      text: Add to Edge
      link: https://microsoftedge.microsoft.com/addons/detail/ig-auto-followunfollow/kpmddcnchbdoenhghgpgfdeahipcijle
features:
  - title: Feature One
    details: Mass unfollow users who don't follow you back on Instagram.
  - title: Feature Two
    details: Mass unfollow users who you are following on Instagram.
  - title: Feature Three
    details: Reduce the risk of being detected as a bot.
---

<script setup>
    import UnfollowersProPricing from './components/UnfollowersProPricing.vue'
    import UnfollowersProFAQ from './components/UnfollowersProFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<UnfollowersProPricing />
<UnfollowersProFAQ />
<Checkout chrome-extension-name="unfollowers_pro" />
