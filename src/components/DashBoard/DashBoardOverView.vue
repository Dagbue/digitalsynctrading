<template>
  <div class="alpha">
    <div class="section-2">
      <div class="section-2-part-1">
        <p>Dashboard</p>
      </div>

      <div class="section-2-part-2">

        <p class="fund-wallet" @click="onPostClick">
          <i class='bx bx-plus' ></i>
          Deposit
        </p>

        <p class="withdraw" @click="onPostClick2">
          <i class='bx bx-up-arrow-circle'></i>
          Withdraw
        </p>

      </div>
    </div>



    <div class="law">
      <div class="balance-part">

        <div class="balance">
          <div class="balance-1">
            <p style="font-size: 18px;" v-if="approved === 'Pending'">$0.00</p>
            <p style="font-size: 18px;" v-else-if="approved === 'approved'">${{formatNumber(this.contacts.deposit)}}.00</p>
            <p style="font-size: 18px;" v-else>$0.00</p>
            <hr class="dashboard-divider">
            <p style="font-size: 13px;font-weight: 900;color: #0f2e6d">DEPOSIT BALANCE</p>
          </div>
          <div class="balance-1">
            <p style="font-size: 18px;" v-if="approved === 'Pending'">$0.00</p>
            <p style="font-size: 18px;" v-else-if="approved === 'approved'">${{formatNumber(this.contacts.profits)}}.00</p>
            <p style="font-size: 18px;" v-else>$0.00</p>
            <hr class="dashboard-divider">
            <p style="font-size: 13px;font-weight: 900;color: #0f2e6d">PROFIT BALANCE</p>
          </div>
          <div class="balance-1">
            <p style="font-size: 18px;" v-if="approved === 'Pending'">$0.00</p>
            <p style="font-size: 18px;" v-else-if="approved === 'approved'">${{formatNumber(this.contacts.deposit + this.contacts.profits + this.contacts.bonusMain + this.contacts.bonus - this.contacts.withdrawal)  }}.00</p>
            <p style="font-size: 18px;" v-else>$0.00</p>
            <hr class="dashboard-divider">
            <p style="font-size: 13px;font-weight: 900;color: #0f2e6d">TOTAL BALANCE</p>
          </div>
        </div>

      </div>

    </div>


    <div id="tradingview_1a10b-wrapper"
         style="position: relative;
               box-sizing: content-box;
               width: 86%;
               display: block;
               margin-left: auto;
               margin-right: auto;
               height: 560px;
               margin-top: 2%;
               margin-bottom: 2%;"
    >
      <iframe title="advanced chart TradingView widget" lang="en" id="tradingview_1a10b" frameborder="0"
              allowtransparency="true" scrolling="no" allowfullscreen="true"
              src="https://s.tradingview.com/widgetembed/?hideideas=1&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22frameElementId%22%3A%22tradingview_1a10b%22%2C%22interval%22%3A%22D%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%221%22%2C%22details%22%3A%221%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22infiniteprotrades.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22page-uri%22%3A%22infiniteprotrades.com%2Findex.php%2Fuser%2FtradeCrypto%22%7D" style="width: 100%; height: 100%; margin: 0px !important; padding: 0px !important;"></iframe>
    </div>

    <crypto-table/>

  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
import CryptoTable from "@/components/tables/CryptoTable.vue";
export default {
  name: "DashBoardOverView",
  components: {CryptoTable},
  data () {
    return {
      contacts: "",
      approved: '',
      approved2: '',
    }
  },

  methods: {
    onPostClick() {
      this.$router.push("/fund-wallet");
    },
    onPostClick2() {
      this.$router.push("/withdrawal");
    },
    formatNumber(value) {
      return Number(value).toLocaleString('en-US');
    },
  },

  setup() {
    const store = useStore()

    const handleClick = async () => {
      await store.dispatch('logout')
    }
    router.push('/dashboard-side-bar')

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)}
  },

  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'deposit': doc.data().deposit,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'selected': doc.data().selected,
        'ROI': doc.data().ROI,
        'plan': doc.data().plan,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'statusDeposit': doc.data().statusDeposit,
        'statusWithdrawal': doc.data().withdrawal,
      }
      this.contacts  = data
      this.approved = doc.data().statusDeposit
      this.approved2 = doc.data().statusWithdrawal
    })


  },
}
</script>

<style scoped>
.alpha {
  padding-bottom: 10px;
}
.balance-part{
  width: 85%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.balance{
  color: #101828;
  display: flex;
  gap: 20px;
  justify-content: center;
  text-align: left;
  width: 100%;
}
.balance-1{
  border: 0.5px solid #2E8CEC3F;
  background: rgba(46, 140, 236, 0.15);
  padding: 25px 60px;
  padding-left: 2%;
  border-radius: 6px;
  line-height: 2;
  width: 100%;
  font-weight: bold;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.dashboard-divider{
  border: 0.5px solid #17317a;
}
.signal-part{
  text-align: center;
  color: #FFFFFF;
}
.section-2{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding-right: 3%;
  padding-left: 1.5%;
  margin-top: 1.5%;
  margin-bottom: 1.5%;
}
.section-2-part-1 p{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  color: #101828;
}

.fund-wallet{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 33px;
  background: #124DA8;
  color: #ffffff;
  border: 1px solid #124DA8;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 3%;
}

.fund-wallet:hover{
  background: #2e8cec;
  color: #ffffff;
  border: 1px solid #2e8cec;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.withdraw{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 110px;
  height: 33px;
  background: #FFFFFF;
  color: #124DA8;
  border: 1px solid #124DA8;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.withdraw:hover{
  background: #2e8cec;
  color: #ffffff;
  border: 1px solid #2e8cec;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.section-2-part-2{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-2-part-1 p{
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #101828;
}

.section-3{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-bottom: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-i{
  display: flex;
  align-content: center;
  align-items: center;
  padding: 15px 25px;
  gap: 24px;
  width: 1150px;
  height: 110px;
  background: #FFFFFF;
  border: 1px solid #F2F4F7;
  border-top: 0.5px solid #F2F4F7;
  border-radius: 8px;
  margin-left: 2%;
}

.section-3-content{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 20%;
}

.vl-2{
  border-left: 1.5px solid #E7E8F0;
  height: 50px;
  margin-left: 1%;
  margin-right: 1%;
}

.content-1-text-1{
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #667085;
}

.content-1-text-2{
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #124DA8;
}

.bit-1{
  margin-right: 4%;
  margin-left: 2%;
  margin-top: 3%;
}

@media (max-width: 700px) {

  .section-3{
    display: flex;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 100%;
    height: 100%;
    margin-left: unset;
    margin-bottom: 2%;
  }

  .section-3-i{
    display: flex;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 100%;
    height: 100%;
    margin-left: unset;
  }

  .law{
    margin-right: 2%;
  }

  .content-1-text-1{
    font-size: 13px;
  }

  .content-1-text-2{
    font-size: 14px;
  }

  .balance-part{
    width: 90%;
  }
  .balance{
    flex-direction: column;
  }
  .balance-1{
    padding: 25px 60px;
    padding-left: 4%;
  }

}

@media (max-width: 500px) {

  .balance-part{
    margin-top: 4%;
    margin-bottom: 4%;
  }


  .section-3{
    display: block;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 70%;
    height: 100%;
    margin-bottom: 3%;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }

  .section-3-i{
    display: block;
    align-content: center;
    align-items: center;
    padding: 15px 25px;
    gap: 24px;
    width: 70%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .vl-2{
    display: none;
  }

  .section-3-content{
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10%;
  }

  .content-1-text-1{
    font-size: 16px;
    margin-bottom: 12%;
  }

  .content-1-text-2{
    font-size: 18px;
  }

  .content-2 img {
    width: 130%;
  }

}

</style>