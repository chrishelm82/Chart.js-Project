import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';

function App() {
  const name = 'Sales Performance';
  return (
    <div className='App'> 
    <h1>Hello World</h1>
      <h1> Sales Performance </h1>
      {name === 'Sales Performance' ? <p> Welcome to the Sales Performance App </p> : <p> You are not authorized to view this page </p>}
      <NavBar />
      <Button />
    </div>
  );
}

export default App;
