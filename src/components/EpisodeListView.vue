<template>
  <div class="movie-list">
    <router-link :to="{name:'video-view',params:{sid:sid,episode:episode.number}}" :class="{active:selectedEpisode === episode.number}" v-for="episode in episodes" key="1">
      <div class="image">
        <img :src="episode.poster"/>
      </div>
      <div>
        <div class="title">
          {{episode.title}}
        </div>
        <div class="info">
          <span>{{ $t('listview.sid',[seriesNumber]) }}</span>
          <span>{{ $t('listview.eid',[episode.number]) }}</span>
        </div>
        <div class="tags">
          <div class="tag hot">
            <div>
              <i class="bi bi-fire"></i>
            </div>
          </div>
          <div class="tag subtitle">
            <div>
              <i class="bi bi-badge-cc"></i>
            </div>
            <span>{{$t('listview.sub')}}</span>
          </div>
          <div class="tag doubbled">
            <div>
              <i class="bi bi-mic"></i>
            </div>
            <span>{{$t('listview.dub')}}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {defineProps, PropType} from "vue";
import {Episode} from "@/types/api";

const props = defineProps({
  episodes:{
    type:Object as PropType<Episode[]>
  },
  selectedEpisode:{
    type:Number,
    default:0
  },
  seriesNumber:{
    type:Number,
    default:0
  },
  sid:{
    type:Number
  }
});
</script>


<style scoped lang="scss">
@use "@/assets/styles/components/SessionListView.scss";
</style>