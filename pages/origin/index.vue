<template>
    <div class="hero origin flex middle">
        <div class="contain flex center">
            <h1>Origin</h1>
            <p>A Short film by Alexandr Borecky</p>
            <div class="buttons flex center">
                <IconButton 
                    v-for="button in buttons" :key="button.url"
                    :url="button.url"
                    :icon="button.icon"
                />
            </div>
            <a class="medium" target="_blank" href="https://boreckyalex.medium.com/writing-directing-producing-and-staring-in-your-first-film-might-be-a-bit-too-much-472031be106a">
                    <img src="https://ik.imagekit.io/alexborecky/Films/Vector_dK0CmsUTEyR.svg" alt="">
                </a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                buttons: [
                    {
                        url: 'https://youtu.be/xLExJm6A13A',
                        icon: 'https://ik.imagekit.io/alexborecky/Films/youtube_ggtFekKDE.png'
                    },
                    {
                        url: 'https://vimeo.com/505660704',
                        icon: 'https://ik.imagekit.io/alexborecky/Films/vimeo4x_XkFD2EofPyu.png'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.origin {
    background-color: #111447;
    .contain {
        flex-flow: column;
        p {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 8px;
            color: #05BEC0;
            opacity: .64;
            text-align: center !important;
            @media (max-width: 900px) {
                letter-spacing: 6px;
            }
            @media (max-width: 550px) {
                letter-spacing: 4px;
                font-size: 12px;
            }
            @media (max-width: 450px) {
                letter-spacing: 2px;
                font-size: 10px;
            }
        }
        h1 {
            font-size: 160px !important;
            line-height: 200px;
            font-family: 'Poppins';
            font-weight: 700;
            letter-spacing: 32px;
            color: #F27456;
            text-align: center !important;
            @media (max-width: 900px) {
                font-size: 106px !important;
                line-height: 160px;
            }
            @media (max-width: 550px) {
                font-size: 72px !important;
                line-height: 48px;
                letter-spacing: 20px;
                margin-left: 16px;
            }
            @media (max-width: 420px) {
                font-size: 56px !important;
                letter-spacing: 20px;
            }
            @media (max-width: 320px) {
                font-size: 48px !important;
            }
        }
        .buttons  {
            margin-top: 40px;
            &:hover > *:not(:hover) {
                opacity: 0.8;
            }
            @media (max-width: 450px) {
                flex-flow: column;
                margin-top: 24px;
            }
        }
        .medium {
            img {
                max-height: 16px;
                margin-top: 40px;
                opacity: .64;
                transition: .3s ease-in-out;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
}



</style>