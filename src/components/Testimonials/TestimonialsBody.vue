<template>
  <div class="alpha">

<!--    <div class="section-1">-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--    </div>-->

    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>I've been trading cryptocurrencies for years, and this platform has truly impressed me with its
              user-friendly interface and advanced trading tools. It's the perfect blend of simplicity and
              sophistication.</p>
          </blockquote>
          <h3>John M.</h3>
          <h4>Trader</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>Since joining Digital Sync Trading, I've experienced consistent profits. The signals are accurate, and the
              real-time market analysis has been invaluable in making informed trading decisions.</p>
          </blockquote>
          <h3>Sarah L.</h3>
          <h4>Business woman</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>The customer support team is responsive and knowledgeable. They go above and beyond to address any
              concerns promptly. It's reassuring to know that help is just a message away.</p>
          </blockquote>
          <h3>Mark T.</h3>
          <h4>Sales Man</h4>
        </figcaption>
      </figure>
    </div>

    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>I appreciate the wide range of cryptocurrencies available for trading on this platform. It allows me
              to diversify my portfolio easily and explore new investment opportunities.</p>
          </blockquote>
          <h3>Ryan H</h3>
          <h4>Engineer</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>The educational resources provided by the platform are incredibly helpful. Whether you're a beginner or
              an experienced trader, the articles, tutorials, and webinars help you stay informed and improve
              your skills.</p>
          </blockquote>
          <h3>Karen C.</h3>
          <h4>Nurse</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>The mirror trading features have added a new dimension to my trading experience. Being able to follow
              successful traders and replicate their strategies has significantly boosted my overall performance.</p>
          </blockquote>
          <h3>Alex R.</h3>
          <h4>Business Man</h4>
        </figcaption>
      </figure>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestimonialsBody"
}
</script>

<style scoped>
.section-1{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
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
.section-2{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
}
.container {
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  padding: 16px;
  margin: 16px 0;
  width: 380px;
}

.container::after {
  content: "";
  clear: both;
  display: table;
}

.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.container span {
  font-size: 20px;
  margin-right: 15px;
}

@media (max-width: 700px) {
  .section-1{
    display: block;
  }
  iframe{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .snip1533{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }
}

@media (max-width: 500px) {

}
</style>