import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signedIn } from '../actions/authActions'
import { removeTokens } from '../utils/SessionHeaderUtils'
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
                <App {...this.props} removeTokens={this.removeTokens} />
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