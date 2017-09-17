import * as types from './mutation-types';

const mutations = {
	[types.SET_MOVIE](state, movie) {
    	state.movie = movie;
  	}
};

export default mutations;