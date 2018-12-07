import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatureIndex from '../components/creatures/CreatureIndex'
import { fetchCreatures } from '../actions/creatureActions'
  


class CreatureIndexContainer extends Component {


    componentDidMount(){
        this.props.fetchCreatures()
    }

    render() {
        return (
            <div>
                <CreatureIndex />
            </div>
        );
    }
}

export default connect(null, { fetchCreatures })(CreatureIndexContainer);