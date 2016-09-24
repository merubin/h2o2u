import constants from 'constants'
var actions = {
    setError: function(payload) {
        this.dispatch(constants.SET_ERROR, {payload: payload});
    },

    setLocationData: function(payload) {
        this.dispatch(constants.SET_LOCATION_DATA, {payload: payload});
    },
};

export default actions;