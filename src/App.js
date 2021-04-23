import './App.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Provider from './context'

function App() {
  return (
    <Provider>
      <div className="container">
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
