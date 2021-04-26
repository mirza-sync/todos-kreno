import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                todos: prevState.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        return { ...todo, complete: !todo.complete }
                    } else {
                        return todo
                    }
                })
            }

            case 'REMOVE':
                return {
                    todos: prevState.todos.filter(todo => todo.id !== action.payload)
                }

            case 'ADD':
                return {
                    todos: [ ...prevState.todos, action.payload ]
                }

            case 'TOGGLE-EDIT':
                return {
                    editStatus: action.payload
                }
            
            case 'EDIT':
                return {
                    todos: prevState.todos.map((todo) => {
                        if(todo.id === action.payload) {
                            
                        }
                    return todo
                    })
                }
    
        default:
            return prevState;
    }
}

export default class Provider extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Workout",
                complete: false,
                note: ""
            },
            {
                id: 2,
                title: "Cook",
                complete: false,
                note: ""
            },
            {
                id: 3,
                title: "Sleep",
                complete: false,
                note: ""
            },
        ],
        dispatch: (action) => this.setState(prevState => reducer(prevState, action)),
        editStatus: false
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
