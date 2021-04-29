import React, { Component } from 'react'
import { Consumer } from '../context'

export default class Todo extends Component {
    state = {
        editStatus: false
    }

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

    toggleEdit = (editStatus) => {
        this.setState({editStatus: !editStatus})
    }

    update = (e) => {
        console.log("Update")
        // this.setState({
        //     title: e.target.value
        // })
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
                    const { dispatch } = value

                    return (
                        <div className="h3 text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                            <div className="d-flex justify-content-between align-items-center">
                                <i className="far fa-times-circle fa-sm float-start m-1 text-danger" 
                                onClick={this.remove.bind(this, id, dispatch)}></i>
                                    {this.state.editStatus ? 
                                    (
                                        <div className="d-flex">
                                            <input type="text" 
                                            className="form-control" 
                                            onChange={this.update} 
                                            value={title} />
                                            <button className="btn-secondary btn-sm border">Save</button>
                                        </div>
                                    ) : 
                                        title
                                    }
                                <div className="d-flex align-items-center">
                                    <i className="far fa-edit fa-sm float-end m-2 text-primary" 
                                    onClick={this.toggleEdit.bind(this, this.state.editStatus)}></i>
                                    <input type="checkbox" name="" id="" className="float-end m-2" 
                                    onChange={this.toggle.bind(this, id, dispatch)}/>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
