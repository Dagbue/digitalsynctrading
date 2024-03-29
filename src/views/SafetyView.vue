<template>
  <div class="alpha">
    <safety-header/>
    <safety-section1/>
    <why-us-section3/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script>
import SafetyHeader from "@/components/Safety/SafetyHeader.vue";
import SafetySection1 from "@/components/Safety/SafetySection1.vue";
import WhyUsSection3 from "@/components/WhyUs/WhyUsSection3.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import ContactUs from "@/components/Home/ContactUs.vue";

export default {
  name: "SafetyView",
  components: {ContactUs, FooterHome, WhyUsSection3, SafetySection1, SafetyHeader}
}
</script>

<style scoped>

</style>