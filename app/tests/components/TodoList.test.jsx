var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo List', () => {
   it('should be an object', () => {
       expect(TodoList).toExist();
   });

    it('should render one todo component for each to do item', () => {
        var todos = [
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
        ];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(4);
    })

});