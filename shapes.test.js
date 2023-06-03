const { it } = require('node:test');
const {Shape, Circle, Square, Triangle} = require('./shapes.js')

describe('Shape', () => {
    it('should set the color of the shape', () => {
        const shape = new Shape();
        var color = ('red');
        shape.setColor(color);
        expect(shape.color).toEqual('red');
    });
});
describe('Circle', () => {
    it('rendered the circle', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill='${color}' />`)
    });
});

describe('Square', () => {
    it('rendered the Square', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill='${color}'/>`)
    });
});


describe('Triangle', () => {
    it('rendered the Triangle', () => {
        const shape = new Triangle();
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height='300' width='200' points='0,200, 300,200, 150,0' fill='${color}' />`)
    });
});