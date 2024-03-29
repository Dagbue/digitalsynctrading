<template>
  <div class="alpha">
    <div class="section-1">
      <p class="header">ENTER THE WORLD OF TRADING</p>
      <p class="sub-text">It takes a few minutes and even fewer clicks to enter the promising and exciting world of
        trading. Take the first step by clicking the link below.</p>
    </div>

    <div class="section-3">
      <div class="btn" >
        <p>Open Live Trade</p>
      </div>
      <div class="btn" >
        <p>Login Live Trade</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Section7"
}
</script>

<style scoped>
.alpha{
  background: #e9e9e9;
  margin-top: 1%;
  padding-top: 6%;
  padding-bottom: 5%;
}
.header{
  font-size: 20px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 700;
  width: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: #071333;
}
.sub-text{
  text-align: center;
  color: #676767;
  font-size: 17px;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  padding-bottom: 5px;
}

.section-3{
  display: flex;
  justify-content: center;
}

.btn{
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
}

.btn p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 225px;
  height: 44px;
  background: #d00027;
  background: -moz-linear-gradient(0,#d00027 0,#ff979f 100%);
  background: -webkit-linear-gradient(0,#d00027 0,#ff979f 100%);
  background: linear-gradient(0,#d00027 0,#ff979f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d00027",endColorstr="#ff979f",GradientType=1);
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
}

.btn p:hover{
  background: #757373;
  background: -moz-linear-gradient(0,#757373 0,#bfbfbf 100%);
  background: -ms-linear-gradient(0,#757373 0,#bfbfbf 100%);
  background: -webkit-linear-gradient(0,#757373 0,#bfbfbf 100%);
  background: linear-gradient(0,#757373 0,#bfbfbf 100%);
  color: #FFFFFF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>