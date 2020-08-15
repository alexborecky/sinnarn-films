<template>
    <a :href="url" target="_blank">
        <div class="external-button flex-center">
            <p>{{externalButtonTitle}}</p>
            <div class="underline"></div>
        </div>
    </a>
</template>


<script>
export default {
    name: 'externalButton',
    props: ['url', 'externalButtonTitle']
}
</script>


<style lang="scss" scoped>

a {
    text-decoration: none;
    .external-button {
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
}

</style>