<template>
  <div class="edit-notif">
    <div class="edit-notif__container-text">
      <p class="edit-notif__text-1">Notifications</p>
      <p class="edit-notif__text-2">Mange the notifications emailing</p>
    </div>

      <div class="edit-notif__form-container">

        <form class="edit-notif__form">
          <p class="edit-notif__text-in-form">Notifications</p>
          <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Email</label>
          </div>
          <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Push notifications</label>
            </div>
            <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Text Messages</label>
            </div>
            <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Phone Calls</label>
            </div>
        </form>

        <form class="edit-notif__form">
          <p class="edit-notif__text-in-form">Messages</p>
          <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Email</label>
          </div>
          <div class="edit-notif__one-line-check">
            <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Push notifications</label>
          </div>
          <div class="edit-notif__one-line-check">
          <input type="checkbox" name="" class="edit-notif__input">
                <label class="edit-notif__text-check">Text Messages</label>
          </div>
        </form>
      </div>
      <button type="button" name="" class="edit-notif__button">Save</button>


  </div>
</template>

<script>
export default {
  name: 'EditNotif',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";

.edit-notif {

	&__container-text {
		padding: 15px;
		@include flex-row;
		align-items:baseline;
		border-bottom: 1px solid $colorLine;

	}

	&__text-1 {
		font-size: 14px;
		color: $colorBlack;
	}

	&__text-2 {
		margin-left: 10px;
		font-size: 10px;
		color: $color-darkGrey;
	}

	&__form-container{
		@include flex-row;
		border-bottom: 1px solid $colorLine;
	}

	&__form {
		display: flex;
		flex-direction: column;
    margin:17px;
    margin-right: 60px;
	}

  &__text-in-form{
  }

  &__one-line-check{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    color: #425A70;
  }

	&__input {
    margin:5px;
	}

	&__button {
		width: 73px;
		margin: 15px 20px;
		padding: 2px 20px;
		display: flex;
		align-items: flex-start;

		background-color: $white;
		color: #1665D8;
		font-size: 14px;
		border: 1px solid $colorLine;
    border-radius: 3px;
		text-align: center;
	}
}


</style>
