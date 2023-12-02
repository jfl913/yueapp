---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "IG Auto Follow-Unfollow"
  text: "Grow Instagram Followers with Follow-Unfollow growth hack"
  tagline: Grow your Instagram Account Organically without getting BANNED! Use this extension on any Instagram profile to Auto Follow from their followers. You can also unfollow all the accounts that are not following you back on Instagram.
  image: /ig-auto-follow.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/ig-auto-follow-unfollow/iiaohnpoogjkomcdkhdfljgpglejpaad
    - theme: brand
      text: Add to Edge
      link: https://microsoftedge.microsoft.com/addons/detail/ig-auto-followunfollow/kpmddcnchbdoenhghgpgfdeahipcijle
features:
  - title: Feature One
    details: Grow your Instagram followers without getting banned. 
  - title: Feature Two
    details: Automatically Follow/Unfollow from any profile.
  - title: Feature Three
    details: Also unfollow all the people who are not following you back.
---

<script setup>
    import IGAutoFollowPricing from './components/IGAutoFollowPricing.vue'
    import IGAutoFollowFAQ from './components/IGAutoFollowFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<IGAutoFollowPricing />
<IGAutoFollowFAQ />
<Checkout chrome-extension-name="ig_auto_follow" />
