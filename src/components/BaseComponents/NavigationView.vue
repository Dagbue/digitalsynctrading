<template>
  <div v-if="!$route.meta.hideNavigation" >

    <div class="topmost-header">
      <div class="topmost-header-1">
        <p class="topmost-header-text">
          <i class='bx bxs-map' ></i>
          71-75 Uxbridge Road, London, England, W5 5SL
        </p>
        <p class="topmost-header-text">
          <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.
        </p>

      </div>
    </div>

    <div class="separate">

      <div class="style-4">

        <img alt="company logo" src="@/assets/companylogo.svg" class="logo" @click="home" />

        <ul class="menu-4" v-show="!mobile">

          <li class="link">
            <div class="dropdown-navigation" @click="toggleDropdown">
              Company
              <i class='bx bxs-chevron-down'></i>
              <div v-if="showDropdown" class="dropdown-content">
                <router-link  to="/whyUs">Why Us<i class='bx bxs-chevron-right'></i></router-link>
                <router-link  to="/about">About Us<i class='bx bxs-chevron-right'></i></router-link>
                <router-link  to="/safety">Safety Of Funds<i class='bx bxs-chevron-right'></i></router-link>
              </div>
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation" @click="toggleDropdown">
              <router-link to="/testimonials">Testimonials</router-link>
<!--              <i class='bx bxs-chevron-down'></i>-->

<!--              <div v-if="showDropdown" class="dropdown-content">-->
<!--                <router-link  to="/vehicleLoans">Forex<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/personalLoans">Indices<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/homeLoansView">Cryptos<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/vehicleLoans">EU/US Stocks<i class='bx bxs-chevron-right'></i></router-link>-->
<!--              </div>-->
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation" @click="toggleDropdown">
              <router-link to="/pricing">Pricing</router-link>
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation">
              <router-link to="/contact">Contact Us</router-link>
<!--              <i class='bx bxs-chevron-down'></i>-->
<!--              <div v-if="showDropdown" class="dropdown-content">-->
<!--                <router-link  to="/guidesView">-->
<!--                  Guides-->
<!--                  <i class='bx bxs-chevron-right'></i>-->
<!--                </router-link>-->
<!--                <router-link  to="/resourcesView">Resources<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/faqView">FAQ's<i class='bx bxs-chevron-right'></i></router-link>-->
<!--              </div>-->
            </div>
          </li>

          <li class="link">
            <div class="dropdown-navigation">
              <router-link to="/faq">F.A.Q</router-link>
<!--              <i class='bx bxs-chevron-down'></i>-->
<!--              <div v-if="showDropdown" class="dropdown-content">-->
<!--                <router-link  to="/about">-->
<!--                  About AFFBB-->
<!--                  <i class='bx bxs-chevron-right'></i>-->
<!--                </router-link>-->
<!--                <router-link  to="/contactView">Contact Us<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/openView">Open an Account<i class='bx bxs-chevron-right'></i></router-link>-->
<!--                <router-link  to="/loanView">Apply for Loan<i class='bx bxs-chevron-right'></i></router-link>-->

<!--              </div>-->
            </div>
          </li>

          <div class="link fg--search">
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="text" class="input" placeholder=""/>
          </div>

          <li class="link"><router-link  to="/login" class="auth">Login</router-link></li>
        </ul>

      </div>

      <div class="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/inverse.svg" class="logo2" />

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <p class="title-content-para">Company</p>
                </div>
                <svg viewBox="0 0 256 512" width="8" title="angle-right" class="side-icon" fill="#0f2e6d">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </svg>
                <svg viewBox="0 0 320 512" height="20" title="angle-down" class="down-icon" fill="#0f2e6d">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
              </div>

              <div class="content" >
                <div class="title-content content-2">
                  <router-link to="/whyUs"><p @click="toggleMobileNav2" class="title-content-para">Why Us</p></router-link>
                </div>
              </div>

              <div class="content" >
                <div class="title-content content-2">
                  <router-link to="/about"><p @click="toggleMobileNav2" class="title-content-para">About Us</p></router-link>
                </div>
              </div>

              <div class="content" >
                <div class="title-content content-2">
                  <router-link to="/safety"><p @click="toggleMobileNav2" class="title-content-para">Safety Of Funds</p></router-link>
                </div>
              </div>


            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/testimonials"><p @click="toggleMobileNav2" class="title-content-para">Testimonials</p></router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/pricing"><p @click="toggleMobileNav2" class="title-content-para">Pricing</p></router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/contact"><p @click="toggleMobileNav2" class="title-content-para">Contact Us</p></router-link>
                </div>
              </div>

            </label>

            <label class="accordion-wrapper">
              <input type="checkbox" class="accordion" hidden />
              <div class="title">
                <div class="title-content">
                  <router-link to="/faq"><p @click="toggleMobileNav2" class="title-content-para">F.A.Q</p></router-link>
                </div>
              </div>

            </label>


            <li @click="toggleMobileNav2" ><router-link  to="/login" class="auth-2">Login</router-link></li>

          </ul>

        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "NavigationView",
  data()  {
    return {
      value1: false,
      mobile: false,
      mobileNav: false,
      windowWidth: false,
      showDropdown: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    home(){
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
}
</script>

<style scoped>

.bx-menu{
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  transition: .8s ease all;
  color: #2e8cec;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 14.5%;
  margin-left: 6%;
  margin-top: 0.8%;
  margin-bottom: 0.8%;
}

.style-4 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 0.8em;
  overflow: hidden;
  font-weight: bold;
  font-size: 17px;
  align-items: center;
  align-content: center;
}


.bxs-chevron-down{
  color: #071333;
  font-size: 15px;
}

.bxs-chevron-right{
  color: #071333;
  font-size: 15px;
}


.link-2:hover{
  color: #071333;
}

.menu-4{
  display: flex;
  align-content: center;
  align-items: center;
}

.auth{
  background: #071333;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.4em 25px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
}
.auth:hover{
  background: #2e8cec;
  color: #FFFFFF;
}

.auth-2{
  background: #071333;
  /*border: 1px solid #124DA8;*/
  color: #FFFFFF;
  padding: 0.5em 25px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.25s ease;
  width: 120px;
}
.auth:hover{
  background: #2e8cec;
  color: #FFFFFF;
}


.link-2 {
  padding: 0.3em 0;
  color: #071333;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  background-color: #2e8cec;
  padding-top: 12px;
  padding-left: 3%;
  padding-bottom: 12px;
  color: white;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  justify-content: right;
}

.topmost-header-text {
  font-size: 14px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  font-weight: 900;
}
.topmost-header-text:hover {
  text-decoration: underline;
}
i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 240px;
  height: 100%;
  background-color: grey;
  font-size: 20px;
  /*text-align: left;*/
  /*padding-left: 20px;*/
}

.logo2{
  padding-top: 5%;
  width: 65%;
}

.dropdown-nav li {
  /*margin-top: 12%;*/
  overflow: hidden;
  list-style: none;
  height: 100%;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  /*color: #2e8cec;*/
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  /*background-color: #D23535;*/
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

/*.dropdown-nav li:hover a,*/
/*.dropdown-nav.current a {*/
/*  color: #D23535;*/
/*}*/

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}

.separate{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.fg--search {
  background: white;
  position: relative;
  width: 210px;
}
.fg--search input {
  width: 100%;
  padding: 9px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #E9F0FFFF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 7px;
}

.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 3.5px;
}

.fa-search{
  color: #667085;
  /*margin-right: 10px;*/
}



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

a {
  display: block;
  color: #071333;
  text-align: center;
  padding: 14px 6px;
  text-decoration: none;
}

a:hover {
  /*background-color: #ddd;*/
  /*color: #2e8cec;*/
  text-decoration: underline;
}

.dropdown-navigation {
  display: inline-block;
  color: #222222;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
}

.dropdown-navigation:hover .dropdown-content {
  display: block;
}

.dropdown-navigation-2:hover .dropdown-content {
  display: block;
}


.accordion-wrapper {
  display: block;
  /*box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);*/
  /*max-width: 500px;*/
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
}

.accordion + .title {
  user-select: none;
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
  /*justify-content: space-between;*/
  padding: 10px 20px;
  /*background: #1565C0;*/
  /*border: 1px solid #EAECF0;*/
  /*padding-top: 10px;*/
  /*padding-left: 7.5px;*/
  /*padding-bottom: 9px;*/
  border-radius: 5px;
  /*background-color: #FFFFFF;*/
}

.accordion ~ .title strong {
  line-height: 24px;
}

.accordion ~ .title .side-icon {
  display: block;
  padding-top: 3px;
}

.accordion:checked ~ .title .side-icon {
  display: none;
}

.accordion ~ .title .down-icon {
  display: none;
  padding-top: 3px;
}

.accordion:checked ~ .title .down-icon {
  display: block;
}

.accordion ~ .content {
  display: none;
  padding: 2px;
  cursor: pointer;
  /*background-color: #FFFFFF;*/
  /*border: 1px solid #EAECF0;*/
  border-radius: 5px;
}

.accordion:checked ~ .content {
  display: block;
}

.content-inner{
  display: flex;
  align-items: center;
  align-content: center;
}

.content-inner p{
  padding-left: 2%;
  color: #101828;
}

.title-content{
  display: flex;
  align-content: center;
  align-items: center;
}

.bxs-dashboard{
  color: #0f2e6d;
  font-size: 20px;
}

.title-content-para{
  padding-left: 5px;
  padding-right: 8px;
  font-size: 17px;
  color: #0f2e6d;
}

.content-2{
  padding-left: 10px;
}



@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    width: 30%;
    margin-left: unset;
    padding-left: unset;
  }
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
  }
  .logo {
    min-width: 40%;
    margin-left: 5px;
    margin-top: 8px;
    padding-left: unset;
  }

  .dropdown-nav{
    padding-right: unset;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

  .copyright {
    font-size: 10px;
    margin-top: 6px;
  }

}

</style>