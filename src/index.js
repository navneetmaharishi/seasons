import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Error from './Error';

// Functional Component

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
//     return <div>Hi There</div>
// }

// Class Component

class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errorMsg: '' }

    //     window.navigator.geolocation.getCurrentPosition(
    //         position => {
    //             this.setState({ lat: position.coords.latitude });
    //         },
    //         err => {
    //             this.setState({ errorMsg: err.message });
    //         }
    //     );
    // };

    state = {
        lat: null,
        errorMsg: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return <Error msg={this.state.errorMsg} />
        };

        if (!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        };
        return <Loader msg='Please accept location request' />;
    };

    render() {
        return (
            <div className="warper">
                {this.renderContent()}
            </div>
        );

        // if (this.state.errorMsg && !this.state.lat) {
        //     return <div> Error: {this.state.errorMsg}</div >;
        // };

        // if (!this.state.errorMsg && this.state.lat) {
        //     return <SeasonDisplay lat={this.state.lat} />;
        // };

        // return <Loader msg='Please accept location request' />;
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));