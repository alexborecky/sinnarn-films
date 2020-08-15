<template>
  <div>
    <navigation/>
    <nuxt />
  </div>
</template>


<style>
html {
  font-family: 'Mulish';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.hero {
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
}

.container {
  width: 90%;
  display: flex;
  justify-content: center;
}

</style>
