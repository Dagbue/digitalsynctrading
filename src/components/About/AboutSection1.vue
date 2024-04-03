<template>
  <div class="alpha">
    <div class="section-1">
      <p class="header">Our True Strength Lies In Our Diversity And Multi-Faceted Approach To Finding Most Optimal Solutions</p>
      <p class="sub-text">Digital Sync Trading, a rapidly expanding boutique FX Broker, specializes in serving the B2B and
        institutional market segments. Founded by a seasoned global team of FX industry veterans, our collective
        market expertise spans decades, covering regions such as the United States, Asia Pacific, Eastern Europe,
        the Middle East, and Latin America. Our strength lies in our diversity and exceptional ability to efficiently
        identify optimal solutions for our clients and partners. The Digital Sync Trading team boasts a track record of
        building top 10 global FX broker brands and contributing to the development of award-winning technology
        utilized by numerous white labels and API clients worldwide.</p>
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

    <div class="section-1">
      <p class="sub-text">Digital Sync Trading offers a diverse range of leading trading instruments, including FX, metals,
        indices, energy, and crypto, featuring competitive core spreads starting at zero pips. Leveraging our
        advanced STP/ECN technology and strong partnerships with tier one banks and prime brokers, we deliver
        customizable liquidity solutions capable of meeting the demands of sophisticated clients such as large-ticket
        or high-frequency traders. Our platform provides a flexible account structure, offering variable spreads and
        commission combinations tailored to accommodate any trading strategy chosen by our clients.</p>
      <br/>
      <p class="sub-text">Our Introducing Brokers (IBs) experience industry-leading rebates, offering instant and
        unlimited commission withdrawals. They benefit from powerful commission settings and a real-time,
        multi-level IB portal. Our White Labels have access to cutting-edge Back Office and risk management tools.
        Meanwhile, our API clients leverage the advantages of our genuine Straight Through Processing
        (STP) / Electronic Communication Network (ECN) setup, supported by a robust datacenter network and dedicated
        lines to all major liquidity hubs.</p>
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

    <div class="section-1">
      <p class="sub-text">
        Digital Sync Trading pioneered the introduction of crypto-nominated accounts, establishing itself as one of the
        earliest brokers worldwide to do so. With a comprehensive selection of 37 crypto CFDs, Digital Sync Trading boasts
        one of the most extensive crypto offerings in the market. Our platform provides a stable trading environment,
        complemented by favorable trading terms, and is renowned for its swift and reliable award-winning execution.
        These factors collectively contribute to the preference of thousands of clients who choose Digital Sync Trading for
        their trading needs.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection1"
}
</script>

<style scoped>
.alpha{
  padding-top: 4%;
  padding-bottom: 5%;
}
img{
  height: 55px;
  width: 55px;
  object-fit: cover;
  margin-bottom: 2%;
  color: #2e8cec;
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
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;
}
.sub-text{
  text-align: left;
  color: #676767;
  font-size: 17px;
  line-height: 1.4;
  width: 68%;
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
  margin-left: 16%;
  margin-right: 15%;
}

.align-2{
  margin-left: 12%;
  margin-right: 12.5%;
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
    line-height: 40px;
    width: 80%;
  }

  .sub-text{
    font-size: 16px;
    width: 85%;
  }

  img{
    height: 80px;
    width: 80px;
  }
}


@media (max-width: 500px) {



  .group-text{
    font-size: 18px;
    margin-bottom: 50px;
  }

}
</style>