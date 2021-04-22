<template>
  <div class="footer">
    <p class="footer__text-1">© Devias Io. 2019</p>
    <p class="footer__text-2">This is a free version of an end product which will be launched soon. If you want to get a free copy of the end product subscribe to our personal email list</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/mixins.scss";
@import "../../assets/var.scss";


.footer {

	&__text-1 {
    color:#616161;
    padding-top: 10px;
    font-size: 13px;
	}

	&__text-2 {
    color:#6B6C6F;
    padding-top: 2px;
    font-size: 11px;
	}

}


</style>
