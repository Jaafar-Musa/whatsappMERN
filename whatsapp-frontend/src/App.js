import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

// function get(){
//   fetch('http://localhost:9000/').then(
//     response => console.log(response.json())
//   )
// }


function App() {
  // { get() }
  return (
    <div className="app">
      <section className="app__body">
        <Sidebar/>
        <Chat/>
      </section>
    </div>
  );
}

export default App;
