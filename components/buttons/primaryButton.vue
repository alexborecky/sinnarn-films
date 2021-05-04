<template>
    <nuxt-link :to="url">
        <div  class="primary-button">
            <p>
                {{title}}
            </p>
            <div class="underline"></div>
        </div>
    </nuxt-link>
</template>


<script>
export default {
    name: 'PrimaryButton',
    props: ['url', 'title']
}
</script>


<style lang="scss" scoped>

.primary-button {
    background: none;
}

    .primary-button {
        text-decoration: none;
        .underline {
            width: 100%;
            height: 2px;
            background-color: white;
            transition: .4s ease;
            position: relative;
        }
        p {
          margin-bottom: 4px;
          letter-spacing: 2px;
        }
        &:hover {
            .underline {
                width: 40%;
            }
        }
    }
    
</style>