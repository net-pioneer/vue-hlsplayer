import {defineStore} from "pinia";
import {ref, shallowRef} from "vue";

export const useRateStore = defineStore('RateStore', () => {
    const ratedSeasons = ref([]);
    return {ratedSeasons}
},{
    persist: true,
});