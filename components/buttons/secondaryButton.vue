<template>
    <nuxt-link :to="secondaryPath">
        <div  class="secondary-button">
            <p>
                {{secondaryButtonTitle}}
            </p>
        </div>
    </nuxt-link>
</template>


<script>
export default {
    name: 'secondaryButton',
    props: ['secondaryPath', 'secondaryButtonTitle']
}
</script>


<style lang="scss" scoped>
    
</style>