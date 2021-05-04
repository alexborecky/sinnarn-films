<template>
    <div class="burger-nav">
      <div class="close" @click="isActive = !isActive" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          <p>MENU</p> 
      </div>
      <transition name="fade">
        <div class="container" :class="{ passive: isActive }">
              <div class="mobile-links">
                  <ul>
                      <li @click="isActive = !isActive"><nuxt-link to="/">Projects</nuxt-link></li>
                      <!-- <li @click="isActive = !isActive"><nuxt-link to="/about">About</nuxt-link></li> -->
                      <li @click="isActive = !isActive"><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul>
              </div>
        </div> 
      </transition>
    </div>
</template>

<script>


export default {
    name: 'sideBar',
    data () {
      return {
        isActive: true
      }
    },
    methods: {
    }
}
</script>



<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

.passive {
  opacity: 1;
  z-index: -1000;
  height: 0vh;
  transform: translateX(10%) !important;
}
    .close {
      width: auto;
      height: 100%;
      z-index: 1000;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: absolute;
      right: 10%;
      cursor: pointer;
      svg {
        margin-right: 8px;
      }
      p {
        font-weight: 800;
      }
    }

.burger-nav {
  max-width: 100px;
  height: 100%;
  position: relative;
  .container {
    height: 100vh;
    width: 100vw;
    top: 0;
    background-color: black;
    z-index: 900;
    transition: .4s ease-in-out;
    transform: translateX(-95%);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


.mobile-links {
  display: flex; 
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  ul {
    text-align: right;
    padding-left: 0;
    list-style-type: none;
    a {
      padding-top: 50px;
      display: flex;
      text-align: right;
      justify-content: center;
      text-decoration: none;
      opacity: .2;
      text-transform: uppercase;
      font-size: 40px;
      transition: .4s;
      &:hover {
        opacity: .8;
      }
      h2 {
        color: white;
      }
    }
  }
}

.nuxt-link-exact-active {
  opacity: 1 !important;
}

</style>
