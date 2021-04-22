<template>
  <div class="users">
    <div class="users__body">
      <Top class="users__top"/>

      <Mid v-bind:users="users" class="users__mid"/>

      <Footer class="users__footer footer"/>

    </div>
  </div>

</template>

<script>
import Top from './Users_blocks/Top.vue'
import Mid from './Users_blocks/Mid.vue'
import Footer from './Users_blocks/Footer.vue'
export default {
  name: 'Users',
  components: {
    Top,
    Mid,
    Footer
  },
  data() {
    return {
      users:[]
    }
  },
  mounted(){
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => data.forEach(element => {
          this.users.push(element);
        })
        )
    console.log(this.users);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../assets/mixins.scss";
@import "../assets/var.scss";

.users {

  &__body {

    background: $white;
    @include flex-col;
  }

	&__top {
    margin: 15px;
    @include flex-row-center;
	}

  &__mid {
		border-radius: 3px;
		box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
    margin: 10px 15px;
    @include flex-row-center;
    width: 990px;

	}

  &__footer {
    width: 990px;
    margin: 100px 0 0 15px;
    border-top: 1px solid #DFE3E8;
  }

}



</style>
