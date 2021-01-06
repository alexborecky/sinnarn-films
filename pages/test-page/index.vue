<template>
    <div>
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
                <filmPreview
                    filmThumbnail="https://ik.imagekit.io/alexborecky/Films/origin-image_y0KYR2FkJibY.jpg"
                    filmName="Origin"
                    filmDescription="filmDescriptionOne"
                    textPath="textPath"
                    textButtonTitle="textButtonTitle"
                    externalButtonTitle="linkTitle"
                    url="https://youtu.be/2SLWaDSLb_4"
                />
            </div>
            <div class="section">
                <filmPreview
                    class="tdom no-button"
                    filmThumbnail=""
                    filmName="The Deportation of Miseries"
                    filmDescription="A film by Alexandr Borecky"
                    textPath="textPath"
                    textButtonTitle="Pre-production"
                    externalButtonTitle="linkTitle"
                />
            </div>
        </full-page>
    </div>
</template>

<script>
    export default {
         data() {
            return {
            options: {
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
            },
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>