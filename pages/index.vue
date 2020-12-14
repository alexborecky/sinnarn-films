<template>
  <div class="hero">
      <hooper :settings="hooperSettings">
        <slide>
          <filmPreview
            filmThumbnail="https://ik.imagekit.io/alexborecky/Films/origin-image_y0KYR2FkJibY.jpg"
            :filmName="filmNameOne"
            :filmDescription="filmDescriptionOne"
            :textPath="textPath"
            :textButtonTitle="textButtonTitle"
            :externalButtonTitle="linkTitle"
            url="https://youtu.be/2SLWaDSLb_4"
          />
        </slide>
        <slide>
          <filmPreview
            class="tdom no-button"
            filmThumbnail=""
            filmName="The Deportation of Miseries"
            filmDescription="A film by Alexandr Borecky"
            :textPath="textPath"
            textButtonTitle="Pre-production"
            :externalButtonTitle="linkTitle"
          />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <!-- <slide> 
          <filmPreview
            filmThumbnail="https://sinnarnfilms.com/img/origin/origin-image.png"
            filmBackground="https://sinnarnfilms.com/img/origin/origin-background.png"
            :filmName="filmNameOne"
            :filmDescription="filmDescriptionOne"
            :textPath="textPath"
            :textButtonTitle="textButtonTitle"
          />
        </slide>
        <slide> 
          <filmPreview
            filmThumbnail="https://sinnarnfilms.com/img/origin/origin-image.png"
            filmBackground="https://sinnarnfilms.com/img/origin/origin-background.png"
            :filmName="filmNameOne"
            :filmDescription="filmDescriptionOne"
            :textPath="textPath"
            :textButtonTitle="textButtonTitle"
          />
        </slide> -->
      </hooper>
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
      textButtonTitle: 'Coming soon',
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
