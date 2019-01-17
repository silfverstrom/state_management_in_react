# State management in React

## Higher Order Component

### Introduction 

A higher order component is a function which takes a component and returns a new component. This can be used to reuse functionality that would otherwise be hard to decapsulate from a component.

If you look in the package hoc/ there is a file, connect.js, that exports a higher order component. Inspecting the file we can see that it's a plain old javascript function which in its first argument takes a parameter called WrappedComponent.

The function then exports an anonymous React Component, using class syntax, which binds to a store containing the state for the entire application. The new component renders the WrappedComponent and sends the state through using props.

```javascript

<WrappedComponent 
    data={this.state} 
    dispatcher={dispatcher} 
/>

```

In our component, HocDemo, we then wrap our component using connect, 


```javascript

export default connect(HocDemo);

```

By utilising this pattern we can decapsulate state-logic from our components and reuse functionality.
