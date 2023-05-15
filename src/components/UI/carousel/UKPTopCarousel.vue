<template>
    <div class="mb-12 list-banner-container md:mb-0 md:overflow-hidden   carousel" aria-roledescription="carousel">
        <div class="relative"
            style="padding-bottom:32.8%;box-shadow:0px 20px 50px -10px black;-webkit-tap-highlight-color:transparent">
            <ul class="absolute flex mx-auto wh-full bg-smoky">


                <button class="banner-title relative flex-1 box-content h-full facial  "  style="margin-left:;z-index:10"
                    aria-label="1 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number facialNumber" style="text-shadow:0px 0px 2px black">1</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-2-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>

                    <div class="relative wh-full">
                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="435" style="padding-left:100%">

                            <picture>
                                <img src="/img/kpTop/1GreenMile.jpg"
                                    class="absolute top-0 left-0 object-cover  wh-full banner-image imgFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>

                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-1 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    The Green Mile</div>

                            </div>
                        </div>
                    </div>

                </button>







                <button class="banner-title relative flex-1 box-content h-full unFacial  "  style="margin-left: ; z-index:9"
                    aria-label="2 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number  unFacialNumber" style="text-shadow:0px 0px 2px black">2</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-2-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>

                    <div class="relative wh-full">
                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="329" style="padding-left:100%">

                            <picture>

                                <img src="/img/kpTop/2SpisokShindlera.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600">
                                    Schindler’s List</div>
                            </div>
                        </div>
                    </div>

                </button>


                <button class="banner-title relative flex-1 box-content h-full unFacial  "  style="margin-left:;z-index:8"
                    aria-label="3 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">3</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 sm:hidden " style="text-shadow:0px 0px 2px black"><a
                            download="top10-films-english-3-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">







                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="326" style="padding-left:100%">
                            <picture>
                                <img src="/img/kpTop/3Pobeg.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    The Shawshank Redemption</div>
                            </div>
                        </div>
                    </div>
                </button>


               
                <button class="banner-title relative flex-1 box-content h-full unFacial  "  style="margin-left:;z-index:7"
                    aria-label="4 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">4</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-4-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="448" style="padding-left:100%">
                            <picture>
                                <img src="/img/kpTop/4LesBegi.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    Forrest Gump</div>
                            </div>
                        </div>
                    </div>
                </button><button class="banner-title relative flex-1 box-content h-full unFacial   " 
                    style="margin-left:;z-index:6" aria-label="5 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">5</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-5-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="679486" style="padding-left:100%">
                            <picture>
                                <img src="/img/kpTop/5Coco.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    Coco</div>
                            </div>
                        </div>
                    </div>
                </button><button class="banner-title relative flex-1 box-content h-full unFacial   " 
                    style="margin-left:;z-index:5" aria-label="6 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">6</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-6-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="3498" style="padding-left:100%">
                            <picture>
                                <img src="/img/kpTop/6Vlastelin.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    The Lord of the Rings: The Return of the King</div>
                            </div>
                        </div>
                    </div>
                </button><button class="banner-title relative flex-1 box-content h-full unFacial  " 
                    style="margin-left:;z-index:4" aria-label="7 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">7</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-7-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="258687"   style="padding-left:100%">
                            <picture>

                                <img src="/img/kpTop/7Internbl.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    Interstellar</div>
                            </div>
                        </div>
                    </div>
                </button><button class="banner-title relative flex-1 box-content h-full unFacial  " 
                    style="margin-left:;z-index:3" aria-label="8 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">8</div>
                    <div class="absolute p-4 bottom-0 right-0 z-30 hidden sm:hidden"  style="text-shadow:0px 0px 2px black">
                        <a download="top10-films-english-8-mar-20-mar-26-2023" id="banner-img-download">

                        </a></div>
                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="342" style="padding-left:100%">
                            <picture>

                                <img src="/img/kpTop/8Kriminal.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    Pulp Fiction</div>

                            </div>
                        </div>
                    </div>
                </button><button class="banner-title relative flex-1 box-content h-full unFacial  "  
                    style="margin-left:;z-index:2" aria-label="9 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">9</div>

                    <!-- <div class="relative wh-full"> -->

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="328" style="padding-left:100%">
                            <picture>

                                <img src="/img/kpTop/10VlastelinEsheOdin.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden pointer-events-none  min-w-min opacity-0 nameFilm"
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    The Lord of the Rings: The Fellowship of the Ring</div>


                            </div>
                        </div>
                    <!-- </div> -->
                </button><button class="banner-title relative flex-1 box-content h-full unFacial  " 
                    style="margin-left:;z-index:1" aria-label="10 of 10" @click="switchAndOpenFilm">
                    <div class="list-banner-corner-number unFacialNumber" style="text-shadow:0px 0px 2px black">10</div>

                    <div class="relative wh-full">

                        <div class="absolute top-0 left-0 h-full overflow-hidden group" id="361"  style="padding-left:100%">
                            <picture>

                                <img src="/img/kpTop/9DrakaClyb.jpg"
                                    class="absolute top-0 left-0 object-cover wh-full banner-image imgUnFacial hidden"
                                    @load="showImgWhenLoad" style="margin-left:0px;">
                            </picture>
                            <div class="absolute bottom-0 left-0 w-full pt-4 pb-2 overflow-hidden  pointer-events-none  min-w-min opacity-0 nameFilm  "
                                style="text-shadow:0px 0px 2px black, 0px 0px 10px black;background-image:linear-gradient(to bottom, transparent 0,rgba(0,0,0,0.8) 100%)">
                                <div
                                    class="filmName mx-auto text-xs tracking-wider text-center uppercase opacity-0 group-hover:opacity-100 w-80pct mt-16px font-600 ">
                                    Fight Club   </div>                      
                                    

                                    
                                  

                            </div>
                        </div>
                    </div>
                    
                </button>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
    
    name: 'kptopcarousel',
    methods: {
        ...mapActions({
   
   openFilmOnSelfPage:'fetch/openFilmOnSelfPage',


}),

        async switchAndOpenFilm(e) {
            if (e.target.closest('.banner-title').classList.contains('facial')){
                this.openFilmOnSelfPage(e)
            }
            document.querySelector('.facialNumber').classList.add('unFacialNumber')
            document.querySelector('.facialNumber').classList.remove('facialNumber')
            document.querySelector('.facial').classList.add('unFacial')
            document.querySelector('.facial').querySelector('img').classList.add("imgUnFacial")
            document.querySelector('.facial').querySelector('img').classList.remove("imgFacial")
            document.querySelector('.facial').querySelector('.nameFilm').classList.remove("opacity-1")
            document.querySelector('.facial').querySelector('.nameFilm').classList.add("opacity-0")
            document.querySelector('.facial').classList.remove('facial')
            e.target.closest('.banner-title').classList.add('facial')
            e.target.closest('.banner-title').classList.remove('unFacial')
            e.target.closest('.banner-title').querySelector('.unFacialNumber').classList.add('facialNumber')
            e.target.closest('.banner-title').querySelector('.unFacialNumber').classList.remove('unFacialNumber')
            e.target.closest('.banner-title').querySelector('img').classList.add("imgFacial")
            e.target.closest('.banner-title').querySelector('img').classList.remove("imgUnFacial")
            e.target.closest('.banner-title').querySelector('.nameFilm').classList.remove("opacity-0")
            e.target.closest('.banner-title').querySelector('.nameFilm').classList.add("opacity-1")

        },
        showImgWhenLoad() {
            event.target.classList.remove('hidden')

        },

    }
}




</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/UKPTopCarouselStyle.scss';

</style>