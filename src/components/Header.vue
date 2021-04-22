<template>
  <header class="header">
    <div class="header__body">

      <div class="header__logobar">
        <router-link to="/" class="header__logobar-a">
          <img src="../assets/img\header\logo.png" height="36px" alt="" class="header__logo">
          <p class="header__logotext">Devian Kit</p>
        </router-link >
      </div>

      <div class="header__ads">
        <a href="#" class="header__ads-a">
          <p class="header__ads-button">Free</p>
          <p class="header__ads-text">See our PRO version for more design components & coded in React follow this link: https://devias.io/products/devias-kit-pro</p>
        </a>
      </div>

      <div class="header__others">
        <a href="#">
            <img src="../assets/img/header/notification.png" height="20px" alt="" class="header__notification">
        </a>
        <a href="#">
            <img src="../assets/img\header\exit.png" height="20px" alt="" class="header__exit">
        </a>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../assets/mixins.scss";
@import "../assets/var.scss";

.header {

	&__body {
    background: $headerBlue;
    height: 64px;
    @include flex-row-center;
	}

	&__logobar {
    margin-left: 24px;
    margin-right: 35px;
    width: 138px;
	}

	&__logobar-a {
		text-decoration: none;
		@include flex-row-center;
	}

	&__logo {

	}

	&__logotext {
    margin-left: 10px;
    color: $white;
    font-size: 20px;

	}

	&__ads {
    height: 26px;
		max-width: 70%;
    border-radius: 5px;
    background-color: darken($headerBlue, 10%);
	}

	&__ads-a {
		text-decoration: none;
		@include flex-row-center;
	}

	&__ads-button {
		margin: 4px;
		font-size: 9px;
    background: #26A69A;
    color: $white;
    text-transform: uppercase;
    padding: 4px 6px;
    border-radius: 5px;
	}

	&__ads-text {
    font-size: 10px;
    color: #CDD1EA;
    padding: 0 10px 0 4px;
	}

	&__others {
		margin-left: 350px;
    margin-right: 30px;
    display: flex;
    align-items: flex-end;

	}

	&__notification {
    margin: 10px;
	}

	&__exit {
    margin: 10px;
	}

}


</style>
