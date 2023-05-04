import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto my-8'>
            <h2 className='text-center text-2xl font-bold'> Blog Post</h2>
            <div>
                <div>
                    <p>differences between uncontrolled and controlled components.</p>
                    <p>In React, there are two ways to manage form inputs: controlled components and uncontrolled components.

                        Controlled components refer to the components whose value is controlled by React state. In other words, the state of the component is used to keep track of the value of the input. When the value of the input changes, the state is updated with the new value, and the component is re-rendered with the updated value. This makes it easy to validate and manipulate the input before it is submitted. Controlled components typically use the value prop to display the current value of the input, and the onChange event to update the state when the input value changes.

                        Uncontrolled components, on the other hand, rely on the browser to manage the value of the input. The value of the input is set by the user, and is not directly controlled by React. This makes it more difficult to validate and manipulate the input before it is submitted. Uncontrolled components typically use the defaultValue prop to set the initial value of the input, and the ref prop to access the value of the input when the form is submitted.

                        The main difference between controlled and uncontrolled components is that controlled components keep the input value in sync with React state, while uncontrolled components rely on the browser to manage the input value. Controlled components are typically easier to work with, especially for complex forms, because they give you more control over the input value and allow you to manipulate and validate it before it is submitted. However, uncontrolled components can be useful for simple forms where you don't need to perform any validation or manipulation of the input value.</p>
                </div>
                <div>
                    <p>How to validate React props using PropTypes</p>
                    <p>React provides a library called PropTypes to validate the props passed to a component. To use PropTypes, you first need to install it by running the following command in your terminal: <br />Once you've installed PropTypes, you can import it in your component and use it to validate your props. Here's an example: <br />In this example, we have defined the PropTypes for MyComponent. We have specified the propTypes object, which has a property for each prop that the component expects. The property name corresponds to the name of the prop, and the value is a PropTypes validator function that defines the type of the prop and whether it is required or not.

For example, the name prop is a required string, the age prop is a required number, the email prop is an optional string, the isStudent prop is a required boolean, the hobbies prop is an array of strings, and the address prop is an object with required properties street, city, and state.

If a prop does not conform to its specified PropTypes, React will log a warning message in the console. This can be very helpful during development to catch errors and ensure that your components are receiving the correct props.</p>
                </div>
                <div>
                    <p>difference between nodejs and express js.</p>
                    <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows developers to run JavaScript code outside of the browser. Node.js comes with built-in modules that enable developers to write server-side applications using JavaScript.

Express.js, on the other hand, is a popular web application framework for Node.js that provides a set of tools and features for building web applications and APIs. Express.js makes it easier to handle HTTP requests and responses, manage routes, and handle middleware.

In summary, Node.js is a runtime environment that allows you to run JavaScript code outside of the browser, while Express.js is a web application framework built on top of Node.js that provides additional features and tools for building web applications and APIs.

Some key differences between Node.js and Express.js include:

Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
Node.js provides built-in modules for handling I/O operations and other system-level tasks, while Express.js provides a set of features and tools for building web applications and APIs.
Node.js can be used to build a variety of applications, including web applications, desktop applications, and command-line tools, while Express.js is primarily focused on web development.
Node.js has a steeper learning curve than Express.js because it requires a deeper understanding of JavaScript and system-level concepts, while Express.js provides a more straightforward approach to building web applications and APIs.</p>
                </div>
                <div>
                    <p>What is a custom hook, and why will you create a custom hook?</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;