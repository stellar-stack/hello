import "./App.css";
import Employee from "./components/Employee";
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployee = true;  
  
  return (
    <div className="App">
      {showEmployee ? (
        <>

        <input type="text" 
        onChange={(e) => {
          setRole(e.target.value)
        }} />
          <Employee 
          name="Caleb" 
          
          role="Intern" />
          <Employee 
          name="john"
          role = {role}
           />
          <Employee 
           name="Abby"
           role="Intern" />
          
        </>
      ) : (
        <p>You cannot seee the Employee</p>
      )}
    </div>
  );
}

export default App;
