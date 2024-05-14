//import logo from './logo.svg';
import ToDoFrame from './Components/To-Do-Frame';
import ToDoTitle from './Components/To-Do-Title';

import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoTitle />
      <main className="p-4">
        <ToDoFrame>
          <p>test</p>
        </ToDoFrame>
      </main>
    </div>
  );
}

export default App;

