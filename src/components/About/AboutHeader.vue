<template>
  <div class="portfolio-header-alpha">
    <div class="section">

        <div class="portfolio-header1">
          <p class="portfolio-header1-one">
            Enabling a worldwide network of empowered investors.
          </p>
          <h3 class="portfolio-header1-three">
            Digital Sync Trading stands as a global leader in social investment networks, dedicated to transforming the
            landscape of investment practices and elevating financial education for investors.
          </h3>
          <h2 class="portfolio-header1-two">
            Our goal is to unlock global markets, enabling accessible and straightforward trading and investment
            opportunities for everyone in a transparent manner.
          </h2>
        </div>

      <div class="video">
        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutHeader"
}
</script>

<style scoped>
.section {
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 7%;
}

.portfolio-header-alpha {
  background-color: #071333;
  height: 100%;
}
.video {
  padding-right: 6%;
  padding-top: 6%;
  width: 100%;
}
iframe{
  width: 100%;
}
.portfolio-header1 {
  line-height: 41px;
}
.portfolio-header1-one {
  color: #ffffff;
  font-size: 25px;
  padding-top: 8.5%;
  padding-left: 7%;
  padding-right: 5%;
}
.portfolio-header1-two {
  padding-left: 7%;
  padding-right: 15%;
  padding-top: 1%;
  font-size: 20px;
  letter-spacing: 1px;
  color: #ffffff;
}
.portfolio-header1-three {
  color: white;
  font-size: 30px;
  padding-left: 7%;
  padding-right: 10%;
}
.global{
  color: #ffffff;
}
@media (max-width: 990px) {
  .portfolio-header1-three{
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .portfolio-header1-one{
    font-size: 20px;
    letter-spacing: unset;
  }
  .portfolio-header1 {
    line-height: unset;
    padding-top: 7%;
  }
  .portfolio-header1-two{
    font-size: 23px;
  }
}

@media (max-width: 800px) {
  .section {
    display: block;
  }
  .portfolio-header1-one {
    font-size: 25px;
    padding-top: 7px;
  }
  .portfolio-header-alpha {
    height: 100%;
  }
  .video {
    margin-left: 3%;
    margin-right: unset;
  }
  .portfolio-header1{
    text-align: center;
  }
}

@media (max-width: 500px) {
  .video {
    margin-left: 2.5%;
    margin-right: unset;
  }
  iframe{
    width: 100%;
  }
  .portfolio-header1-one {
    font-size: 18px;
    padding-top: 15px;
  }
  .portfolio-header1-three{
    font-size: 21px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .portfolio-header1-two{
    font-size: 20px;
  }
  .portfolio-header-alpha {
    height: 100%;
  }
}
</style>