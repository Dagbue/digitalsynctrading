<template>
  <div >

    <div class="body">
      <h2>List of Experts</h2>
    </div>

    <div class="section-5">
      <div class="empty-state" v-if="this.contacts.length === 0">
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your Trade expert list will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>

      <div class="table" v-if="this.contacts.length >0">
        <table>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Win Rate</th>
            <th>Profit share</th>
            <th>copy status</th>
          </tr>

          <tbody v-for="child in paginatedItems" :key="child.key">
          <tr>
            <td>
              <img  :src="child.image" alt="Uploaded Image" class="uploadedimage" />
            </td>
            <td>{{child.firstName}}</td>
            <td>{{child.lastName}}</td>
            <td>{{ child.winRate }}</td>
            <td>{{child.profitShare}}</td>
            <td>{{child.status}}</td>
          </tr>
          </tbody>

        </table>
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
          <div class="page-indicator">
            Page {{ currentPage }} of {{ totalPages }}
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
        </div>

      </div>

    </div>

    <div style="color: white;" class="section-2-alpha">
      <p class="text-1">Add Expert</p>
      <hr/>

      <form class="form" @submit.prevent="showDialog">

        <div class="space">
          <label>Image</label>
          <input
              type="file"
              accept="image/*"
              @change="handleFileUpload"
              required
              class="form-input"
          />
        </div>


        <div class="space">
          <label>First Name</label>
          <input type="text" v-model="firstName" required="required"  class="form-input"/>
        </div>


        <div class="space">
          <label>Last Name</label>
          <input type="text" v-model="lastName" required="required"  class="form-input"/>
        </div>

        <div class="space">
          <label>win rate</label>
          <input type="text" v-model="winRate" required="required"  class="form-input"/>
        </div>


        <div class="space">
          <label>Profit share</label>
          <input type="text" v-model="profitShare" required="required" class="form-input"/>
        </div>




        <div class="btn-alpha">
          <!--          <p @click="press" class="btn">Get Current Payment details</p>-->
          <!--          <base-button  style="  background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Get Current Payment details</base-button>-->
          <!--          <br/>-->
          <!--          <base-button @click="update" style=" background-color: #5d78ff;border: 1px solid #5d78ff;" :loading="loading">Update Payment details</base-button>-->

          <base-button :loading="loading">Add Trader</base-button>
<!--          <p @click="showDialog"  class="btn">Add Trader</p>-->

        </div>


      </form>
    </div>
  </div>
</template>

<script>
import {collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "@/firebase/config";
import Swal from "sweetalert2";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
export default {
  name: "DashBoardUserDashBoardView",
  components: {BaseButton},
  data () {
    return {
      contacts: [],
      firstName: '',
      lastName: '',
      winRate: '',
      profitShare: '',
      status: "notCopied",
      loading: false,
      file: null, // This will hold the file object
      fileDataUrl: null, // This will hold the data URL of the file
      currentPage: 1,
      itemsPerPage: 9,
    }
  },
  computed:{
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.contacts.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.contacts.length / this.itemsPerPage);
    },
  },
  methods:{
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.file = file; // Save file to Vue data
        this.readFileAsDataUrl(file);
      }
    },
    readFileAsDataUrl(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileDataUrl = e.target.result; // Set the data URL to the Vue data
      };
      reader.readAsDataURL(file);
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    async showDialog() {
      try {
        this.loading = true;
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures

        await setDoc(doc(db, "tradeExperts", this.firstName), {
          image: this.fileDataUrl,
          firstName: this.firstName,
          lastName: this.lastName,
          winRate: this.winRate,
          profitShare: this.profitShare,
          status: this.status,
        }, {merge: true})
            .then(() => {
              console.log('saved the Expert')
            })
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Trade Expert Saved Successfully',
        });
        this.location.reload();
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


  },
  async created() {
    const querySnapshot2 = await getDocs(collection(db, "tradeExperts"));
    querySnapshot2.forEach((doc) => {
      let data = {
        'image': doc.data().image,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'winRate': doc.data().winRate,
        'profitShare': doc.data().profitShare,
        'status': doc.data().status,
      }
      this.contacts.push(data)
    })

  },
  // async mounted() {
  //   const querySnapshot2 = await getDocs(collection(db, "tradeExperts"));
  //   querySnapshot2.forEach((doc) => {
  //     let data = {
  //       'firstName': doc.data().firstName,
  //       'lastName': doc.data().lastName,
  //       'winRate': doc.data().winRate,
  //       'profitShare': doc.data().profitShare,
  //       'status': doc.data().status,
  //     }
  //     this.contacts.push(data)
  //   })
  //
  // }
}
</script>

<style scoped>
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.uploadedimage{
  width: 7%;
  border-radius: 100px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.body{
  padding: 32px;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  background-color: #F9FBFD;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #667085;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 15px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
  width: 500px;
}

.empty-state{
  text-align: center;
  margin-top: 2%;
  /*margin-right: 8%;*/
}


.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}












.pagination{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.previous{
  /*display: flex;*/
  /*align-content: center;*/
  /*align-items: center;*/
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #667085;
  /*border: 1px solid #1570EF;*/
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}

.previous:hover{
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}

.page-indicator{
  color: #667085;
  font-weight: 200;
  font-size: 13px;
}

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
  margin-bottom: 2%;
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