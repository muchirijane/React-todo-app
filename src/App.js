import React, { Component } from 'react';
import TodoList from './todoList/input';
import './App.css';
import './index.css';


 class App extends Component {

  state = {
    newItem: "",
    list: [],
  }

  update(key, value) {
    //update the state
    this.setState({
      [key]: value
    })
  }

  changedHandler = (e) => {
    this.setState({
      newItem: e.target.value,
    })
  }

  addItemHandler = () => {
    console.log('Added an item');
    //create an item with a unique id
    const newItem ={
      id: 1 + Math.random(), 
      value: this.state.newItem.slice()
    }

    //copy of list 
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update the state 
    this.setState({ 
      list,
      newItem
    })
  }
  deleteItem =(id)=>{
    //copy the current list item 
    const list = [...this.state.list];

    //filter out items been deleted
    const updateList = list.filter(item => item.id !== id);
    this.setState({
      list: updateList
    })
  }
  render () {
    const center ={
      textAlign: 'center'
    }

    const container ={
      border: '2px solid #293241',
      borderRadius: '30px',
      boxShadow: '0 5px 50px rgba(0, 0, 0, 0.2)',
      width: '40%',
      margin: '0 auto',
      padding: '20px 140px',
    }
    return (
      <div className="App">
        <header style={center}>
          <h1>My Todo List 📖</h1>
        </header>
        <main style={container}>
            <TodoList ItemValue={this.state.newItem} changed={this.changedHandler}/>
            <button className="btnStyle" onClick = {this.addItemHandler} ariallabel="add button"> Add</button>
          <ul className="list">
            {this.state.list.map(item => {
              return (
                <li key={item.id} className="listItem">
                  {item.value}
                  <button className="btnDelete" onClick = {()=>this.deleteItem(item.id)}>X</button>
                </li>
              )
            })}
          </ul>
        </main>
        
      </div>
    );
  }
}

export default App;
