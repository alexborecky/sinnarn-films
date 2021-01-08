<template>
    <div class="hero">
        <div class="container flex-center" :style="{backgroundImage: 'url(' + filmThumbnail + ')'}">
            <div class="content flex">
                <div class="names flex">
                    <p class="yellow">Jiří Skřivánek</p>
                    <p class="yellow">Alexandr Borecký</p>
                    <p class="yellow">Lukáš Labuda</p>
                </div>
                <div class="titles flex-center">
                <h1>{{filmName}}</h1>
                <p class="yellow">{{filmDescription}}</p>
                <h4>14.01.21</h4>
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
export default {
    name: 'filmPremiere',
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
    .container {
        width: 100%;
        height: 100vh;
        z-index: 100;
        background-size: cover;
        background-position: center;
        text-align: center;
        .content {
            justify-content: space-between;
            height: 80%;
            width: 60%;
            flex-flow: column;
            @media only screen and (max-width: 1440px) {
                width: 70%;
            }
            @media only screen and (max-width: 450px) {
                width: 90%;
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
                    margin: 0px 0 40px 0;
                }
            }
            .yellow {
                color: #FFDD00;
            }
            h4 {
                    margin: 24px 0;
                    font-family: "Poppins";
                    letter-spacing: 16px;
                }
            h1 {
                letter-spacing: 40px;
                font-family: "Poppins";
                text-align: center;
                font-weight: 700;
                @media only screen and (max-width: 450px) {
                    letter-spacing: 24px;
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