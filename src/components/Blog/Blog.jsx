import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='w-1/2 mx-auto my-8 bg-base-200 rounded-xl p-4'>
            <div ref={ref}>
            <h2 className='text-center text-2xl font-bold pt-8'> Blog Post</h2>
            <div className='p-2 pt-4'>
                <div className='bg-green-300 p-2 rounded-2xl my-2'>
                    <p><span className='font-semibold '>Question:</span> differences between uncontrolled and controlled components.</p>
                    <p className='bg-green-200 p-2 rounded-2xl'><span className='font-semibold '>Answer:</span> In React, there are two ways to manage form inputs: controlled components and uncontrolled components.

                        Controlled components refer to the components whose value is controlled by React state. In other words, the state of the component is used to keep track of the value of the input. When the value of the input changes, the state is updated with the new value, and the component is re-rendered with the updated value. This makes it easy to validate and manipulate the input before it is submitted. Controlled components typically use the value prop to display the current value of the input, and the onChange event to update the state when the input value changes.

                        Uncontrolled components, on the other hand, rely on the browser to manage the value of the input. The value of the input is set by the user, and is not directly controlled by React. This makes it more difficult to validate and manipulate the input before it is submitted. Uncontrolled components typically use the defaultValue prop to set the initial value of the input, and the ref prop to access the value of the input when the form is submitted.

                        The main difference between controlled and uncontrolled components is that controlled components keep the input value in sync with React state, while uncontrolled components rely on the browser to manage the input value. Controlled components are typically easier to work with, especially for complex forms, because they give you more control over the input value and allow you to manipulate and validate it before it is submitted. However, uncontrolled components can be useful for simple forms where you don't need to perform any validation or manipulation of the input value.</p>
                </div>
                <div className='bg-green-300 p-2 rounded-2xl my-2'>
                    <p><span className='font-semibold '>Question:</span> How to validate React props using PropTypes</p>
                    <p className='bg-green-200 p-2 rounded-2xl'><span className='font-semibold '>Answer:</span> React provides a library called PropTypes to validate the props passed to a component. To use PropTypes, you first need to install it by running the following command in your terminal: <br />Once you've installed PropTypes, you can import it in your component and use it to validate your props. Here's an example: <br />In this example, we have defined the PropTypes for MyComponent. We have specified the propTypes object, which has a property for each prop that the component expects. The property name corresponds to the name of the prop, and the value is a PropTypes validator function that defines the type of the prop and whether it is required or not.

                        For example, the name prop is a required string, the age prop is a required number, the email prop is an optional string, the isStudent prop is a required boolean, the hobbies prop is an array of strings, and the address prop is an object with required properties street, city, and state.

                        If a prop does not conform to its specified PropTypes, React will log a warning message in the console. This can be very helpful during development to catch errors and ensure that your components are receiving the correct props.</p>
                </div>
                <div className='bg-green-300 p-2 rounded-2xl my-2'>
                    <p><span className='font-semibold '>Question:</span> difference between nodejs and express js.</p>
                    <p className='bg-green-200 p-2 rounded-2xl'><span className='font-semibold '>Answer:</span> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows developers to run JavaScript code outside of the browser. Node.js comes with built-in modules that enable developers to write server-side applications using JavaScript.

                        Express.js, on the other hand, is a popular web application framework for Node.js that provides a set of tools and features for building web applications and APIs. Express.js makes it easier to handle HTTP requests and responses, manage routes, and handle middleware.

                        In summary, Node.js is a runtime environment that allows you to run JavaScript code outside of the browser, while Express.js is a web application framework built on top of Node.js that provides additional features and tools for building web applications and APIs.

                        Some key differences between Node.js and Express.js include:

                        Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js.
                        Node.js provides built-in modules for handling I/O operations and other system-level tasks, while Express.js provides a set of features and tools for building web applications and APIs.
                        Node.js can be used to build a variety of applications, including web applications, desktop applications, and command-line tools, while Express.js is primarily focused on web development.
                        Node.js has a steeper learning curve than Express.js because it requires a deeper understanding of JavaScript and system-level concepts, while Express.js provides a more straightforward approach to building web applications and APIs.</p>
                </div>
                <div className='bg-green-300 p-2 rounded-2xl my-2'>
                    <p><span className='font-semibold '>Question:</span> What is a custom hook, and why will you create a custom hook?</p>
                    <p className='bg-green-200 p-2 rounded-2xl'><span className='font-semibold '>Answer:</span> A custom hook in React is a JavaScript function that starts with the prefix use and allows you to extract and reuse logic that is shared between different components in your application.

Custom hooks enable developers to create reusable code that can be shared across multiple components. They are particularly useful when you find yourself duplicating code across multiple components, as they allow you to extract that code into a separate function that can be used in multiple places.

Here are some reasons why you might create a custom hook in React:

Reuse code across multiple components: If you find yourself writing similar code across multiple components, you can extract that code into a custom hook and reuse it across your application.

Keep your components simple and focused: By extracting complex logic into a custom hook, you can keep your components focused on their primary responsibilities, making them easier to read and maintain.

Share logic across team members: Custom hooks can be shared across team members, making it easier to collaborate on large codebases and ensure consistency across your application.

Improve testing: By separating logic into a custom hook, you can test that logic independently from your components, making it easier to write unit tests and ensure that your code is functioning as expected.

In summary, custom hooks in React allow you to extract and reuse logic that is shared across multiple components, making your code more reusable, maintainable, and testable.</p>
                </div>
            </div>
            </div>
            
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <div className='text-center'> 
            <button className='btn btn-outline' onClick={toPdf}>Download as PDF</button>
            </div>}
      </Pdf>
        </div>
    );
};

export default Blog;