import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("We are about to list Employee!");
  const showEmployee = true;
  return (
    
    
    <div className="App">
      {console.log('Inside the Employee')}
      {showEmployee ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot seee the Employee</p>
      )}
    </div>
  );
}

export default App;
