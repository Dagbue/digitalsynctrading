<template>
  <div class="alpha">
    <div class="section-1">
      <p class="header">10 Reasons Why Digital Sync Trading</p>
      <p class="sub-text">Our seasoned team of industry experts has meticulously crafted a cutting-edge trading
        environment, featuring state-of-the-art architecture, exceptional trading terms, and robust partnership
        programs. Explore a diverse selection of over 100 CFD instruments and embark on your trading journey today!</p>
    </div>

    <div class="section-2 align">

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/best.png" alt="icon" />
        </div>
        <div class="group-text">BESPOKE LIQUIDITY</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/trading.png" alt="icon" />
        </div>
        <div class="group-text">BEST TRADING TERMS ON GOLD</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/partnership.png" alt="icon" />
        </div>
        <div class="group-text">GREAT PARTNERSHIP PROGRAMS</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/protection.png" alt="icon" />
        </div>
        <div class="group-text">NEGATIVE BALANCE PROTECTION</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/no-access.png" alt="icon" />
        </div>
        <div class="group-text">NO TRADING RESTRICTIONS</div>
      </div>

    </div>

    <div class="section-2 align-2">

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/network.png" alt="icon" />
        </div>
        <div class="group-text">REGIONAL DATACENTER NETWORKS</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/broker.png" alt="icon" />
        </div>
        <div class="group-text">REPUTABLE FCA B2B BROKER GROUP</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/solution.png" alt="icon" />
        </div>
        <div class="group-text">STATE OF THE ART PAMM SOLUTION</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/technology.png" alt="icon" />
        </div>
        <div class="group-text">STP/ECN TECHNOLOGY</div>
      </div>

      <div class="group">
        <div class="image-wrap">
          <img src="@/assets/widget.png" alt="icon" />
        </div>
        <div class="group-text">WIDEST SELECTION OF CRYPTOS INSTRUMENTS</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "WhyUsSection1"
}
</script>

<style scoped>
.alpha{
  padding-top: 4%;
  padding-bottom: 5%;
}
.section-1{
  margin-top: 2%;
}
.header{
  font-size: 22.5px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 700;
  color: #071333;
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
  align-items: center;
  align-content: center;
  margin-top: 5%;
}

.group{
  text-align: center;
}

.group-text{
  font-size: 15px;
  /*margin-bottom: 75px;*/
  color: #071333;
  padding-top: 8px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.align{
  margin-left: 10%;
  margin-right: 9%;
}

.align-2{
  margin-left: 7%;
  margin-right: 7%;
}

img{
  height: 55px;
  width: 55px;
  object-fit: cover;
  margin-bottom: 2%;
  color: #2e8cec;
}


@media (max-width: 990px) {
  .header{
    margin-bottom: 50px;
    font-size: 38px;
    line-height: 70px;
  }
}

@media (max-width: 700px) {

  .alpha{
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .section-2{
    display: block;
  }

  .align{
    margin-left: unset;
    margin-right: unset;
  }

  .align-2{
    margin-left: unset;
    margin-right: unset;
  }
  .header{
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 30px;
  }

  .sub-text{
    width: 90%;
  }

  img{
    height: 80px;
    width: 80px;
    margin-top: 1%;
  }
}


@media (max-width: 500px) {


  .header{
    margin-bottom: 20px;
    font-size: 25px;
    line-height: 50px;
  }

  .group-text{
    font-size: 18px;
    margin-bottom: 50px;
  }

}
</style>