<template>
    <nuxt-link :to="textPath" class="text-button">
        {{textButtonTitle}}
    </nuxt-link>
</template>


<script>
export default {
    name: 'textButton',
    props: ['textPath', 'textButtonTitle']
}
</script>


<style lang="scss" scoped>

.text-button {
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 4px;
}

</style>