import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signedIn } from '../actions/authActions'
import { removeTokens, setAxiosDefaults } from '../utils/SessionHeaderUtils'
import App from '../components/App'

class AppContainer extends Component {

    componentDidMount(){
        this.props.signedIn()

        
    }

    removeTokens = () => {
        removeTokens()
        this.props.signedIn()
    }



    render() {
        return (
            <div>
                <App removeTokens={this.removeTokens} loggedIn={this.props.loggedIn} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { signedIn })(AppContainer);