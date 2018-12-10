import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatureIndex from '../components/creatures/CreatureIndex'
import { fetchCreatures } from '../actions/creatureActions'



class CreatureIndexContainer extends Component {


    componentDidMount() {
        this.props.fetchCreatures()

    }


    componentDidUpdate(prevProps){
        if(prevProps.creature !== this.props.creature){
            this.props.fetchCreatures()
            console.log(prevProps)
        }
        // if(prevProps.creatures !== this.props.creatures){
        //     this.props.fetchCreatures()
        //     console.log(prevProps)

        // }
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