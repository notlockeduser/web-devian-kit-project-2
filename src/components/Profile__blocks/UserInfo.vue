<template>
  <div class="user-info">
    <div class="user-info__container">
      <div class="user-info__container-row">
        <div class="user-info__container-text">
          <p class="user-info__name">Bogdan Golovin</p>
          <p class="user-info__city">Rm. Valcea, Romania</p>
          <p class="user-info__time">4:32PM (GMT-4)</p>
        </div>
        <img src="../../assets/img\profile\avatar.jpg" height="100px" alt="" class="user-info__avatar">
      </div>

      <form action="" class="user-info__form">
        <button type="button" name="" class="user-info__button">Upload</button>
        <button type="button" name="" class="user-info__button">Remove</button>
      </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";

.user-info {

  @include flex-col;

  &__container {
    @include flex-col;
    margin: 20px 20px 15px 20px;
  }

  &__container-row {
    @include flex-row;
  }

	&__name {
    font-size: 20px;
    color: #212529;
	}

	&__city {
    margin-top: 15px;
    font-size: 12px;
    color: rgba($color-lightGrey, .39);
	}

	&__time {
    font-size: 12px;
    color: $color-lightGrey;
	}

	&__avatar {
    margin-left: 25px;
    border-radius: 10px;
	}

	&__form {
    padding:  0 40px;
    margin-top: 20px;
    border-top: 1px solid #E4E7EB;
    display: flex;
    justify-content: space-between;

	}

  &__button {
    margin-top: 10px;
    background-color: #fff;
     color: #1665D8;
     font-size: 14px;
     border: none;
     text-align: center;
  }

  &__button:after {
    background-color: #1665D8;
    display: block;
    content: "";
    height: 3px;
    width: 0%;
    transition: width .3s ease-in-out;
  }

  &__button:hover:after, &__button:focus:after {
    width: 100%
  }
}

</style>
