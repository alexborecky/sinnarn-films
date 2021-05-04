<template>
  <div class="hero">
      <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <filmPremiere
                  class="origin"
                  filmThumbnail="https://ik.imagekit.io/alexborecky/Films/empty_06Vxy1Y6H8Ve.jpg"
                  :filmName="filmNameOne"
                  :filmDescription="filmDescriptionOne"
                  :textPath="textPath"
                  textButtonTitle="Watch film"
                  title="details"
                  url="/origin"
                />
            </div>
            <div class="section">
                <filmPreview
                    class="tdom no-button"
                    filmThumbnail=""
                    filmName="The Deportation of Miseries"
                    filmDescription="A film by Alexandr Borecky"
                    textPath="textPath"
                    textButtonTitle="Pre-production"
                    externalButtonTitle="linkTitle"
                />
            </div>
            <!-- <div class="section">
                <filmPreview
                    class="tdom no-button"
                    filmThumbnail=""
                    filmName="The Deportation of Miseries"
                    filmDescription="A film by Alexandr Borecky"
                    textPath="textPath"
                    textButtonTitle="Pre-production"
                    externalButtonTitle="linkTitle"
                />
            </div>
            <div class="section">
                <filmPreview
                    class="tdom no-button"
                    filmThumbnail=""
                    filmName="The Deportation of Miseries"
                    filmDescription="A film by Alexandr Borecky"
                    textPath="textPath"
                    textButtonTitle="Pre-production"
                    externalButtonTitle="linkTitle"
                />
            </div> -->
        </full-page>
  </div>
</template>

<script>
import Vue from 'vue'
import { 
    Hooper, 
    Slide,
    Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'

export default Vue.extend({
  components: {
        Hooper,
        Slide,
        HooperNavigation,
  },
  data () {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: true,
        transition: 800,
        wheelControl: false,
        autoPlay: false,
      },
      filmNameOne: 'Origin',
      filmDescriptionOne: 'A short film by Alexandr Borecky',
      textPath: '',
      textButtonTitle: '14.01.2021',
      linkTitle: 'Watch Promo',
      source: 'https://sinnarnfilms.com/img/video.mp4'
    }
  }
})
</script>

<style lang="scss" scoped>

.intro {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
