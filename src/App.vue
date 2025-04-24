<template>
  <div>
    <pouyava-header/>
    <suspense>
      <template #fallback>
        <h1 class="text-white">Loading....</h1>
      </template>
      <RouterView :key="$route.params.episode"/>
    </suspense>
  </div>

</template>

<style scoped>

</style>
<script>
import PouyavaHeader from "@/components/PouyavaHeader.vue";
export default {
  components: {PouyavaHeader}
}
</script>