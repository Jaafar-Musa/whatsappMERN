import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';


function App() {
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
