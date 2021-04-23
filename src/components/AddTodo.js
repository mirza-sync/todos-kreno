import React, { Component } from 'react'
import { Consumer } from '../context'

export default class AddTodo extends Component {
    state = {
        id: 0,
        title: "",
        complete: false
    }

    update = (e) => {
        this.setState({
            id: Math.floor(Math.random() * 1000) + 1,
            title: e.target.value
        })
    }

    add = (dispatch, e) => {
        e.preventDefault()
        const newTodo = this.state
        dispatch({ type: 'ADD', payload: newTodo })
        this.setState({title: ""})
    }

    render() {
        return (
            <Consumer>{value => {
                const { dispatch } = value
                return <form onSubmit={this.add.bind(this, dispatch)}>
                    <input type="text" className="form-control rounded-0" 
                    placeholder="Add Task..." 
                    onChange={this.update} 
                    value={this.state.title} />
                    <button className="form-control rounded-0 btn-secondary">Add</button>
                </form>
            }}
            </Consumer>
        )
    }

}
