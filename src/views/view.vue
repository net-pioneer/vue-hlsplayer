<template>
  <div class="container-sm mt-3 movie-show">
    <div class="d-flex">
      <a class="btn btn-dark btn-back me-auto">
        <span>
          بازگشت<i class="bi bi-chevron-left" style="font-size: 10px;margin-inline-start: 10px;"></i>
        </span>
      </a>
    </div>
    <div>
      <div class="row mt-2">
        <div class="col-12 col-lg-8 head-section1 d-flex">
          <div class="movie-info">
            <div class="badge">
              <div class="badge-quality">1080</div>
              <div class="badge-source">WebDL</div>
            </div>
            <div>
              <div class="movie-name">
                {{ resApi.title_fa }}
              </div>
              <div class="movie-director">
                {{ resApi.title_en }}
              </div>
            </div>
          </div>
          <div class="head-controls me-auto">
            <div class="btn sec-block">
              <i class="bi bi-play-circle"></i>
              <span>
              {{ $t('head_section.current_play',[selectedSeasonId,selectedEpisodeId]) }}
            </span>
            </div>
            <div class="dropdown  ">
              <a class="btn custom-dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>{{$t('quality')}}</div>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#">WebDL - 1080P</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex align-items-center head-section2">
          <div style="width: 175px">
            <MovieRating :init-rate="resApi.user_rating" :sid="resApi.id"/>
          </div>
          <div class="imdb me-auto">
            <span>10</span>
            <span>/</span>
            <span>{{ resApi.imdb }}</span>
            <img src="/images/imdb.png"/>
          </div>
          <div class="b-icons d-flex me-auto">
            <a href="#">
              <i class="bi bi-bell"></i>
            </a>
            <a href="#">
              <i class="bi bi-bell"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-4 row col-12 video-content">
        <div class="col-12 col-lg-8 m-auto">
          <video-player :poster="resApi.poster" :sid="resApi.id" />
        </div>
        <div class="col-12 col-lg-4">
          <episode-list-view :series-number="selectedSeasonId" :sid="resApi.id" :episodes="resApi.episodes" :selected-episode="selectedEpisodeId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieRating from "@/components/MovieRating.vue";
import VideoPlayer from "@/components/videoPlayer.vue";
import SrvRequest from "@/composables/SrvRequest";
import {Series} from "@/types/api";
import EpisodeListView from "@/components/EpisodeListView.vue";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";
//--------------
const router = useRouter();
const route = useRoute();
const http = SrvRequest();
const selectedEpisodeId = ref(parseInt(route.params?.episode) || 1);
const selectedSeasonId = ref(1);
const resApi = await http.signedGet<Series>('/?action=info&id=2501');

// if(!resApi.status){
//   alert("failed");
// }
</script>

<style scoped lang="scss">
@import "@/assets/styles/index.scss";
</style>