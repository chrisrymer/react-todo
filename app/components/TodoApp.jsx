var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
            ]
        }
    },
    addTodoHandler: function (text) {
        alert("Todo: " + text);
    },
    render: function () {
        var {todos} = this.state;
        return (
           <div>
               <h1>Todo App</h1>
               <TodoList todos={todos} />
               <AddTodo onAddTodo={this.addTodoHandler}/>
           </div>
       )
    }
});

module.exports = TodoApp;