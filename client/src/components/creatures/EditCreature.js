import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateCreature } from '../../actions/creatureActions'

class EditCreature extends Component {

    state = {
        name: this.props.creature.name,
        description: this.props.creature.description,
        img_url: this.props.creature.img_url
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    updateCreature = (e) => {
        e.preventDefault()
        const payload = {...this.state}
        this.props.updateCreature(payload, this.props.creature.id)
        this.props.handleToggle()
    }

    render() {
        return (
            <div>

                <form onSubmit={this.updateCreature}>
                    <img onClick={this.props.handleToggle} style={{ width: 200, height: 200, borderRadius: '50%' }} src={this.state.img_url} alt='Preview' />
                    <h3>Edit {this.props.creature.name}</h3>

                    <div>
                        <input value={this.state.name} name='name' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input value={this.state.description} name='description' onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Image URL </label>
                        <input value={this.state.img_url} name='img_url' onChange={this.handleChange} />
                    </div>
                    <button>Edit</button>
                </form>
            </div>
        );
    }
}


export default connect(null, { updateCreature })(EditCreature);