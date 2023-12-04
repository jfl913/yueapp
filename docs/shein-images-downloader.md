---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Shein Images Downloader"
  text: "Download hi-res images for shein in one click"
  tagline: A handy tool that allows you to easily download images from the shein website. 
  image: /shein-images-downloader.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/shein-images-downloader/lphjpapkpnhhffgobpekcmeanpompeka

features:
  - title: Feature One
    details: Download product images.
  - title: Feature Two
    details: Best quality image.
  - title: Feature Three
    details: Save all images in one click.
  - title: Feature Four
    details: Save images as .ZIP file format.
---

<script setup>
    import SheinImagesDownloaderPricing from './components/SheinImagesDownloaderPricing.vue'
    import SheinImagesDownloaderFAQ from './components/SheinImagesDownloaderFAQ.vue'
    import Checkout from './Checkout.vue'
</script>

<SheinImagesDownloaderPricing />
<SheinImagesDownloaderFAQ />
<Checkout chrome-extension-name="shein_images_downloader" />
