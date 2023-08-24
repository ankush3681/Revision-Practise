import logo from './logo.svg';
import './App.css';
import Counter1 from './components/Counter1';
import UseRef from './components/UseRef';
import Counter2 from './components/WithoutJsx';
import FragmentExample from './components/Fragment';

function App() {
  return (
    <div className="App">
      {/* <Counter1/> */}
      {/* <UseRef/> */}
      {/* <Counter2/> */}
      <FragmentExample/>
    </div>
  );
}

export default App;
