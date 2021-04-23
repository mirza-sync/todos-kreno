import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Todo extends Component {
    style = () => {
        const { complete } = this.props.todo
        return { textDecoration: complete ? 'line-through' : 'none' }
    }

    toggle = (id, dispatch) => {
        console.log("CHANGE")
        dispatch({ type: 'TOGGLE', payload: id })
    }

    remove = (id, dispatch) => {
        console.log("REMOVE")
        dispatch({ type: 'REMOVE', payload: id })
    }

    render() {
        const { title, id } = this.props.todo
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                                <i className="far fa-times-circle fa-sm float-start m-1 text-danger" 
                                onClick={this.remove.bind(this, id, dispatch)}></i>
                                {title}
                                <input type="checkbox" name="" id="" className="m-2 float-end" 
                                onChange={this.toggle.bind(this, id, dispatch)}/>
                            </h3>
                }}
            </Consumer>
        )
    }
}
