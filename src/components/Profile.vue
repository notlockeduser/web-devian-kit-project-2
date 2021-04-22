<template>
  <main class="profile">
      <div class="profile__body">

        <Choice class="profile__choice"/>
        <div class="profile__flex-container-row">
          <UserInfo class="profile__user-info"/>
            <div class="profile__flex-container-column">
              <EditInfo class="profile__edit-info"/>
              <EditNotif class="profile__edit-notif"/>
            </div>
          </div>
        </div>
    </main>

</template>

<script>
import Choice from './Profile__blocks/Choice.vue'
import UserInfo from './Profile__blocks/UserInfo.vue'
import EditInfo from './Profile__blocks/EditInfo.vue'
import EditNotif from './Profile__blocks/EditNotif.vue'


export default {
  name: 'Profile',
  components: {
    Choice,
    UserInfo,
    EditInfo,
    EditNotif

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/mixins.scss";
@import "../assets/var.scss";

.profile {

    &__body {
      margin-left: 221px;
      background: $backgr-grey;
    }

    &__choice {
      @include flex-row;
      padding-left: 20px;
      border: 1px solid $colorLine;
    }


    &__flex-container-row {
      @include flex-row;
    }

    &__user-info {
      margin: 30px;
      max-height: 185px;
      background: white;
      border-radius: 2%;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }

    &__flex-container-column {
      @include flex-col;
    }

    &__edit-info {
      margin: 30px 30px 10px 0;
      background: $white;
      width: 600px;
      border-radius:  0 0 2% 2%;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
      @include flex-col;
    }

    &__edit-notif {
      margin: 15px 0px 30px 0;
      background: $white;
      width: 600px;
      border-radius: 2%;
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }

}

</style>
