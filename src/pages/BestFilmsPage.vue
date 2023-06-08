<template >
  <h1 class="header">Лучшие за все время :</h1>

  <spinner></spinner>

  <div class="resSearchFiveFilms hidden flex-wrap gap-7 items-center align-top">

    <FilmsFormWithoutRating :responseFilms="responseFilms">
    </FilmsFormWithoutRating>

  </div>

  <div ref="observer" class="observer"></div>
</template>
  
<script>
import { fetchBestFilms } from '../hooks/fetch.js'
import FilmsFormWithoutRating from "../components/FilmsFormWithoutRating.vue";
import axios from "axios";

export default {
  components: {
    FilmsFormWithoutRating,
  },
  methods: {
    async loadMoreFilms() {
      this.pageNumber ++

      try {
        let responseFromServer = await axios.get(this.fetchRequest + this.pageNumber , {
          headers: {
            accept: "application/json",
            "X-API-KEY": this.X_API_KEY,
          },
        });

        this.responseFilms = [
          ...this.responseFilms,
          ...responseFromServer.data.films];
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const funcAtIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        this.loadMoreFilms();
      }
    };
    let observer = new IntersectionObserver(funcAtIntersection, options);
    observer.observe(this.$refs.observer);
  },
  setup() {
    const { responseFilms, fetchRequest, X_API_KEY, pageNumber } =
    fetchBestFilms();

    return {
      responseFilms,
      fetchRequest,
      X_API_KEY,
      pageNumber
    };
  },
};
</script>
  
<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/CategoryStyle.scss';

.header {
  cursor: auto;
}
</style>