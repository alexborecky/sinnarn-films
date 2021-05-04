<template>
    <div class="hero">
        <div class="contain flex-center" :style="{backgroundImage: 'url(' + filmThumbnail + ')'}">
            <div class="content flex-center">
                <h1>{{filmName}}</h1>
                <p>{{filmDescription}}</p>
            </div>
            <!-- <div class="links flex-center">
                <textButton id="temporary"
                    :textPath="textPath"
                    :textButtonTitle="textButtonTitle"
                />
                <externalButton
                    :url="url"
                    :externalButtonTitle="externalButtonTitle"
                />
            </div> -->
        </div>
    </div>
</template>


<script>
export default {
    name: 'filmPreview',
    props: ['filmThumbnail', 'filmBackground', 'filmName', 'filmDescription', 'textPath', 'textButtonTitle', 'url', 'externalButtonTitle'],
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
        filter: blur(24px);
        background-size: cover;
        background-position: center;
        .cover {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: rgba(black, .9);
        }
    }
    .contain {
        height: 100vh;
        z-index: 100;
        background-size: cover;
        background-position: center;
        text-align: center;
        .content {
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

            #temporary {
                opacity: .2 !important; 
                cursor: progress;
            }
        }
    }
}

.tdom {
    background: radial-gradient(
      90% 64% at bottom,
      #12374A, #000
    );
    h1 {
        font-weight: 400 ;
        letter-spacing: 20px !important;
        font-size: 32px;
        margin: 40px 0;
        @media only screen and (max-width: 600px) {
            font-size: 20px;
            letter-spacing: 8px !important;
            line-height: 32px;
        }
    }
    p {
        color: #FF5C00 !important;
        letter-spacing: 8px !important;
        font-weight: 400 !important;
        @media only screen and (max-width: 600px) {
            letter-spacing: 2px !important;
            font-size: 10px;
        }
    }
}

.no-button {
    .external-button {
        display: none;
    }
}
    
</style>