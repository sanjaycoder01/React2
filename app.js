const heading = React.createElement('h1', { id: 'heading' }, 'hello react')
//it is used to create tags
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(heading)
//to implement this into web page we have to use reactdom
root.render(heading)
//to have the h1 tag under div tag send heading to root id
//render method take the react element nothing but javascript object and convert it to tag h1 and put it to the div tag
const head = React.createElement('h4', {}, 'hello react once again')
const root1 = ReactDOM.createRoot(document.getElementById('root2'))
root1.render(head)
// When a component is rendered, React takes the element returned by the render() method and converts it into a set of instructions for the browser to display it on the screen. These instructions are called the virtual DOM (Document Object Model), and they are used to update the actual DOM when there are changes in the state or props of the component.

// To summarize, the render() method is used to define what a component should display on the screen. It returns a React element, which is used by React to generate the virtual DOM and update the actual DOM when there are changes in the component's state or props.

//code 2
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello'),
    React.createElement('h2', {}, 'Hi'),
  ]),
  React.createElement('div', { id: 'child11' }, [
    React.createElement('h1', {}, 'Hello1'),
    React.createElement('h2', {}, 'Hi1'),
  ]),
])
const root2 = ReactDOM.createRoot(document.getElementById('root3'))
root1.render(parent)
