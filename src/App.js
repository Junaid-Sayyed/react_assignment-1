import Person from './Components/person'
import Button from './Components/person'
import Header from './Components/person'
import List from './Components/person'

function App() {
  return (
    <div className="App">
    
    <Button text="Click Me" onClick={() => alert("Button clicked!")} />
    <Person name="John" age="30" />
    <Header title="React Assignment" />
    <List items={['Orange', 'Blue', 'Green','Yellow']} />
       
      
     
    </div>
  );
}

export default App;
