---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Temu Images Downloader"
  text: "Download hi-res images for temu in one click"
  tagline: You can download the main image, variant images, and description images.
  image: /temu-images-downloader.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/temu-images-downloader/mcmapejdcaphjkgijmdkbaodibkpamcc?hl=zh-CN

features:
  - title: Feature One
    details: Download main images.
  - title: Feature Two
    details: Download variants images.
  - title: Feature Three
    details: Download description images.
  - title: Feature Four
    details: Save all images in one click (main, variant, description).
  - title: Feature Five
    details: Best quality image.
  - title: Feature Six
    details: Save images as .ZIP file format.
---

<script setup>
    import TemuImagesDownloaderPricing from './components/TemuImagesDownloaderPricing.vue'
    import TemuImagesDownloaderFAQ from './components/TemuImagesDownloaderFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<TemuImagesDownloaderPricing />
<TemuImagesDownloaderFAQ />
<Checkout chrome-extension-name="temu_images_downloader" />
