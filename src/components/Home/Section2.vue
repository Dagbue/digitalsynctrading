<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
<!--        <p class="text-1">Revolutionary</p>-->
        <p class="text-2">Unlock Your Potential with Mirror Trading</p>
        <p class="text-3">Mirror trading saves you time by automatically replicating the strategies of experienced traders. Learn from
          the experts and diversify your investments with ease.</p>

        <div class="button-part">
          <p class="btn">Sign Up</p>
          <p class="btn-2">Log In</p>
        </div>
      </div>

      <div class="section-2">
        <video  loop autoplay playsinline class="responsive-video" :src="videoSource">
        </video>

<!--        <video loop autoplay playsinline="" class="responsive-video" controls width="600" height="400">-->
<!--          <source :src="videoSource" type="video/mp4">-->
<!--        </video>-->
      </div>

    </div>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section2",
  data() {
    return {
      videoSource: require('@/assets/laptop.mp4'), // adjust the path based on your project structure
    };
  },
}
</script>

<style scoped>
.alpha{
  /*background: #fff;*/
  /*background: -moz-linear-gradient(180deg,#fff 0,#e2e2e2 100%);*/
  /*background: -webkit-linear-gradient(180deg,#fff 0,#e2e2e2 100%);*/
  /*background: linear-gradient(180deg,#fff 0,#e2e2e2 100%);*/
  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#e2e2e2",GradientType=1);*/
  /*border-bottom: 1px solid #c9c9c9;*/
  margin-top: 1%;
}

video.responsive-video {
  max-width: 80%;
  height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-right: 10%;
}
.section-1{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;
}

.section-2{
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}

.text-1{
  padding-bottom: 10px;
  font-size: 18px;
  color: #0093da;
}

.text-2{
  font-size: 35px;
  padding-bottom: 10px;
  width: 80%;
}

.text-3{
  font-size: 19px;
  padding-bottom: 10px;
  width: 95%;
  color: #676767;
}

.button-part{
  display: flex;
  margin-top: 1%;
}


.btn{
  display: block;
  width: 140px;
  text-align: center;
  background: #071333;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.6em 20px;
  border-radius: 5px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin-top: 2%;
  margin-right: 2%;
}
.btn:hover{
  background: #2e8cec;
  color: #FFFFFF;
}



.btn-2{
  display: block;
  width: 140px;
  text-align: center;
  background: #071333;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.6em 20px;
  border-radius: 5px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin-top: 2%;
}
.btn-2:hover{
  background: #2e8cec;
  color: #FFFFFF;
}

@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .section-1{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-left: unset;
    text-align: center;
    margin-bottom: 20px;
  }

  .section-2{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


  .section-alpha{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .button-part{
    justify-content: center;
  }

  .text-2{
    font-size: 25px;
    padding-bottom: 8px;
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text-3{
    font-size: 18px;
    padding-bottom: 8px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 500px) {

}
</style>