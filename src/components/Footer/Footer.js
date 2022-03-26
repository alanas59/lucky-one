import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
          {/*   first question */}
            <h1>How React Works?</h1>
            <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
           Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
           Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
          {/*  second question */}
           <h1>Props vs State</h1>
           <h3>Props:</h3>
           <ul>
               <li>The Data is passed from one component to another.</li>
               <li>It is Immutable (cannot be modified).</li>
               <li>Props can be used with state and functional components.</li>
               <li>Props are read-only.</li>
           </ul>
           <h3>State:</h3>
           <ul>
               <li>The Data is passed within the component only.</li>
               <li>It is Mutable ( can be modified).</li>
               <li>State can be used only with the state components/class component (Before 16.0).</li>
               <li>State is both read and write.</li>
           </ul>
        </div>
    );
};

export default Footer;