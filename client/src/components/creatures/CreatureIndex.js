import React, { Component } from 'react';
import EditCreature from './EditCreature'
import { connect } from 'react-redux'
import { fetchCreatures } from '../../actions/creatureActions'
import NewCreature from './NewCreature';

const styles = {
    input: {
        border: 'none',
        textAlign: 'center',
        fontSize: 15,
        color: 'black',
    }
}
class CreatureIndex extends Component {

    state = {
        showEdit: false,
        showCreate: false,
    }


    handleToggle = () => {
        this.setState({ showEdit: !this.state.showEdit })
    }

    createToggle = () => {
        this.setState({ showCreate: !this.state.showCreate })
    }

    

    render() {
        let data = []

        if (this.props.creatures) {
            data = this.props.creatures.map((creature) => {
                return (
                    <div key={creature.id}>

                        {
                            this.state.showEdit
                                ?
                                <EditCreature handleToggle={this.handleToggle} creature={creature} />
                                :
                                <div>
                                    <img onClick={this.handleToggle} style={{ width: 200, height: 200, borderRadius: '50%' }} src={creature.img_url} alt='Broken link' />
                                    <h3>{creature.name}</h3>
                                    <h6>{creature.description}</h6>
                                </div>

                        }

                    </div>
                )
            })
        }

        return (
            <div>
                <button onClick={this.createToggle}>Add Creature</button>
                {
                    this.state.showCreate
                        ?
                        <NewCreature createToggle={this.createToggle} />
                        :
                        null
                }
                {data}
            </div>
        )

    }


}

const mapStateToProps = state => {
    return {
        creatures: state.creatures.items
    }
}

export default CreatureIndex;