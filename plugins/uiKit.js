import Vue from 'vue'

import filmPreview from '@/components/filmPreview.vue'
import navigation from '@/components/navigation.vue'
import sideBar from '@/components/sideBar.vue'
import testComponent from '@/components/testComponent.vue'
import filmPremiere from '@/components/filmPremiere.vue'

import primaryButton from '@/components/buttons/primaryButton.vue'
import secondaryButton from '@/components/buttons/secondaryButton.vue'
import textButton from '@/components/buttons/textButton.vue'
import externalButton from '@/components/buttons/externalButton.vue'


// Third Party 



Vue.component('filmPreview', filmPreview)
Vue.component('navigation', navigation)
Vue.component('sideBar', sideBar)
Vue.component('testComponent', testComponent)
Vue.component('filmPremiere', filmPremiere)

Vue.component('primaryButton', primaryButton)
Vue.component('secondaryButton', secondaryButton)
Vue.component('textButton', textButton)
Vue.component('externalButton', externalButton)
