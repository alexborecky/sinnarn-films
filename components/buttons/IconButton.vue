<template>
    <a class="flex-center icon-button" :href="url" target="_blank">
        <div class="flex center">
            Watch on
            <img :src="icon" alt="">
        </div>
        <div class="underline"></div>
    </a>
</template>

<script>
    export default {
        name: 'IconButton',
        props: [
            'url',
            'icon'
        ]
    }
</script>

<style lang="scss" scoped>

a {
    font-size: 16px;
    margin: 0 16px;
    position: relative;
    text-align: center;
    @media (max-width: 900px) {
        margin: 16px 0;
    }
    img {
        max-height: 20px;
        margin-left: 8px;
    }
    .underline {
        bottom: -8px;
        width: 0%;
        height: 2px;
        background-color: white;
        transition: .4s ease;
        position: absolute;
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