<template>
  <video controls ref="videoRef" :poster="poster">
    <track
        kind="subtitles"
        label="English"
        srclang="en"
        :src="trackSrc"
        default
    />
  </video>
</template>

<script setup lang="ts">
import Hls from 'hls.js';
import {computed, defineProps, onMounted, ref} from 'vue';
import SrvRequest from "@/composables/SrvRequest";
import {VideoData} from "@/types/api";
const videoRef = ref<HTMLVideoElement | null>(null);
const http = SrvRequest();
const trackSrc = ref(null);
const props = defineProps({
  sid:{
    type:Number
  },
  poster:{
    type:String
  }
});

onMounted(async () => {
  const video = videoRef.value;
  const videoData = await http.signedGet<VideoData>(`/?action=stream&id=${props.sid}`);
  if(videoData.status){
    const videoSrc = videoData.data.video_url;// 'https://zztraffic.upera.tv/3025234-0-hls.m3u8?ref=uVhD';
    trackSrc.value = videoData.data.subtitle.replace("https://s600.upera.tv/s3/files/","/subtitles-proxy/");
    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.SUBTITLE_TRACKS_UPDATED, (event, data) => {
          console.log('Available subtitle tracks:', data.subtitleTracks);
          if (data.subtitleTracks.length > 0) {
            hls.subtitleTrack = 0;
          }
        });
        hls.on(Hls.Events.SUBTITLE_TRACK_SWITCH, (event, data) => {
          console.log('Subtitle track switched to:', data.id);
        });

        hls.subtitleDisplay = true;
        hls.subtitleTrack = 0;
        video.addEventListener("loadeddata", () => {
          console.log("SSSSS");
          const tracks = video.textTracks;
          for (let i = 0; i < tracks.length; i++) {
            tracks[i].mode = 'showing'; // "disabled", "hidden", or "showing"
          }
          console.log("Tracks:", video?.textTracks);
        });
        console.log("play god dmmt")
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
      }
    }
  }
});
</script>

<style scoped lang="scss">
@use "@/assets/styles/components/video.scss";
</style>