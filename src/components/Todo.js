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

    toggleEdit = (editStatus, dispatch) => {
        dispatch({ type: 'TOGGLE-EDIT', payload: !editStatus })
    }

    update = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    edit = (id, dispatch) => {
        const editedTodo = {}
        dispatch({ type: 'EDIT', payload: editedTodo })
    }

    render() {
        const { title, id, note } = this.props.todo
        return (
            <Consumer>
                {value => {
                    const { dispatch, editStatus } = value

                    return <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                                <div className="d-flex justify-content-between">
                                    <i className="far fa-times-circle fa-sm float-start m-1 text-danger" 
                                    onClick={this.remove.bind(this, id, dispatch)}></i>
                                        {editStatus ? 
                                        (
                                            <div className="">
                                                <input type="text" 
                                                className="form-control rounded-0" 
                                                onChange={this.update} 
                                                value={title} />
                                                <button className="form-control btn-secondary">Save</button>
                                            </div>
                                        ) : 
                                            title
                                        }
                                    <div>
                                        <input type="checkbox" name="" id="" className="m-2 float-end" 
                                        onChange={this.toggle.bind(this, id, dispatch)}/>
                                        <i className="far fa-edit fa-sm float-end m-1 text-primary" 
                                        onClick={this.toggleEdit.bind(this, editStatus, dispatch)}></i>
                                    </div>
                                </div>
                            </h3>
                }}
            </Consumer>
        )
    }
}
