<template>
  <div class="edit-info">

    <div class="edit-info__container-text">
      <p class="edit-info__text-1">Basic Profile</p>
      <p class="edit-info__text-2">The information can be edited from yuor profile page</p>
    </div>

    <form action="" class="edit-info__form">
      <div class="edit-info__form-container">
        <div class="edit-info__column">
          <input type="text" name="" placeholder=" First name" class="edit-info__input">
          <input type="text" name="" placeholder=" Email@email.com" class="edit-info__input">
          <input type="text" name="" placeholder=" Country" class="edit-info__input">
        </div>
        <div class="edit-info__column">
          <input type="text" name="" placeholder=" Last name" class="edit-info__input">
          <input type="text" name="" placeholder=" Phone number" class="edit-info__input">
          <input type="text" name="" placeholder=" City" class="edit-info__input">
        </div>
      </div>
      <button type="button" name="" class="edit-info__button">Remove</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditInfo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";



.edit-info {

&__container-text {
	padding: 15px;
	@include flex-row;
	align-items:baseline;
	border-bottom: 1px solid $colorLine;

}

&__text-1 {
	font-size: 14px;
	color: #3A3B3F;
}

&__text-2 {
	margin-left: 10px;
	font-size: 10px;
	color: #66788A;

}

&__form-container{
	display: flex;
	flex-direction:row;
	border-bottom: 1px solid #E4E7EB;
}

&__form {
	display: flex;
	flex-direction: column;
}

&__column {
	display: flex;
	flex-direction: column;
}

&__input {
	color: black;
	margin: 20px;
padding: 0 60px 0 0;
border: 1px solid #cccccc; //цвет рамки
border-radius: 3px; //закругление углов (общее)
background: #ffffff !important; // желательно прописывать, так как в Chrome при сохранных данных оно может быть желтым
outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
height: 24px; // высота на свое усмотрение
width: 120px; // ширина на свое усмотрение
font-size: 13px; // Размер шрифта

}

&__button {
	width: 73px;
	margin: 15px 20px;
	padding: 2px 10px;
	display: flex;
	align-items: flex-start;

	background-color: #1665D8;
 color: #fff;
 font-size: 14px;
 border: none;
 text-align: center;
   box-shadow: 0 0 2px rgba(0,0,0,0.5); /* Параметры тени */

}

}

</style>
