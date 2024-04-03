<template>
  <div class="alpha">
    <p class="header">Testimonials</p>
    <div class="section-1">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>Digital Sync Trading has the simplest interface of all and also has the fastest entry point into the market.I was
              a banker who was deep in debt, but  with the help of Digital Sync Trading ..., now I am living well and
              comfortable with my family</p>
          </blockquote>
          <h3>Wisteria Ravenclaw</h3>
          <h4>Investor</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>My name is William Ursula Gurnmeister. Few weeks I have traded with Digital Sync Trading, i made enough profit of
              2.8btc and my withdrawal was processed instantly. Digital Sync Trading is the best....</p>
          </blockquote>
          <h3>Ursula Gurnmeister</h3>
          <h4>Business Woman</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>This is a more than a trading company. Giving you guys 5 ratings for your support services. Great
              company. Awesome support.. Digital Sync Trading is the best.... </p>
          </blockquote>
          <h3>Ronald Dooms</h3>
          <h4>Trader</h4>
        </figcaption>
      </figure>
    </div>
    <p class="btn">View More</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section6"
}
</script>

<style scoped>
.alpha{
  padding-top: 4%;
  /*padding-bottom: 5%;*/
}
.section-1{
  display: flex;
  justify-content: center;
}
.header{
  text-align: center;
  font-size: 30px;
  padding-bottom: 15px;
}
.snip1533 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #9e9e9e;
  display: inline-block;
  font-size: 16px;
  margin: 35px 10px 10px;
  max-width: 370px;
  min-width: 250px;
  position: relative;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  border-top: 5px solid #2e8cec;
}

.snip1533 *,
.snip1533 *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

.snip1533 figcaption {
  padding: 13% 10% 12%;
}

.snip1533 figcaption:before {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #2e8cec;
  content: "&";
  font-size: 32px;
  font-style: normal;
  left: 50%;
  line-height: 60px;
  position: absolute;
  top: -30px;
  width: 60px;
}

.snip1533 h3 {
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 10px 0 5px;
}

.snip1533 h4 {
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
}

.snip1533 blockquote {
  font-style: italic;
  font-weight: 300;
  margin: 0 0 20px;
}

.btn{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  text-align: center;
  background: #071333;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.8em 25px;
  border-radius: 5px;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  margin-top: 2%;
}
.btn:hover{
  background: #2e8cec;
  color: #FFFFFF;
}

@media (max-width: 900px) {

}

@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  .snip1533{
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .btn{
    margin-top: 2%;
  }
}

@media (max-width: 500px) {

}
</style>