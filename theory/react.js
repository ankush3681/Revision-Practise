// 1. **What is React ? Why did you choose React over other Libraries and Frameworks?**
    
//     React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is widely used in web development. React allows developers to create reusable UI components and efficiently update and render them in response to data changes.
    
//     There are several reasons why React has gained popularity and why it might be preferred over other libraries and frameworks:
    
//     1. Component-Based Architecture: React follows a component-based architecture, which means you can break down your UI into reusable, self-contained components. This modularity makes it easier to manage and maintain complex UIs, as well as promote code reusability.
//     2. Virtual DOM: React uses a virtual DOM (Document Object Model), which is an abstract representation of the actual HTML DOM. When data changes, React efficiently updates only the necessary parts of the DOM, reducing the number of expensive DOM operations. This approach leads to better performance and a smoother user experience.
//     3. Unidirectional Data Flow: React enforces a unidirectional data flow, which means data flows in a single direction from parent components to child components. This approach simplifies data management and makes it easier to understand and debug the application's state.
//     4. Rich Ecosystem and Community: React has a vast ecosystem of third-party libraries, tools, and extensions that enhance its capabilities and simplify development tasks. Additionally, React has a large and active community of developers who contribute to its growth, provide support, and share knowledge.
//     5. Flexibility: React is primarily a view library, which means it focuses on handling the UI layer. It doesn't enforce strict conventions or opinions about the rest of the application stack, allowing developers to choose their preferred tools and libraries for state management, routing, and other aspects of their application.
//     6. Reusability: React components can be reused across different projects or even within the same project, promoting code reusability and reducing development time. This reusability is particularly useful when building large-scale applications.






//  **What is the difference between State and Props in React ?**
    
//     In React, both state and props are used to manage and pass data between components, but they have different purposes and characteristics.
    
//     State:
    
//     - State is a JavaScript object that represents the internal data of a component.
//     - It is managed within the component and can be changed using the **`setState()`** method provided by React.
//     - State is mutable and can be updated, causing the component to re-render and reflect the updated data.
//     - State is typically used for data that is specific to a component and may change over time, such as form inputs, user interactions, or dynamic data from APIs.
//     - State is initialized and managed within the component itself and is not directly accessible by other components.
    
//     Props (short for properties):
    
//     - Props are passed to a component from its parent component and are read-only.
//     - They are used to pass data from a parent component to its child components.
//     - Props are immutable, meaning they cannot be modified within the child component.
//     - Changes in props from the parent component trigger a re-render of the child component to reflect the new data.
//     - Props are useful for providing configuration or data to a component and enabling the composition of components.
//     - Components can define their expected props using prop types or TypeScript interfaces to enforce type checking and documentation.
    
//     // In summary, state is used to manage internal, mutable data within a component,
//      while props are used to pass data from parent components to child components.
//       State represents the current state of a component, 
//     whereas props represent the configuration and data passed to a component.




//  **What is prop drilling and explain it with an example (parent to child) ?**
    
//     Prop drilling refers to the process of passing props through multiple layers of components, even if some intermediate components do not directly need those props. This can occur when a parent component needs to pass data to a deeply nested child component, requiring the data to be passed through several intermediary components along the component hierarchy.
    
//     Here's an example to illustrate prop drilling:
    
//     ```jsx
    
//     // ParentComponent.js
//     import React from 'react';
//     import ChildComponent from './ChildComponent';
    
//     const ParentComponent = () => {
//       const data = 'Hello, prop drilling!';
//       return <ChildComponent data={data} />;
//     };
    
//     export default ParentComponent;
    
//     // IntermediateComponent.js
//     import React from 'react';
//     import ChildComponent from './ChildComponent';
    
//     const IntermediateComponent = ({ data }) => {
//       return <ChildComponent data={data} />;
//     };
    
//     export default IntermediateComponent;
    
//     // ChildComponent.js
//     import React from 'react';
    
//     const ChildComponent = ({ data }) => {
//       return <div>{data}</div>;
//     };
    
//     export default ChildComponent;
//     ```
    
//     In this example, the **`ParentComponent`** has some data that it needs to pass down to the **`ChildComponent`**. However, there is an intermediate component called **`IntermediateComponent`** between the parent and child. Since the **`ChildComponent`** requires the data, it needs to be passed through the **`IntermediateComponent`** even if it doesn't use the data itself.
    
//     This results in prop drilling, as the data is "drilled" from the **`ParentComponent`** through the **`IntermediateComponent`** to the **`ChildComponent`**. While prop drilling works, it can become cumbersome and lead to unnecessary passing of props through unrelated components. It can also make the code harder to maintain and modify.
    
//     To avoid excessive prop drilling, there are alternative solutions available in React, such as using state management libraries like Redux or Context API. These solutions allow you to store data in a centralized location and access it from any component without the need for prop drilling.