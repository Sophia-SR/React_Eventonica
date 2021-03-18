import logo from './logo.svg';
import './App.css';
import Events from './components/Events.js'
import Users from './components/Users.js'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
// /Users/tpl6_2021h1/Documents/React_Eventonica/eventonica/src/App.js
// /Users/tpl6_2021h1/Documents/React_Eventonica/eventonica/src/components/Events.js


function App() {
  return (
    <div className="App">
     <Events/>
     <EventForm></EventForm>
     {/* <Users/> */}
     <EventList></EventList>
    </div>
  );
}

export default App;
