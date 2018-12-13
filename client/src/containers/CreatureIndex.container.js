import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatureIndex from '../components/creatures/CreatureIndex'
import { fetchCreatures } from '../actions/creatureActions'



class CreatureIndexContainer extends Component {


    componentDidMount() {
        this.props.fetchCreatures()

    }

    // In my use case, whenever I dispatch an action to edit a creature, it maps a new prop of the edited creature to this container.  
    // This is causing my container to rerender props everytime a change in this specific prop occurs.
    // Learning the purpose of redux as more of a model one could just change state, and make api calls later (in bigger applications)
    componentDidUpdate(prevProps){
        if(prevProps.creature !== this.props.creature){
            this.props.fetchCreatures()
            console.log(prevProps)
        }

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
        creatures: state.creatures.items,
        creature: state.creatures.item
    }
}



export default connect(mapStateToProps, { fetchCreatures })(CreatureIndexContainer);