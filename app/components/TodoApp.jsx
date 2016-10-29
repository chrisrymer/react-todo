var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Mow the grass'
                },
                {
                    id: uuid(),
                    text: 'go to the gym'
                },
                {
                    id: uuid(),
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
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
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