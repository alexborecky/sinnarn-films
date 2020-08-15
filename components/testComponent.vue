<template>
    <div class="hero">
        <div class="background" :style="{backgroundImage: 'url(' + filmBackground + ')'}">
            <div class="cover">
                <video :src="videoSrc" autoplay loop muted></video>
            </div>
        </div>
        <div class="container flex-center" :style="{backgroundImage: 'url(' + filmBackground + ')'}">
            <div class="content flex-center">
                <h1>{{filmName}}</h1>
                <p>{{filmDescription}}</p>
                <div class="links flex-center">
                <textButton id="temporary"
                    :textPath="textPath"
                    :textButtonTitle="textButtonTitle"
                />
                <externalButton
                    :url="url"
                    :externalButtonTitle="externalButtonTitle"
                />
            </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'testComponent',
    props: ['filmThumbnail', 'filmBackground', 'filmName', 'filmDescription', 'textPath', 'textButtonTitle', 'url', 'externalButtonTitle', 'videoSrc'],
    data () {
        return {
            button: 'External URL'
        }
    }
}
</script>


<style lang="scss" scoped>

.hero {
    align-items: center;
    .background {
        height: 100vh;
        width: 100vw;
        position: absolute;
        filter: blur(8px);
        background-size: cover;
        background-position: center;
        .cover {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: rgba(black, .6);
            video {
                position: absolute;
                z-index: 0;
                width: 100%;
            }
        }
    }
    .container {
        width: 75%;
        height: 70vh;
        z-index: 100;
        background-size: cover;
        background-position: center;
        text-align: center;
        position: relative;
        .content {
            z-index: 100;
            width: 100%;
            height: 100%;
            // background-color: red;
            p {
                text-transform: uppercase;
                letter-spacing: 4px;
                font-weight: 800;
                color: #FFDD00;
                margin: 0px 0 40px 0;
                @media only screen and (max-width: 450px) {
                    margin: 24px 0 40px 0;
                }
            }
        }
        .links {
            z-index: 1000;
            #temporary {
                opacity: .2 !important; 
                cursor: progress;
            }
        }
    }
}
    
</style>