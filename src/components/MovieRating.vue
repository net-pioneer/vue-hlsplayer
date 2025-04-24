<template>
  <div>
    <div class="rating" :class="{progressing:loading}">
      <div class="rate-ico" v-for="(statusClass, index) in maxStars" :key="index"
           :class="index < hoverIndex ? 'active' : 'disable'"
           @mouseover="onMouseOver(index)"
           @mouseleave="onMouseLeave"
           @click="onRateSelect(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps, onMounted, ref} from "vue";
import {Matcher} from "vite";
import SrvRequest from "@/composables/SrvRequest";
import {Rating} from "@/types/api";
import {storeToRefs} from "pinia";
import {useRateStore} from "@/stores/useRateStore";

const http = SrvRequest();
const props = defineProps({
  initRate:{
    type:Number,
    default:0,
  },
  maxStars:{
    type:Number,
    default:5
  },
  sid:{
    type:Number,
    default:0
  }
});
const userRate = Math.floor(props.initRate);
const hoverIndex = ref(userRate);
const loading = ref(false);
const {ratedSeasons} = storeToRefs(useRateStore());
const onMouseOver = (index)=>{
  if(!loading.value){
    hoverIndex.value = index + 1
  }
}
const onMouseLeave = ()=>{
  if(!loading.value){
    hoverIndex.value = Math.floor(userRate)
  }
}
const onRateSelect = async (rateNum:number)=> {
  if(!ratedSeasons.value.includes(props.sid)) {
    const res = await http.signedPost<Rating>(`/?action=rate&id=${props.sid}`, loading, {rate: rateNum});
    if (!res.status && !res.data.success) {
      alert("failed!");
    } else {
      ratedSeasons.value.push(props.sid);
    }
  }
}
</script>

<style scoped lang="scss">
.rating{
  direction: ltr;
  display: flex;
  justify-content: center;
  gap: 2px;
  &.progressing{
   opacity: 0.3;
   .rate-ico{
     cursor: progress !important;
     pointer-events: none;
   }
  }
  .rate-ico{
    width: 32px;
    height: 32px;
    cursor: pointer;
    &.disable{
      background: url("/images/star_gray.svg") no-repeat center center;
    }
    &.active,&:hover:not(.progressing){
      background: url("/images/star_yellow.svg") no-repeat center center;
    }
  }
}
</style>