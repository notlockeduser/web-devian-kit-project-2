<template>
  <div class="users__top top">
    <a href="#" class="top__button-filter">
      <img src="../../assets/img\users\01.png" alt="">
      <p class="top__button-filter-text">FILTER</p>
    </a>
    <div class="top__search">
      <img src="../../assets/img\users\02.png" alt="" class="top__search-img">
      <input type="text" placeholder="Search users by name, id" class="top__search-input">
    </div>
    <a href="#" class="top__button-add">
      <p class="top__button-add-text">+ ADD USER</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Top',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";


.top {

	&__button-filter {
		@include flex-row-center;
		background-color: $white;
		border-radius: 3px;
		padding: 5px 5px 5px 8px;
		text-decoration: none;
		box-shadow: 0px 1px 1px rgba(0,0,0,0.5);
	}

	&__button-filter-text {
     margin: 0 5px;
		color: $colorBlack;
	}

	&__search {
			margin: 0 25px;
			display: flex;
			align-items: center;
		align-items: center;
	}

	&__search-img {
		margin: 3px 5px 0 5px;
	}

	&__search-input {
		border: 0px solid $white;
		padding: 5px 555px 0 5px;
	}

	&__button-add {
		align-items: center;
		background-color: #1665D8;
		border-radius: 3px;
		padding: 5px 5px 5px 8px;
		text-decoration: none;
		box-shadow: 0px 1px 1px rgba(0,0,0,0.5);

	}

	&__button-add-text {
		margin: 0 5px 0 10px;
		color: $white;
	}
}

</style>
