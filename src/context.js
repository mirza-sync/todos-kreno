import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (prevState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                todos: prevState.todos.map((todo) => {
                    if(todo.id === action.payload) {
                        console.log('Before', todo.complete)
                        todo.complete = !todo.complete
                        console.log('after', todo.complete)
                    }
                    console.log("Todooo", todo)
                    return todo
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
                complete: false
            },
            {
                id: 2,
                title: "Cook",
                complete: false
            },
            {
                id: 3,
                title: "Sleep",
                complete: false
            },
        ],
        dispatch: (action) => this.setState(prevState => reducer(prevState, action))
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
