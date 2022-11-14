import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1>React Assignment #01</h1>

      <h1 className='Heading'>What is React?</h1>
      <p className='paragraph'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies</p>

      <h1 className='Heading'>Spa VS Mpa?</h1>
      <p className='paragraph'>A single-page application is a more modern approach to app development. It was used by Google, Facebook, Twitter, etc. A SPA is an app that works inside a browser and does not require page reloading during use.

        On the other hand, a multiple-page application is considered a more classical approach to app development. The multi-page design pattern requires a page reload every time the content changes. It’s a preferred option for large companies with extensive product portfolios, such as e-commerce businesses.</p>

      <h1 className='Heading'>Angular VS React?</h1>
      <p className='paragraph'>How is React different from Angular? React is a JavaScript library, whereas Angular is a front-end framework. React uses one-way data binding and virtual DOM, whereas Angular uses two-way data binding and real DOM. Moreover, React is faster than Angular as it has a smaller bundle size.</p>

      <h1 className='Heading'>Frame-Work</h1>
      <p className='paragraph'>In a framework, all the control flow is already there and there are many predefined white spots that we should fill out with our code. A framework is normally more complex. It defines a skeleton where the application defines its own features to fill out the skeleton. In this way, your code will be called by the framework appropriately. The benefit is that developers do not need to worry about if a design is good or not, but just about implementing domain-specific functions. The framework will provide you with hooks and call-backs so that you build on it; it will then call your plugged-in code whenever it wishes, a phenomenon called Inversion of Control.</p>


      <h1 className='Heading'>What is Library?</h1>
      <p className='paragraph'>A library performs specific, well-defined operations. A library is just a collection of class definitions. The reason is it simply code reuse, in other words, gets the code that has already been written by other developers. The classes and methods normally define specific operations in a domain-specific area. For example, there are some libraries of mathematics that can let developers just call the function without redoing the implementation of how an algorithm works. A library will usually focus on a single piece of functionality that you access using an API. You call a library function, it executes some code and then the control is returned to your code.
      </p>


      <h1 className='Heading'>What is DOM?</h1>
      <p className='paragraph'>DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.  DOM manipulation is required to dynamically change the content of a web page. DOM is an interface that allows the script to update the content, style, and structure of the document.</p>


      <h1 className='Heading'>What is Virtual-DOM?</h1>
      <p className='paragraph'>VDOM is the virtual representation of Real DOM
        React update the state changes in Virtual DOM first and then it syncs with Real DOM
        Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
        Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation</p>


      <h1 className='Heading'>What is One way data Binding?</h1>
      <p className='paragraph'>In one-way binding, the data flow is one-directional.
        This means that the flow of code is from typescript file to Html file.
        In order to achieve a one-way binding, we used the property binding concept in Angular.
        In property binding, we encapsulate the variable in Html with square brackets( [ ] ).
        We will understand this concept through an example in order to make it more comprehensible.</p>

      <h1 className='Heading'>What is Two way data Binding?</h1>
      <p className='paragraph'>In a two-way binding, the data flow is bi-directional.
This means that the flow of code is from ts file to Html file as well as from Html file to ts file.
In order to achieve a two-way binding, we will use ngModel or banana in a box syntax.
To make sure the app doesn’t break, we need to import ‘FormsModule’ from ‘@angular/forms.
Any changes to the view are propagated to the component class. Also, any changes to the properties in the component class are reflected in the view.</p>



    </div>
  );
}

export default App;
