<template>
  <div class="body">
<!--    <subscribe-modal @close="hideDialog" v-if="dialogIsVisible"/>-->
<!--    <mt4-modal @close="hideDialog2" v-if="dialogIsVisible2"/>-->
    <h2 class="header">Copy Experts</h2>
<!--    <div class="section-1">-->
<!--      <div class="support">-->
<!--        <h1 class="support-header"><span>Assets Management Limited</span> Account Manager</h1>-->
<!--        <p class="support-subheader">Don’t have time to trade or learn how to trade? Our Account Management Service is-->
<!--          The Best Profitable Trading Option for you, We can help you to manage your account in the financial MARKET-->
<!--          with a simple subscription model. Terms and Conditions apply Reach us at support@tradesyncpro.com for-->
<!--          more info.</p>-->
<!--        <p class="para-last">-->
<!--          <button class="one" @click="showDialog">Subscribe Now</button>-->
<!--          <button class="two" @click="showDialog2" >Submit  MT4 Details</button>-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
    <div class="copy-trader-alpha">

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1710778160.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Joshua Jake</p>
          <p class="text-2">90.33% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1709997722.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Ben Marcus</p>
          <p class="text-2">94.27% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1709972637.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Lucas Manz</p>
          <p class="text-2">89.06% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1709029372.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Ethan Antonio</p>
          <p class="text-2">94.93% Win Rate</p>
          <p class="text-3">10% Profit Share</p>

        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1708017304.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">CRYPTO THRO</p>
          <p class="text-2">95.76% Win Rate</p>
          <p class="text-3">10% Profit Share</p>

        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1706219541.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Brian pezim</p>
          <p class="text-2">81.44% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1706021644.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Zach Rector</p>
          <p class="text-2">94.46% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1705700392.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Bernie Daly</p>
          <p class="text-2">92.75% Win Rate</p>
          <p class="text-3">10% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1695523936.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Mack Gray</p>
          <p class="text-2">92.83% Win Rate</p>
          <p class="text-3"> 15% Profit Share</p>
        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

      <div class="copy-trader">
        <img src="https://defitradehub.pro/uploads/images/1705967064.jpg" class="copy-image" alt=""/>

        <div class="copy-trader-rate">
          <p class="text-1">Jason Wilibo</p>
          <p class="text-2">95.17% Win Rate</p>
          <p class="text-3">10% Profit Share</p>

        </div>

        <div class="btn-part">
          <p class="btn">copy</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// import SubscribeModal from "@/components/BaseComponents/modal/SubscribeModal.vue";
// import Mt4Modal from "@/components/BaseComponents/modal/Mt4Modal.vue";

export default {
  name: "DashBoardSubscriptionTrade",
  // components: {Mt4Modal, SubscribeModal},
  data() {
    return {
      dialogIsVisible: false,
      dialogIsVisible2: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    showDialog2() {
      this.dialogIsVisible2= true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
  },
}
</script>


<style scoped>
.body{
  padding: 32px;
}
.copy-trader{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(20, 49, 89, 0.1);
  padding: 20px 0;
  margin-top: 20px;
  margin-left: 3%;
  margin-right: 5%;
  border-radius: 4px;
}
.copy-image{
  width: 7%;
  border-radius: 100px;
}
.copy-trader-rate{
  letter-spacing: 0.5px;
  text-align: center;
}
.text-1{
  padding-bottom: 10px;
  font-size: 16px;
}

.text-2{
  padding-bottom: 5px;
  font-size: 13px;
}

.text-3{
  font-size: 13px;
}

.header{
      font-weight: 700;
      font-size: 19px;
      line-height: 25px;
      color: #353542;
    }

.btn{
  background-color: #071333;
  color: #FFFFFF;
  padding: 10px 50px;
  border-radius: 4px;
  font-size: 13px;
}
</style>


<!--<style scoped>-->
<!--.section-1{-->
<!--  margin-top: 5%;-->
<!--}-->
<!--.body{-->
<!--  padding: 32px;-->
<!--}-->
<!--.header{-->
<!--  font-weight: 700;-->
<!--  font-size: 19px;-->
<!--  line-height: 25px;-->
<!--  color: #353542;-->
<!--}-->
<!--.support{-->
<!--  text-align: center;-->
<!--  padding-right: 6%;-->
<!--  padding-top: 5%;-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);-->
<!--  background-color: rgba(129, 138, 154, 0.5);-->
<!--  color: #353542;-->
<!--  margin-bottom: 1.7%;-->
<!--  margin-right: 15%;-->
<!--  margin-left: 12%;-->
<!--  border-radius: 5px;-->
<!--}-->
<!--.support-header{-->
<!--  font-size: 22px;-->
<!--  padding-bottom: 10px;-->
<!--  padding-left: 20px;-->
<!--}-->
<!--.support-subheader{-->
<!--  font-size: 15px;-->
<!--  padding-bottom: 10px;-->
<!--  padding-left: 60px;-->
<!--  line-height: 1.5;-->
<!--}-->

<!--i{-->
<!--  font-size: 47px;-->
<!--  color: #124DA8;-->
<!--}-->
<!--p{-->
<!--  font-size: 15px;-->
<!--  padding-bottom: 10px;-->
<!--}-->
<!--.para-last{-->
<!--  padding-bottom: 8%;-->
<!--  padding-top: 4%;-->
<!--}-->
<!--.one{-->
<!--  padding: 11px 25px;-->
<!--  margin-right: 20px;-->
<!--  border-radius: 5px;-->
<!--  color: white;-->
<!--  background-color: #124DA8;-->
<!--  border: 1px solid #124DA8;-->
<!--}-->
<!--.one:hover{-->
<!--  color: white;-->
<!--  background-color: #2e8cec;-->
<!--  border: 1px solid #2e8cec;-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);-->
<!--  -webkit-transition: all 0.35s ease;-->
<!--  transition: all 0.35s ease;-->
<!--}-->
<!--.two:hover{-->
<!--  color: white;-->
<!--  background-color: #2e8cec;-->
<!--  border: 1px solid #2e8cec;-->
<!--  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);-->
<!--  -webkit-transition: all 0.35s ease;-->
<!--  transition: all 0.35s ease;-->
<!--}-->
<!--.two{-->
<!--  padding: 11px 25px;-->
<!--  border-radius: 5px;-->
<!--  color: white;-->
<!--  background-color: #124DA8;-->
<!--  border: 1px solid #124DA8;-->
<!--}-->

<!--@media (max-width: 550px) {-->
<!--  .support{-->
<!--    text-align: center;-->
<!--    padding-right: unset;-->
<!--    margin-right: unset;-->
<!--    margin-left: unset;-->
<!--  }-->
<!--  .support-subheader{-->
<!--    padding-right: 5%;-->
<!--    padding-left: 5%;-->
<!--    font-size: 14px;-->
<!--  }-->
<!--  .support-header{-->
<!--    font-size: 18px;-->
<!--    padding-left: unset;-->
<!--  }-->
<!--}-->
<!--</style>-->