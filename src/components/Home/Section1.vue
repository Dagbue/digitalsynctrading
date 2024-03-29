<template>
  <div class="alpha">

    <div class="section-1">
<!--      <p class="header">Revolutionary</p>-->
      <p class="header">Unlock the Power of Mirror Trading</p>
      <p class="sub-text">Empower yourself with our platform that seamlessly mirrors the real-time trading strategies
        of seasoned cryptocurrency experts. Explore a diverse range of proficient traders, and watch as our automated
        system effortlessly executes the chosen strategies on your behalf.</p>
    </div>

    <div class="section-2">

      <div class="section-2-inner">
        <img src="https://defitradehub.pro/assets/images/svgs/World.svg" alt="image" class="image"/>
        <p class="text-1">Real-Time Copying</p>
        <p class="text-2">Swiftly replicate trades and maintain a competitive edge in the market.</p>
      </div>

      <div class="section-2-inner">
        <img src="https://defitradehub.pro/assets/images/svgs/Stocks.svg" alt="image" class="image" />
        <p class="text-1">Diverse Trader Selection</p>
        <p class="text-2">Select from a diverse array of proficient traders.</p>
      </div>

      <div class="section-2-inner">
        <img src="https://defitradehub.pro/assets/images/svgs/Crypto.svg" alt="image" class="image" />
        <p class="text-1">Automated Trading</p>
        <p class="text-2">Allow our system to autonomously execute trades on your behalf.</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section1"
}
</script>

<style scoped>
.section-1{
  margin-top: 2%;
}
.header{
  font-size: 22.5px;
  color: #071333;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 700;
}
.sub-text{
  text-align: center;
  color: #676767;
  font-size: 17px;
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.section-2{
  display: flex;
  justify-content: space-around;
  padding-top: 3%;
  padding-bottom: 3%;
}

.image{
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-right: 10px;
  margin-bottom: 2%;
}

.section-2-inner{
  text-align: center;
}

.text-1{
  font-size: 19px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}

.text-2{
  text-align: center;
  color: #676767;
  font-size: 16px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .sub-text{
    font-size: 16px;
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .section-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .image{
    height: 95px;
    width: 95px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4%;
  }
}

@media (max-width: 500px) {

}
</style>