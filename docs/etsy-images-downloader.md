---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Etsy Images Downloader"
  text: "Download hi-res images and videos for etsy in one click"
  tagline: A handy tool that allows you to easily download images and videos from the etsy website. 
  image: /etsy-images-downloader.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/etsy-images-downloader/aakfimfbjikfkfeokmamllkomlejnpdi

features:
  - title: Feature One
    details: Download product images.
  - title: Feature Two
    details: Best quality image.
  - title: Feature Three
    details: Save all images in one click.
  - title: Feature Four
    details: Save images as .ZIP file format.
  - title: Feature Five
    details: Download product videos.
---

<script setup>
    import EtsyImagesDownloaderPricing from './components/EtsyImagesDownloaderPricing.vue'
    import EtsyImagesDownloaderFAQ from './components/EtsyImagesDownloaderFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<EtsyImagesDownloaderPricing />
<EtsyImagesDownloaderFAQ />
<Checkout chrome-extension-name="etsy_images_downloader" />
