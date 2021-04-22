<template>
<div class="mid">
  <div class="mid__form">
    <div class="mid__first-line">
      <div class="mid__line-container_first">
        <div class="mid__box-name-user">
          <input type="checkbox" class="mid__checkbox">
          <p class="mid__text-selected">Selected x users</p>
        </div>
        <p class="mid__text-user">User ID</p>
        <p class="mid__text-phone">Phone Number</p>
        <p class="mid__text-email">Email Address</p>
        <p class="mid__text">Account Created</p>
      </div>
    </div>


    <Card  v-for="user in users" :key="user.id"   v-bind:user="user" class="mid__line"/>


    <div class="mid__end">
        <p class="mid__end-text" >Rows per page :</p>
        <p><select name="mid__select" class="mid__select">
           <option selected value="s1">10</option>
           <option value="s2">20</option>
           <option value="s3">50</option>
           <option value="s4">100</option>
          </select>
        </p>
        <p class="mid__number-page">1-10 of 100</p>
        <a href="" class="mid__end-left">
          <img src="img\users\03.png" alt="">
        </a>
        <a href="" class="mid__end-right">
          <img src="img\users\04.png" alt="">
        </a>

    </div>


  </div>
</div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: 'Mid',
  props:['users'],
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";



.mid {

	&__form {
    @include flex-col;
	}

	&__first-line {
    border-bottom: 1px solid $colorLine;
    width: 990px;
	}

  &__line {
    border-bottom: 1px solid $colorLine;
  }

  &__line-container{
      margin: 4px 20px;
      @include flex-row-center;
      justify-content:space-between;
  }

  &__line-container_first {
    margin: 10px 20px;
    @include flex-row-center;
    justify-content:space-between;
  }

  &__text-selected{
    margin: 0 10px;
    font-size: 11px;
  }

  &__text-user {
    margin-left: 25px;
      font-size: 11px;
  }

  &__text-phone {
    margin-left: 15px;
      font-size: 11px;
  }

  &__text-email {
    margin-left: 25px;
      font-size: 11px;
  }

  &__text-data {
    color: $color-lightGrey;
    font-size: 11px;
  }


	&__checkbox {

	}

  &__box-name-user{
    @include flex-row-center;
  }

  &__round {
    width: 28px;
    height: 28px;
    line-height: 28px;
    border-radius: 50%;
    font-size: 13px;
    color: $white;
    text-align: center;
    background-color: #1070CA;
    margin: 0 10px;
  }

	&__text {
    color: $colorBlack;
    font-size: 11px;
	}

  &__end {
    display: flex;
    margin: 10px;
    justify-content: flex-end;
    align-items: center;
  }

  &__end-text {
    font-size: 11px;
    color: $colorBlack;
      margin: 0 10px;
  }

  &__select {
    margin: 0 10px;
    font-size: 11px;
    color:$colorBlack;
    border: 0px solid $white;
  }

  &__number-page{
    font-size: 11px;
    color: $colorBlack;
      margin: 0 10px;
  }
  &__end-left {
    margin: 0 15px;
  }

  &__end-right {
    margin: 0 10px;
  }
}


</style>
