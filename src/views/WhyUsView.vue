<template>
  <div class="alpha">
    <why-us-header/>
    <why-invest/>
    <why-us-section1/>
    <what-we-offer/>
    <why-us-section3/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script>
import WhyUsHeader from "@/components/WhyUs/WhyUsHeader.vue";
import WhyUsSection1 from "@/components/WhyUs/WhyUsSection1.vue";
import WhyUsSection3 from "@/components/WhyUs/WhyUsSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import WhyInvest from "@/components/WhyUs/WhyInvest.vue";
import WhatWeOffer from "@/components/WhyUs/what-we-offer.vue";
import ContactUs from "@/components/Home/ContactUs.vue";

export default {
  name: "WhyUsView",
  components: {ContactUs, WhatWeOffer, WhyInvest, FooterHome, WhyUsSection3, WhyUsSection1, WhyUsHeader}
}
</script>

<style scoped>

</style>