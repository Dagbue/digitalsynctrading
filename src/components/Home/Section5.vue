<template>
  <div class="alpha">
    <div class="cryptohopper-web-widget" data-id="7" data-label_design="2" data-coins="bitcoin,ethereum,xrp,bnb,cardano,dogecoin,solana,polkadot,bitcoin-cash,shiba-inu" data-numcoins="undefined" data-fullwidth="1" data-realtime="on"></div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section5",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.alpha{
  margin-top: 7%;
  margin-left: 7%;
  margin-right: 7%;
}
</style>