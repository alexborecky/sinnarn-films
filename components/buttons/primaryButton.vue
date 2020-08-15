<template>
    <nuxt-link :to="primaryPath">
        <div  class="primary-button">
            <p>
                {{primaryButtonTitle}}
            </p>
        </div>
    </nuxt-link>
</template>


<script>
export default {
    name: 'primaryButton',
    props: ['primaryPath', 'primaryButtonTitle']
}
</script>


<style lang="scss" scoped>

.primary-button {
    background: none;
    border: 2px solid white;
}
    
</style>