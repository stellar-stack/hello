import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployee = true;

  return (
    <div className="App ">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />

          <div className="flex flex-wrap ">
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Employee
              name="john"
              role={role}
              img="https://images.pexels.com/photos/25756/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            />

            <Employee
              name="Abby"
              role="Intern"
              img="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Employee
              name="john"
              role={role}
              img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <Employee
              name="Abby"
              role="Intern"
              img="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Employee
              name="Caleb"
              role="Intern"
              img="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Employee
              name="john"
              role={role}
              img="https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=600"
            />

            <Employee
              name="Abby"
              role="Intern"
              img="https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </>
      ) : (
        <p>You cannot seee the Employee</p>
      )}
    </div>
  );
}

export default App;
