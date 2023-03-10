import React from "react";


const Blog = () => {
 
  return (
    <div className="container mt-5 bg-white shadow-sm p-3">
      <div className="q1">
        <h2>What are the different ways to manage a state in a React application?</h2>
        <p>
        There are four main types of state you need to properly manage in your React apps:

        Local state,
        Global state,
        Server state,
        URL state
        </p>
      </div>
      <div className="q2">
        <h2>How does prototypical inheritance work?</h2>
        <p>
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
        </p>
      </div>
      <div className="q3">
        <h2> What is a unit test? Why should we write unit tests?</h2>
        <p>
        In computer programming, unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use. <br />
        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
        </p>
      </div>
      <div className="q4">
        <h2>React vs. Angular vs. Vue?</h2>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Categories</th>
      <th scope="col">React</th>
      <th scope="col">Angular</th>
      <th scope="col">Vue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">type</th>
      <td>Rich Library to build UI</td>
      <td>A framework</td>
      <td>A Library </td>
    </tr>
    <tr>
      <th scope="row">Development approch</th>
      <td>Everything is on javascript</td>
      <td>Based on TypeScript</td>
      <td>Based on javascript and html</td>
    </tr>
    <tr>
      <th scope="row">Maintained and support by</th>
      <td>Facebook</td>
      <td>Google</td>
      <td>Former google employee</td>
    </tr>
  </tbody>
  {/* https://plainenglish.io/blog/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022 */}
</table>
      </div>
    </div>
  );
};

export default Blog;