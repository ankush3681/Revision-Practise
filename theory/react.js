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