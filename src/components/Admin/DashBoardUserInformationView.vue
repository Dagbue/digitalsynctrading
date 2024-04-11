<template>
  <div>
    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Payment Details</p>
      <hr/>
      <div class="form">


        <div class="space">
          <label>Enter Bitcoin Address</label>
          <input type="text" v-model="bitcoinAddress"  class="form-input"/>
        </div>


        <div class="space">
          <label>Enter Ethereum Address</label>
          <input type="text" v-model="ethereumAddress"   class="form-input"/>
        </div>




        <div class="space">
          <label>Enter USDT Address</label>
          <input type="text" v-model="usdtAddress"  class="form-input"/>
        </div>




        <!--          <div class="space">-->
        <!--            <label>Account Number</label>-->
        <!--            <input type="text" v-model="accountNumber"  class="form-input"/>-->
        <!--          </div>-->





        <!--          <div class="space">-->
        <!--            <label>Routing Number</label>-->
        <!--            <input type="text" v-model="routingNumber"  class="form-input"/>-->
        <!--          </div>-->




        <div class="btn-alpha">
          <!--          <p @click="press" class="btn">Get Current Payment details</p>-->
          <!--          <base-button  style="  background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Get Current Payment details</base-button>-->
          <!--          <br/>-->
          <!--          <base-button @click="update" style=" background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Update Payment details</base-button>-->

          <p @click="showDialog"  class="btn">Update Payment details</p>

        </div>


      </div>
    </div>

  </div>
</template>

<script>

import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "DashBoardUserInformationView",
  data () {
    return {
      contacts: [],
      accountNumber: '',
      bankName: '',
      bitcoinAddress: '',
      ethereumAddress: '',
      usdtAddress: '',
      routingNumber: '',
      loading: false,
    }
  },
  methods:{
    async showDialog() {
      try {
        this.loading = true;
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

        await setDoc(doc(db, "paymentInfo", "admin"), {
          bitcoinAddress: this.bitcoinAddress,
          ethereumAddress: this.ethereumAddress,
          usdtAddress: this.usdtAddress,
        }, {merge: true})
            .then(() => {
              console.log('saved the payment info')
            })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Wallet Addresses Saved Successfully',
        });
        this.populateForm()
      }
      catch (err) {
        this.error = err.message
        await Swal.fire({
          icon: 'error',
          title: 'error',
          text: err.message,
        });
      } finally {
        this.loading = false;
      }
    },

    populateForm() {
      this.bitcoinAddress = this.contacts[0].bitcoinAddress;
      this.ethereumAddress = this.contacts[0].ethereumAddress;
      this.usdtAddress = this.contacts[0].usdtAddress;
    },
  },
  async created() {
    const querySnapshot2 = await getDocs(collection(db, "paymentInfo"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'bitcoinAddress': doc.data().bitcoinAddress,
        'ethereumAddress': doc.data().ethereumAddress,
        'usdtAddress': doc.data().usdtAddress,
      }
      this.contacts.push(data)
    })
    await this.populateForm();
  },
  async mounted() {
    const querySnapshot2 = await getDocs(collection(db, "paymentInfo"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'bitcoinAddress': doc.data().bitcoinAddress,
        'ethereumAddress': doc.data().ethereumAddress,
        'usdtAddress': doc.data().usdtAddress,
      }
      this.contacts.push(data)
    })
    await this.populateForm();
  }
}
</script>

<style scoped>

.section-2-alpha{
  margin-top: 4%;
  /*float: left;*/
  /*margin-left: 20px;*/
  background-color: #3C4A57FF;
  padding: 30px 40px;
  width: 55%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.separate{
  display: flex;
  justify-content: space-around;
}

.form-input{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px ;
  width: 590px;
  height: 35px;
  color: #071333;
  padding: 5px 20px;
}

.text-1{
  text-align: left;
}


hr {
  border-top: 1px solid #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
}

.space{
  display: flex;
  flex-direction: column;
  text-align: left;
}
label{
  padding-bottom: 5px;
  padding-top: 25px;
}


.btn-alpha{
  /*display: flex;*/
  /*float: left;*/
  margin-top: 3%;
}

input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

.btn{
  padding: 15px 55px;
  color: white;
  background-color: #071333;
  border: 0.5px solid #071333;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}


@media (max-width: 700px) {
  .form-input{
    width: 100%;
  }

  .section-2-alpha{
    padding: 30px 30px;
    width: 95%;
  }
  .btn-alpha{
    margin-top: 8%;
  }
}
</style>