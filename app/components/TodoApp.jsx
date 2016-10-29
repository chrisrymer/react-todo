var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Mow the grass'
                },
                {
                    id: 3,
                    text: 'go to the gym'
                },
                {
                    id: 4,
                    text: 'Wash the car'
                }
            ],
            showCompleted: false,
            searchText: ''
        }
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    handleAddTodo: function (text) {
        alert("Todo: " + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
           <div>
               <h1>Todo App</h1>
               <TodoSearch onSearch={this.handleSearch}/>
               <TodoList todos={todos} />
               <AddTodo onAddTodo={this.handleAddTodo}/>
           </div>
       )
    }
});

module.exports = TodoApp;