<template>
  <div class="alpha">
    <pricing-header/>
    <pricing-body/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script>
import PricingHeader from "@/components/Pricing/PricingHeader.vue";
import PricingBody from "@/components/Pricing/pricing-body.vue";
import ContactUs from "@/components/Home/ContactUs.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "PricingView",
  components: {FooterHome, ContactUs, PricingBody, PricingHeader}
}
</script>

<style scoped>

</style>