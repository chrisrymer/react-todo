var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoApp = require('TodoList');

describe('Todo App', () => {
    it('should be an object', () => {
        expect(TodoApp).toExist();
    })
});