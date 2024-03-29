<template>
  <div class="alpha">
    <testimonials-header/>
    <testimonials-body/>
    <contact-us/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonialsHeader from "@/components/Testimonials/TestimonialsHeader.vue";
import TestimonialsBody from "@/components/Testimonials/TestimonialsBody.vue";
import ContactUs from "@/components/Home/ContactUs.vue";
import FooterHome from "@/components/BaseComponents/footerHome.vue";

export default {
  name: "TestimonialsView",
  components: {FooterHome, ContactUs, TestimonialsBody, TestimonialsHeader}
}
</script>

<style scoped>

</style>