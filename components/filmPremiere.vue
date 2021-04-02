<template>
    <div class="hero" :style="{backgroundImage: 'url(' + filmThumbnail + ')'}">
        <div class="container flex-center">
            <div class="content flex">
                <div class="names flex">
                    <p class="orange">Jiří Skřivánek</p>
                    <p class="orange">Alexandr Borecký</p>
                    <p class="orange">Lukáš Labuda</p>
                </div>
                <div class="awards">
                    <img 
                        v-for="awards in awards" :key="awards.src"
                        :src="awards.src" alt="">
                </div>
                <div class="titles flex">
                    <h1 class="orange">{{filmName}}</h1>
                    <p class="orange">{{filmDescription}}</p>
                    <h4 class="orange">28.01.21</h4>
                <div class="links flex-center">
                    <externalButton
                        :url="url"
                        :externalButtonTitle="externalButtonTitle"
                    />
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import awards from '@/assets/data/awards.js'
export default {
    name: 'filmPremiere',
    props: ['filmThumbnail', 'filmBackground', 'filmName', 'filmDescription', 'textPath', 'textButtonTitle', 'url', 'externalButtonTitle'],
    data () {
        return {
            button: 'External URL',
            awards: awards
        }
    }
}
</script>


<style lang="scss" scoped>

.hero {
    background-size: cover;
    background-position: center;
    text-align: center; 
    @media (max-width: 800px) {
        background-position: 20% center;
    }
}

.hero {
    align-items: center;
    .container {
        width: 80%;
        height: 100vh;
        z-index: 100;
        @media only screen and (max-width: 760px) {
            width: 90%;
        }
        .awards {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: 80px;
            @media only screen and (max-width: 760px) {
                justify-content: center;
            }
            img {
                max-width: calc(20% - 16px);
                margin: 16px 16px 0 0;
                @media only screen and (max-width: 760px) {
                    max-width: calc(25% - 8px);
                    margin: 8px 8px 0 0;
                }
            }
        }
        .content {
            align-self: flex-end;
            justify-content: space-between;
            height: 80%;
            width: 50%;
            flex-flow: column;
            @media only screen and (max-width: 1440px) {
                width: 70%;
            }
            @media only screen and (max-width: 1000px) {
                align-self: center;
                width: 100%;
            }
            .titles {
                flex-flow: column;
                justify-content: flex-start;
                align-items: flex-start;
                @media only screen and (max-width: 760px) {
                    align-items: center;
                }
            }
            .names {
                width: 100%;
                justify-content: space-between;
                p {
                    font-size: 12px;
                    margin: 0 8px;
                }
            }
            p {
                text-transform: uppercase;
                letter-spacing: 4px;
                font-weight: 800;
                margin: -24px 0 40px 0;
                @media only screen and (max-width: 960px) {
                    margin: 0px 0 0px 0;
                }
            }
            .orange {
                color: #f27456;
            }
            h4 {
                    margin: 24px 0;
                    font-family: "Poppins";
                    letter-spacing: 8px;
                    @media only screen and (max-width: 760px) {
                        font-size: 24px;
                        letter-spacing: 4px;
                        margin: 16px 0 0 0;
                    }
                }
            h1 {
                letter-spacing: 40px;
                font-family: "Poppins";
                text-align: left;
                font-weight: 700;
                @media only screen and (max-width: 760px) {
                    letter-spacing: 24px;
                    text-align: center !important;
                    margin-left: 24px;
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
    }
    p {
        color: #FF5C00 !important;
        letter-spacing: 8px !important;
        font-weight: 400 !important;
    }
}

.no-button {
    .external-button {
        display: none;
    }
}
    
</style>