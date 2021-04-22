<template>
  <nav class="choice">
    <a href="#" class="choice__item">Profile</a>
    <a href="#" class="choice__item">Account</a>
    <a href="#" class="choice__item">Price Plans</a>
  </nav>
</template>

<script>
export default {
  name: 'Choice',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";

.choice {

  &__item {
    margin: 0 15px;

    line-height: 3;
    font-size: 14px;
    text-decoration: none;

    color: $colorBlack;
  }

  &__item:after {
    background-color: #1665D8;
    display: block;
    content: "";
    height: 3px;
    width: 0%;
    transition: width .3s ease-in-out;
  }

  &__item:hover:after, &__item:focus:after {
    width: 100%
  }

}


</style>
