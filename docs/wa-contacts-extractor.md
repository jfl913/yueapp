---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "WA Contacts Extractor"
  text: ""
  tagline: Export WhatsApp contacts from groups, chats, contacts and labels lists to CSV or VCard format. Simple tool to download and backup all your WhatsApp contacts.
  image: /wa-contacts-extractor.png
  actions:
    - theme: brand
      text: Add to Chrome
      link: https://chromewebstore.google.com/detail/wa-contacts-extractor/ifhjahdgkdcpeofnamflcpdkadijbifl
    - theme: brand
      text: Add to Edge
      link: https://chromewebstore.google.com/detail/wa-contacts-extractor/ifhjahdgkdcpeofnamflcpdkadijbifl

features:
  - title: Feature One
    details: Export Contacts from Groups.
  - title: Feature Two
    details: Export Contacts from Chats.
  - title: Feature Three
    details: Export Contacts from Contacts.
  - title: Feature Four
    details: Export Contacts from Labels.
  - title: Feature Five
    details: Export Contacts to CSV & Vcard.
---

<script setup>
    import WAContactsExtractorFAQ from './components/WAContactsExtractorFAQ.vue'
</script>

<WAContactsExtractorFAQ />