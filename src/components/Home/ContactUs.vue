<template>
  <div class="download-app-container">
    <div class="download-app-intro">
      <p class="download-intro">Ready To Work with Us</p>
<!--     <div class="seperate">-->
<!--       <i class='bx bxs-phone'></i>&nbsp;&nbsp;-->
<!--       <p class="download-sub">+44 3300010876</p>-->
<!--     </div>-->
      <div class="seperate">
        <i class='bx bx-mail-send' ></i>&nbsp;&nbsp;
        <p class="download-sub">support@digitalsynctrading.com</p>
      </div>
      <div class="seperate">
        <i class='bx bxs-home' ></i>&nbsp;&nbsp;
      <p class="download-sub">Suite 1 2 Station Court, Townmead Road Fulham, London, SW6 2PY</p>
      </div>
      <div class="app-store-container">
      </div>
    </div>
    <div class="download-app-image">
      <img src="@/assets/boxes.svg" alt="logo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>
.download-app-container{
  background-color: #071333;
  display: flex;
  justify-content: space-around;
  height: 300px;
  margin-top: 5%;
  margin-left: 9%;
  margin-right: 9%;
  padding-top: 15px;
  padding-left: 70px;
  padding-right: 50px;
  border-radius: 10px;
}
.download-app-intro{
  padding-top: 20px;
}


.download-intro{
  font-size: 28px;
  line-height: 45px;
  color: white;
}

.seperate{
  display: flex;
  align-content: center;
  align-items: center;
}

i{
  padding-top: 1.5%;
  font-size: 25px;
  color: #fff;
}

.download-sub{
  color: #fff;
  font-size:18px;
  line-height: 28px;
  padding-top: 1.5%;
  width: 75%;
}

img{
  width: 90%;
}

@media (max-width: 990px) {
  .download-intro {
    font-size: 24px;
    line-height: normal;
  }
  .download-sub{
    font-size: 17px;
    line-height: normal;
    padding-top: unset;
  }
  .download-app-container{
    height: 250px;
    padding-top: 29px;
  }
  img{
    width: 110%;
  }
}

@media (max-width: 700px){
  .download-app-container{
    background-color: #071333;
    display: block;
    height: 240px;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
    padding-top: 15px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .download-app-intro{
    padding-top: 20px;
  }


  .download-intro{
    font-size: 25px;
    line-height: 50px;
    color: white;
  }



  img{
    display: none;
  }
}

</style>

