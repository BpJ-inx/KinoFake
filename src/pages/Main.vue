<template >
  <div class="header">Премьеры в этом месяце :</div>
  <div class="resSearchFiveFilms flex flex-wrap gap-3 items-center align-top">

    <FilmsFormWithoutRating 
    :responseFilms="responseFilms">
    </FilmsFormWithoutRating>

  </div>

  <div ref="observer" class="observer"></div>
</template>

<script>
import { fetchMainTop } from '../hooks/fetch.js'
import FilmsFormWithoutRating from "../components/FilmsFormWithoutRating.vue";
import axios from "axios";

export default {
  components: {
    FilmsFormWithoutRating,
  },
  data() {
    return {};
  },
  methods: {
    async loadMoreFilms() {
      try {
        let responseFromServer = await axios.get(this.fetchRequest, {
          headers: {
            accept: "application/json",
            "X-API-KEY": this.X_API_KEY,
          },
        });

        this.responseFilms = [
          ...this.responseFilms,
          ...responseFromServer.data.items.slice(
            this.startSlice,
            this.endSlice
          ),
        ];
        this.startSlice += 5;
        this.endSlice += 5;
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
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.loadMoreFilms();
      }
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  setup(props) {
    const { responseFilms, startSlice, endSlice, fetchRequest, X_API_KEY } =
      fetchMainTop();

    return {
      responseFilms,
      startSlice,
      endSlice,
      fetchRequest,
      X_API_KEY,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/MainStyle.scss'
</style>