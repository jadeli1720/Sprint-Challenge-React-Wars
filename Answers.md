# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a  way to simply create UI components that are scalable, streamlined, modular, and compartmentalized. Apps can be built quickly and efficiently with an ease of visualizing how app is laid out an lend itself to better organization. It allows for updating certain areas of an application without having to re-render/reload an entire page by using a virtual DOM. This increases the performance and speed of the application considerably.

1. What does it mean to think in react?
To think in react is to think about how you are going to build your app and breaking it down into steps:
    1. Make a mock-up so you can visualize roughly how many        components you may need.
    2. Break down the hierarchy of the components
    3. Implement and build a static version
    4. Trigger small events/changes to the site using state
    5. And then decide where to put you state and props


1. Describe state.
State is the data that can be set and changed using useState hooks. It gets passed and manipulated between the various components of an app.

1. Describe props.
Props are the objects and bridge between the components that passes the data or state between them.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?
They are anything that affects something outside the scope of the function being executed, like getting information from an API server.
