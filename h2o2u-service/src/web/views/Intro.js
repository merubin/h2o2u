import React from 'react'
import Fluxxor from 'Fluxxor'
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

export default React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("Store")],
    componentWillMount() {
        var that = this;
        $.ajax("http://localhost:8080/0.1/water", {
            success: function(data) {
                that.getFlux().actions.setLocationData(data);
            },
            error: function(xhr) {
                console.log('in error');
                that.getFlux().actions.setError(xhr);
            }
        });
    },

    getStateFromFlux: function() {
        var flux = this.getFlux();
        return flux.store("Store").getState();
    },

    render() {
        if (this.state.hasIssue) {
            return <div> Sorry there has been an error </div>;
        }
        return (
            <div id="container">
                <div id="body-yes">
                    <div id="background" alt="drinkwater">
                        <h1 id="signal">{this.state.hasProblem ? 'Yes' : 'No'}</h1>
                        <div id="location">
                            {this.state.location}
                            {this.state.zipcode}
                        </div>
                    </div>
                </div>
                <footer>
                    <button id="button" type="button">Report a Problem</button>
                </footer>
            </div>
        )
    }
});
