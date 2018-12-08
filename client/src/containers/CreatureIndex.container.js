import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatureIndex from '../components/creatures/CreatureIndex'
import { fetchCreatures } from '../actions/creatureActions'



class CreatureIndexContainer extends Component {


    componentDidMount() {
        this.props.fetchCreatures()

    }



    render() {
        return (
            <div>
                <CreatureIndex {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        creatures: state.creatures.items
    }
}



export default connect(mapStateToProps, { fetchCreatures })(CreatureIndexContainer);