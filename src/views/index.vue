<template>
  <div class="mt-5">
    <div class="d-flex justify-content-center align-items-center">
      <router-link :to="{name:'video-view',params:{sid:2501,episode:1}}" class="btn btn-danger">{{$t('index_btn')}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>