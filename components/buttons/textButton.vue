<template>
    <nuxt-link :to="textPath">
        <div  class="text-button">
            <h5>
                {{textButtonTitle}}
            </h5>
        </div>
    </nuxt-link>
</template>


<script>
export default {
    name: 'textButton',
    props: ['textPath', 'textButtonTitle']
}
</script>


<style lang="scss" scoped>

a {
    text-decoration: none;
    p {
        font-weight: 800;
    }
}

</style>