<template>
    <div class="hero contact flex-center">
        <!-- <iframe src="https://player.vimeo.com/video/394655829?autoplay=1&loop=1&autopause=0&controls=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> -->
        <!-- <video width="320" height="180" autoplay loop>
            <source src="@/assets/video.mp4" type="video/mp4">
        </video> -->
        <div class="container flex-center"> 
            <div class="message flex-center">
                <h2>Your next story is just a click away! </h2>
                <a href="mailto:info@sinnarnfilms.com">
                    <externalButton
                        :externalButtonTitle="emailUs"
                    />
                </a>
            </div>
            <div class="social-media">
                <li><a href="https://instagram.com/sinnarnfilms/" target="_blank">Instagram</a></li>
                <li><a href="https://www.imdb.com/title/tt10544116/?ref_=nm_knf_i1" target="_blank">IMDB</a></li>
            </div>
            <div class="location">
                <caption>
                    Prague, Czech Republic
                </caption>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data () {
        return {
            emailUs: 'Get in touch!',
            path: 'none'
        }
    }
}
</script>


<style lang="scss" scoped>

video {
    height: 140vh;
    width: auto;
    position: fixed;
    opacity: .2;
}

.container {
    height: 100vh;
    z-index: 100;
    // align-items: flex-start;
    .message {
        // width: 50vw;
        text-align: center;
        display: flex;
        // align-items: flex-start;
        h2 {
            margin: 40px 0;
        }
    }
    .social-media {
        margin-top: 64px;
        display: flex;
        li {
            display: flex;
            justify-content: center;
            margin: 0 24px;
            a {
                font-size: 12px;
                opacity: .6;
                transition: .3s;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .location {
        margin-top: 40px;
        opacity: .2;
        position: absolute; 
        bottom: 64px;
        caption {
            width: 240px;
        }
    }
}
    
</style>