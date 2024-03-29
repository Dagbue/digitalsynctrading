<template>
  <div class="alpha">
    <slider-view/>
    <section1/>
    <core/>
    <section2/>
    <investment-principles/>
    <section5/>
    <section6/>
    <section4/>
    <contact-us/>
    <footer-text/>
    <footer-home/>
  </div>
</template>

<script>

import SliderView from "@/components/Home/slideshow/sliderView.vue";
import FooterText from "@/components/BaseComponents/footerText.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";
import Section1 from "@/components/Home/Section1.vue";
import Section2 from "@/components/Home/Section2.vue";
import Section4 from "@/components/Home/Section4.vue";
import Core from "@/components/Home/core.vue";
import InvestmentPrinciples from "@/components/Home/investment-principles.vue";
import Section5 from "@/components/Home/Section5.vue";
import Section6 from "@/components/Home/Section6.vue";
import ContactUs from "@/components/Home/ContactUs.vue";

export default {
  name: 'HomeView',
  components: {
    ContactUs,
    Section6,
    Section5, InvestmentPrinciples, Core, Section4, Section2, Section1, FooterHome, FooterText, SliderView},
}
</script>
