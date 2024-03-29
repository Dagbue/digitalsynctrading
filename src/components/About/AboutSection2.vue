<template>
  <div class="alpha">
    <div class="section-1">
      <p class="header">Enter The World Of Trading</p>
      <p class="sub-text">It takes a few minutes and even fewer clicks to enter the promising and exciting world of
        trading. Take the first step by clicking the link below.</p>
    </div>

    <div class="section-3">
      <div class="btn" >
        <p>Open Live Trade</p>
      </div>
      <div class="btn-2" >
        <p>Login Live Trade</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection2"
}
</script>

<style scoped>
.alpha{
  /*background: #e9e9e9;*/
  padding-top: 4%;
  padding-bottom: 1%;
}
.header{
  font-size: 25px;
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
  height: 45px;
  background: #071333;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
}

.btn p:hover{
  background: #2e8cec;
  color: #FFFFFF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}

.btn-2{
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
}

.btn-2 p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 225px;
  height: 44px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  background: #071333;
  color: #FFFFFF;
}

.btn-2 p:hover{
  background: #0093da;
  color: #FFFFFF;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
@media (max-width: 700px){
  .sub-text{
    font-size: 16px;
    width: 90%;
  }
  .section-3{
    display: block;
    justify-content: center;
  }
  .btn{
    margin-top: 3%;
    margin-bottom: 3%;
  }
}
</style>