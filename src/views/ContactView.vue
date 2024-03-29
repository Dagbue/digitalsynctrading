<template>
  <div class="alpha">
    <contact-header/>
    <contact-body/>
    <contact-map/>
    <footer-home/>
  </div>
</template>

<script>
import ContactHeader from "@/components/Contact/ContactHeader.vue";
import ContactBody from "@/components/Contact/contact-body.vue";
import ContactMap from "@/components/Contact/contact-map.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "ContactView",
  components: {FooterHome, ContactMap, ContactBody, ContactHeader}
}
</script>

<style scoped>

</style>