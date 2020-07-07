1. What problem does the context API help solve?
It allows you to have a global state in smaller applications without the complexity of Redux

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are a way to send data to your application store
reducers are a way to "reduce" multiple states to a single state
the store is a place to hold all the application state, and is known as a single source of truth because it holds all the application state

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is a global state and allows you to use state in more than one component.
Component state is state localized to a single component that cant be used outside the component.
You would use Application state when you have multiple components that are sharing state. You would use Component state when you have a component that doesnt need to share its state with other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux because it is more verbose and easier for me to understand than Context API
