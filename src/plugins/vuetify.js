import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light:{
        //primary
        primary : '#ff0011',
        secondary: '#e6e7e7',
        third: '#f5eb7d'
            }
    },
}
});