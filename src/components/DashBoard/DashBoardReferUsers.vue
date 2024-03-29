<template>
  <div>
    <div class="body">
      <h2 class="header">Assets Market</h2>


      <div class="form-group">
        <select class="select" v-model="screen">
          <option value="crypto">Crypto</option>
          <option value="forex">Currencies</option>
          <option value="stocks">Stocks</option>
<!--          <option value="indices">Indices</option>-->
        </select>
      </div>


      <crypto-table v-show="this.screen === 'crypto'"/>

      <forex-table v-show="this.screen === 'forex'"/>

      <stock-table v-show="this.screen === 'stocks'"/>



<!--      <div class="section-1">-->
<!--        <div class="support">-->
<!--          <h1 class="support-header">You can refer users by sharing your referral link:</h1>-->
<!--          <a href="" class="support-subheader">www.tradesyncpro.com/register</a>-->
<!--          <div class="user">-->
<!--            <p class="user-1">Your sponsor</p>-->
<!--            <i class='bx bxs-user-rectangle'></i>-->
<!--            <p class="user-1">null</p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>-->
<!--          <h1 class="history-header">Your Referrals.</h1>-->


<!--          <div class="table">-->
<!--  <table>-->
<!--    <tr>-->
<!--      <th>Ref. Name</th>-->
<!--      <th>Ref. level</th>-->
<!--      <th>Parent</th>-->
<!--      <th>Ref. status</th>-->
<!--      <th>Date registered</th>-->
<!--    </tr>-->

<!--    <tbody>-->
<!--    <tr>-->
<!--      <td></td>-->
<!--      <td></td>-->
<!--      <td></td>-->
<!--      <td></td>-->
<!--      <td></td>-->
<!--    </tr>-->
<!--    </tbody>-->

<!--  </table>-->
<!--</div>-->


<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import CryptoTable from "@/components/tables/CryptoTable.vue";
import ForexTable from "@/components/tables/ForexTable.vue";
import StockTable from "@/components/tables/StockTable.vue";

export default {
  name: "DashBoardReferUsers",
  components: {StockTable, ForexTable, CryptoTable},
  data() {
    return {
      screen: "crypto",
    };
  },
  methods: {
    changeScreen() {
      this.screen = "crypto"
    },
    changeScreen2() {
      this.screen = "forex"
    },
    changeScreen3() {
      this.screen = "stocks"
    },
  }
}
</script>

<style scoped>
.form-group select {
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  /*line-height: 24px;*/
  letter-spacing: -0.1px;
  padding: 13px 16px;
  height: 45px;
  border-radius: 8px;
  border: 0.5px solid #3C4A57FF;
  box-shadow: none;
  width: 300px;
  background: #FFFFFF;
  margin-top: 1.5%;
  margin-bottom: 2%;
  color: #667085;
}

option{
  color: #667085;
}

.form-group select:focus {
  outline: none;
}

.form-group select::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.form-part{
  max-width: 580px;
  width: 70%;
  margin: auto;
  border: 0.5px solid #3C4A57FF;
  padding: 22px 25px;
  border-radius: 5px;
  background: #0f171c;
}
.section-1{
  margin-top: 3%;
}
.body{
  padding: 32px;
}
.header{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}


.support{
  text-align: center;
  padding-right: 6%;
  padding-top: 5%;
  padding-bottom: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(129, 138, 154, 0.5);
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 3%;
  border-radius: 5px;
}
.support-header{
  font-size: 20px;
  padding-bottom: 10px;
  color: #353542;
}
.support-subheader{
  font-size: 18px;
  padding-bottom: 10px;
  text-decoration: none;
  color: #353542;
}
p{
  font-size: 15px;
  padding-bottom: 10px;
}
.user{
  padding-top: 25px;
}
.bxs-user-rectangle{
  font-size: 70px;
}
.user-1{
  font-size: 18px;
  color: #353542;
}
.history-header{
  text-align: center;
  padding-top: 5%;
  padding-bottom: 20px;
  font-size: 20px;
  color: #353542;
}
.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  padding-top: 20px;
  background-color: #282E3BC7;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 12px;
}
hr{
  /*margin-left: 5%;*/
  /*margin-right: 5%;*/
  margin-top: 1%;
}

span{
  color: #D23535;
}
table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: rgba(129, 138, 154, 0.5);
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #353542;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 20px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}
@media (max-width: 990px) {
  .header-alpha{
    padding-top: 25px;
    font-size: 22px;
    padding-left: unset;
    text-align: center;
  }

  .support{
    padding-right: unset;
  }
  .history-header{
    margin-left: unset;
    font-size: 22px;
    text-align: center;
  }

  .content-sep, hr{
    display: none;
  }
}

@media (max-width: 550px) {
  .header-alpha{
    padding-top: 25px;
    font-size: 20px;
    padding-left: unset;
  }
  .support-header{
    padding-bottom: 10px;
    margin-right: 10px;
    margin-left: unset;
    font-size: 14px;
    width: 100%;
  }

  .support-subheader{
    font-size: 13px;
    margin-left: unset;
  }
  .support{
    margin-left: unset;
    margin-right: unset;
  }
  .history-header{
    font-size: 18px;
    margin-left: unset;
  }
}
</style>