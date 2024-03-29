<template>
  <div>
    <about-header/>
    <about-company/>
    <about-section1/>
    <reassurance-view/>
    <about-section2/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script setup>
import AboutHeader from "@/components/About/AboutHeader.vue";
import AboutSection1 from "@/components/About/AboutSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import AboutCompany from "@/components/About/about-company.vue";
import ContactUs from "@/components/Home/ContactUs.vue";
import ReassuranceView from "@/components/About/reassuranceView.vue";
</script>