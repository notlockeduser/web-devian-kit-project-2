<template>
  <aside class="sidebar">
      <div class="sidebar__body">
        <div class="sidebar__about">
          <router-link to="/">
              <img src="../assets/img\sidebar\avatar.jpg" height="100px" alt="" class="sidebar__avatar">
          </router-link>
          <p class="sidebar__name">Bogdan Golovin</p>
          <p class="sidebar__job">Brain Director</p>
        </div>

        <hr class="sidebar__hr">

        <ul class="sidebar__nav-bar">
          <li class="sidebar__item item item_first">
            <a href="#" class="item__row">
              <img src="../assets/img\sidebar\li1.png" alt="" class="item__image">
              <p class="item__text">Dashboard</p>
            </a>
          </li>
          <li class="sidebar__item item">
              <router-link to="/userspage" class="item__row">
                <img src="../assets/img\sidebar\li2.png" alt="" class="item__image">
                <p class="item__text">Users</p>
              </router-link>
          </li>
          <li class="sidebar__item item">
            <a href="#" class="item__row">
              <img src="../assets/img\sidebar\li3.png" alt="" class="item__image">
              <p class="item__text">Products</p>
            </a>
          </li>
          <li class="sidebar__item item">
              <a href="#" class="item__row">
                <img src="../assets/img\sidebar\li4.png" alt="" class="item__image">
              <p class="item__text">Authentication</p>
            </a>
          </li>
          <li class="sidebar__item item">
            <a href="#" class="item__row">
              <img src="../assets/img\sidebar\li5.png" alt="" class="item__image">
              <p class="item__text">Typography</p>
            </a>
          </li>
          <li class="sidebar__item item">
            <a href="#" class="item__row">
              <img src="../assets/img\sidebar\li6.png" alt=""  class="item__image">
              <p class="item__text">Icons & Images</p>
            </a>
          </li>


        </ul>
        <hr class="sidebar__hr">
        <div class="sidebar__item item item_support">
          <a href="#" class="item__row">
              <img src="../assets/img\sidebar\support.png" alt="" class="item__image">
              <p class="item__text">Support</p>
          </a>
        </div>


        </div>
    </aside>

</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../assets/mixins.scss";
@import "../assets/var.scss";

aside {
  margin: 0;
  padding: 0;
  width: 220px;
  float: left;
}

.sidebar {

  &__body {
    @include flex-col;
  }

   &__hr {
    color:$colorLine;
    margin-left: 15px;
    border: 1px solid $colorLine;
    width: 180px;
  }

  &__about {
    @include flex-col-center;
    padding: 20px;
  }

  &__avatar {
    border-radius: 100px; /* Радиус скругления */
    margin-bottom: 20px;
  }

  &__name {
    color: $colorBlack;
    font-size: 16px;
    margin-bottom: 5px;
  }

  &__job {
    color: $color-lightGrey;
    font-size: 12px;
  }

  &__nav-bar {
      padding: 20px;
  }
}

.item {
  list-style: none;
  margin-top: 25px;

  &__row{
    text-decoration: none;
    @include flex-row-center;
  }

  &__image {
    margin-right: 10px;
  }

  &_first {
    margin: 0;
  }

  &_support {
    margin: 20px;
  }

  .item__text {
    padding: 3px 0 0 0;
      color: $color-darkGrey;
  }
}


</style>
