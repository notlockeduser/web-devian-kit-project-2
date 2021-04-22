<template>
  <div class="card">
    <div class="card__line-container">
      <div class="card__box-name-user">
        <input type="checkbox" class="card__checkbox">
        <div class="card__round">JC</div>
        <p class="card__text">{{user.login}}</p>
      </div>
      <p class="card__text">{{user.id}}</p>
      <p class="card__text">+321331231231</p>
      <p class="card__text">{{user.login}}@e.m</p>
      <p class="card__text-data">14/02/2011</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['user'],
  components: {

  },
  name: 'Card',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";
.card {

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
    margin: 0 0px 0 18px;
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


}


</style>
