<template>
  <div class="alpha">
    <div class="content-alpha">

      <div class="content-1">
        <p class="text-1">
          WHY INVEST
        </p>
        <p class="text-2">
          With TradeSyncPro
        </p>
        <p class="text-3">
          Our objective is to optimize investor returns while minimizing potential losses through a disciplined and
          pragmatic approach. We prioritize factual analysis over speculation, strategically acquiring high-return
          and predictable companies at substantial discounts to their intrinsic values.
        </p>
        <br/>
        <p class="text-4" @click="onPostClick">
          Get Started
        </p>
      </div>

      <div class="content-2">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/YIVAluSL9SU" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
<!--        <img src="" alt="section-1-image" class="image"/>-->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "WhyInvest",
  methods: {
    onPostClick() {
      this.$router.push("/signUpEmail");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>

.content-alpha{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 3%;
  padding-top: 4.3%;
}

.content-1{
  width: 50%;
}

.content-2{
  width: 50%;
}

.image{
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.text-1{
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.7;
  letter-spacing: 1.6px;
  text-align: left;
  text-transform: uppercase;
  color: #2e8cec !important;
  vertical-align: middle;
}

.text-2{
  color: #071333;
  font-stretch: normal;
  font-style: normal;
  font-weight: 700;
  letter-spacing: normal;
  font-size: 33px;
  line-height: 1.5;
  margin: 0;
}

.text-3{
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  margin: 0;
  width: 85%;
}

.text-4{
  display: inline-block;
  background-color: #071333;
  border: 1.8px solid #071333;
  color: #ffffff;
  padding: 10px 30px;
  border-radius: 5px;
  margin-top: 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.text-4:hover{
  background-color: #2e8cec;
  border: 1.8px solid #2e8cec;
  color: #ffffff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

@media (max-width: 990px) {
  .text-1{
    line-height: 1.4;
  }

  .text-2{
    line-height: 1.3;
  }

  .text-3{
    line-height: 1.4;
  }

  .text-4{
    padding: 9px 30px;
    margin-top: unset;
  }
}

@media (max-width: 700px) {
  .content-alpha{
    display: flex;
    flex-direction: column-reverse;
  }

  .content-1{
    width: 100%;
    text-align: center;
  }

  .content-2{
    width: 95%;
  }

  .text-1{
    text-align: center;
    margin-top: 2%;
    margin-bottom: 1%;
  }

  .text-2{
    text-align: center;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .text-3{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


}

@media (max-width: 500px) {

}

</style>