import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCreature } from '../../actions/creatureActions'



class NewCreature extends Component {

    state = {
        name: 'Charman',
        description: 'Fiery HOT HOT',
        img_url: 'http://i36.tinypic.com/2v9afsl.jpg'
    }

    handleChange = event => this.setState({ [event.target.name]: event.target.value })


    createCreature = (event) => {
        event.preventDefault()
        this.props.createCreature({...this.state})
        this.props.createToggle()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.createCreature}>
                    <div>
                        <label>Name </label>
                        <input onChange={this.handleChange} name='name' value={this.state.name} />
                    </div>
                    <div>
                        <label>Description </label>
                        <input onChange={this.handleChange} name='description' value={this.state.description} />
                    </div><div>
                        <label>Image URL </label>
                        <input onChange={this.handleChange} name='img_url' value={this.state.img_url} />
                    </div>
                    <button>Create</button>
                </form>
            </div>
        );
    }
}



export default connect(null, { createCreature })(NewCreature);