import React from "react";
import './App.css';
 
import Entry from "./pages/entry/Entry.page";
import LayoutDefault from "./layout/LayoutDefault";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNewTicket from "./pages/newTicket/AddNewTicket";

function App() {
  return (
    <div className="App">
     {/* <Entry/> */}
     <LayoutDefault>
      {/* <Dashboard/> */}
      <AddNewTicket/>
     </LayoutDefault>
    </div>
  );
}

export default App;
 