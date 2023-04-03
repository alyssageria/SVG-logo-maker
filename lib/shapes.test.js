const { Shapes, Circle, Triangle, Square } = require('./shapes');

// Test for Circle Shape
describe('Circle', () => {
    test('When I call the setcolor function it will return the svg string with the correct color', () => {
        const colorShape = new Circle();
        colorShape.setColor('blue');
        expect(colorShape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>')
    })
})

// Test for Triangle Shape
describe('Triangle', () => {
    test('When I call the setcolor function it will return the svg string with the correct color', () => {
        const colorShape = new Triangle();
        colorShape.setColor('blue');
        expect(colorShape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 300,200 150,0" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>')
    })
})

// Test for Square Shape
describe('Square', () => {
    test('When I call the setcolor function it will return the svg string with the correct color', () => {
        const colorShape = new Square();
        colorShape.setColor('blue');
        expect(colorShape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" width="200" height="200" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text></svg>')
    })
})