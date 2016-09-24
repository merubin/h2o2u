import Fluxxor from 'fluxxor'
import constants from 'constants'

var Store = Fluxxor.createStore({
    initialize: function() {
        this.isError = false;
        this.bindActions(
            constants.SET_LOCATION_DATA, this.setLocationData,
            constants.SET_ERROR, this.setError,
        );
    },

    setLocationData: function(payload) {
        this.location = payload.payload.location;
        this.zipcode = payload.payload.zipcode;
        this.hasIssue = payload.payload.hasIssue;
        this.emit("change");
    },

    setError(error) {
        console.log(error);
        this.isError = true;
    },

    getState: function() {
        return {
            location: this.location,
            hasIssue: this.hasIssue,
            zipcode: this.zipcode
        };
    },

});

export default Store;
