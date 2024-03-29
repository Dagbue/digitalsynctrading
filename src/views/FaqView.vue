<template>
  <div class="admin">
    <faq-header/>
    <f-a-q-body/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script>
import FaqHeader from "@/components/Faq/FaqHeader.vue";
import FAQBody from "@/components/Faq/f-a-q-body.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import ContactUs from "@/components/Home/ContactUs.vue";

export default {
  name: "FaqView",
  components: {ContactUs, FooterHome, FAQBody, FaqHeader}
}
</script>

<style scoped>

</style>