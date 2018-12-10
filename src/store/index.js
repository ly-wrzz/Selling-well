import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state : {
		cityName : '重庆'
	},
	mutations : {
		CITY_CHANGE(state,payload){
			state.cityName = payload;
		},
	}
});