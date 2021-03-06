var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe('Todo App', () => {
    it('should be an object', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todo state on handleAddTodo', () => {
        var todoText = 'Test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = { id: 11, text: 'Test Feature', completed: false };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.handleToggle(11));
        expect(todoApp.state.todos[0].completed).toBe(true);

    });
});