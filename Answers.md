1. What problem does the context API help solve?
It lets us not have to prop drill, and lets us access data from any component.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: dispatches an action to the reducer.
Reducer: Simplifies changing state by having all changes go through here,
and leave the actual state immutable, returning a new array.
store: A wrapper containing the state of the app.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is data that needs to be accessed from anywhere in the app,
while component state would be used to keep track of form inputs for example.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk allows us to implement middleware, so we can control what happens 
when a component is between two states.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context.API is simple, clean, and extremely useful. However I am trying to use Redux
over Context API to become a better software engineer.
