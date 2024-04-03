<template>
  <div class="section-alpha">

    <p class="section-header-1">8 Big Reasons Why Your Funds Are Safe With Digital Sync Trading</p>
    <p class="section-header">
      Ensuring the safe and confident execution of trading activities is our top priority. We continually introduce new
      features to enrich and broaden your investment experience, making it accessible from any device and location.</p>

    <div class="section-content">

      <div class="section-content-1" >

        <div class="box">
          <img src="@/assets/protection.png" class="about-image-2" alt="assets-image"/>
          <h5>DDOS PROTECTION & MULTIPLE REDUNDANCY</h5>
          <p>Digital Sync Trading invested heavily into building the best in class DDOS protected server network with
            multiple layers of redundancies, backup hardware and software tools, failover price feeds, global
            datacenters and optimized regional routing networks, giving our clients a 99,99% server uptime and
            carefree trading experience even during the most highly traded global news events</p>
        </div>

        <div class="box">
          <img src="@/assets/stamp.png" class="about-image-2" alt="assets-image"/>
          <h5>HIGH REGULATORY STANDARDS</h5>
          <p>Digital Sync Trading Group umbrella includes FCA regulated broker, ensuring that all our policies and
            procedures are designed with highest regulatory standards in mind.</p>
        </div>

      </div>

      <div class="section-content-1" >

        <div class="box">
          <img src="@/assets/no-access.png" class="about-image-2" alt="assets-image"/>
          <h5>NEGATIVE BALANCE PROTECTION</h5>
          <p>Unlike traditional futures or options brokerages, Digital Sync Trading offer all its clients negative
            balance protection guarantee. Even during the fast-volatile market moves, you will never experience losses
            that exceed your account balance with Digital Sync Trading.</p>
        </div>

        <div class="box">
          <img src="@/assets/audit.png" class="about-image-2" alt="assets-image"/>
          <h5>REGULAR AUDITS</h5>
          <p>Having a global network of companies, Digital Sync Trading conducts periodic audits of all its books and
            transactions with daily internal reporting affording the highest level of hands-on financial management.</p>
        </div>

      </div>

      <div class="section-content-1" >

        <div class="box">
          <img src="@/assets/risk-management.png" class="about-image-2" alt="assets-image"/>
          <h5>ROBUST RISK MANAGEMENT</h5>
          <p>Digital Sync Trading pedigree is deeply rooted in managing institutional grade liquidity and working with
            professional clients. Our team boast decades in combined risk management experience, with multiple
            successful “black swan” event behind our belt. Digital Sync Trading is using state-of-the-art real-time
            liquidity and risk management monitoring tools and proprietary algorithms in order to match our Top-tier
            liquidity providers with our clients’ trading orders.</p>
        </div>

        <div class="box">
          <img src="@/assets/controls.png" class="about-image-2" alt="assets-image"/>
          <h5>SECURED MEMBER AREA</h5>
          <p>Each registered client or partner of Digital Sync Trading enjoys a secured Member Area with high level of
            encryption protocols and auto-detection of suspicious activity</p>
        </div>

      </div>

      <div class="section-content-1" >

        <div class="box">
          <img src="@/assets/user-secured.png" class="about-image-2" alt="assets-image"/>
          <h5>SEGREGATED CUSTOMER FUNDS</h5>
          <p>All our customer funds are held in segregated accounts with top tier banks and selected financial
            institutions. It is also Digital Sync Trading company policy to never use customer funds for any of the
            company’s business financing needs, hence affording our customers funds the safety they deserve.</p>
        </div>

        <div class="box">
          <img src="@/assets/funds.png" class="about-image-2" alt="assets-image"/>
          <h5>STRINGENT CAPITAL CONTROLS</h5>
          <p>Digital Sync Trading only works with carefully vetted payment system providers with tight risk management
            controls on all the transactions and swift settlement of funds, hence reducing the 3rd party risks to a minimum.</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SafetySection1"
}
</script>

<style scoped>

.section-alpha{
  /*background-color: #f0f2f4;*/
  padding-bottom: 5%;
  padding-top: 3%;
}

.section-header{
  font-size: 17px;
  color: #818a91;
  text-align: center;
  font-weight: 300;
  margin-left: 23%;
  margin-right: 23%;
}
.section-header-1{
  font-size: 23px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1%;
}

.box{
  background-color: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 40px 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 4%;
  width: 450px;
}



.section-content-1{
  display: flex;
  justify-content: space-evenly;
}

.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.about-image-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.about-image-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}
.about-image-3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 29%;
}

.box h5{
  padding-top: 20px;
  color: #222222;
  font-weight: 900;
  text-align: center;
  font-size: 16px;
  padding-bottom: 10px;
}

.box p{
  color: #222222;
  text-align: center;
  line-height: 1.45;
  font-weight: 300;
  font-size: 14.5px;
}

@media (max-width: 700px) {
  .section-header{
    margin-left: 10%;
    margin-right: 10%;
  }
}



@media (max-width: 700px) {
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  .box{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>