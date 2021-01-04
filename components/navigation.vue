<template>
    <div class="navigation">
        <div class="container">
            <div class="logo">
                <nuxt-link to="/">
                    <img src="https://ik.imagekit.io/alexborecky/Films/center_iSzZGB91D1aQ.png" alt="">
                </nuxt-link>
            </div>
            <div>
                <sideBar/>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'navigation'
}
</script>


<style lang="scss" scoped>

.navigation {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: center;
    .container {
        height: 100%;
        justify-content: space-between;
        width: 90%;
        .logo {
            height: 100%;
            display: flex;
            a {
                display: flex;
                align-items: center;
                img {
                    height: 64px;
                    @media only screen and (max-width: 450px) {
                        height: 48px;
                    }
                }
            }
        }
    }
}
    
</style>