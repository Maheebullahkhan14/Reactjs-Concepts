import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA'

function App(){
  const name = 'Khan Gulam'
  return (
    <ChildA name = {name}></ChildA>
  )
}

export default App;
