<template>
  <div class="section-2">

    <div class="text-box-2">
      <h4 class="benefit-header">Benefits of Investing with TradeSyncPro</h4>
      <p class="benefit-text">Managed funds offer several advantages, allowing investors to access diverse asset
        classes and market sectors for enhanced exposure and potential returns.</p>
      <ul class="list-alpha">
        <li class="list-item">Diversification</li>
        <li class="list-item"> Potential wealth generation</li>
        <li class="list-item">Cost-effective investment</li>
         <li class="list-item"> Access to a range of assets</li>
         <li class="list-item">Geared exposure</li>
          <li class="list-item">Under-performing investments</li>
      </ul>

      <p class="benefit-text">
        Building your investment portfolio and venturing into digital wealth through cryptocurrency doesn't require
        expertise. The world of cryptocurrency can seem intimidating, particularly for beginners. Managing a crypto
        investment can be challenging, given the market's uncertainty and volatility, as well as the time required
        for success.
      </p>



    </div>

    <div class="text-box">

      <h4 class="heading-primary-main-2">Why Invest With Bitcoin?</h4>
      <section class="video">
        <iframe width="770" height="400" src="https://www.youtube.com/embed/YIVAluSL9SU" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
      </section>

      <div class="heading-primary">
        <p class="heading-primary-main">Our Investment Principles</p>
        <p class="heading-primary-sub">We aim to optimize investor returns while mitigating potential losses through
          a disciplined and pragmatic approach. Our strategy is grounded in factual analysis rather than speculation,
          guiding us to acquire high-return, predictable companies at substantial discounts to their
          intrinsic values.</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "investment-principles"
}
</script>

<style scoped>
.section-2 {
  font-size: 16px;
  line-height: 1.7;
  color: #eee;
  height: 100vh;
  background-image:
      linear-gradient(to right bottom,
      rgba(5, 5, 33, 0.9),
      rgba(5, 5, 33, 0.9)),
      url("https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-top: 4%;
}

.text-box {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.heading-primary-main {
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 0;
}

.heading-primary-main-2{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.heading-primary-sub {
  font-size: 17px;
  font-weight: 400;
  color: white;
  padding-left: 15%;
  padding-right: 15%;
}



iframe{
  width: 70%;
}

.text-box{
  width: 50%;
  margin-top: 3%;
}

.text-box-2{
  width: 50%;
  text-align: center;
  margin-top: 3%;
}
.benefit-header{
  display: block;
  font-size: 22px;
  font-weight: bold;
  color: #Fff;
  letter-spacing: 1px;
  padding-bottom: 10px;
}

.benefit-text{
  font-size: 18px;
  font-weight: 400;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
}


.list-alpha{
  list-style: none;
  font-weight: bold;
  font-size: 17px;
  margin-top: 3%;
  margin-bottom: 3%;
}

.list-item{
  display: grid;
  place-items: center;
  position: relative;
  height: 40px;
  width: 55%;
  background: white;
  color: #222222;
  border-radius: 7px;
  margin-bottom: 15px;
  /*margin-left: 19%;*/
  margin-left: auto;
  margin-right: auto;
}

.list-item::before{
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: white;
  width: 12px;
  height: 12px;
  transform: translate(-50%,-50%) rotate(45deg);
}

@media (max-width: 500px) {
  iframe{
    width: 90%;
  }
  .list-alpha{
    font-size: 14px;
  }
  .list-item{
    width: 70%;
  }
}

@media (max-width: 990px) {
  .section-2 {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .text-box-2{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
  .text-box{
    width: 100%;
    text-align: center;
    margin-top: 3%;
  }
}



</style>
