import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb", 
      role: "Youtube Sensation",
      img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?",
    },
    {
      name: "Shaziya",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/25756/pexels-photo.jpg?",
    },
    {
      name: "Abby",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?",
    },
    {
      name: "Someone",
      role: "Web-Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?",
    },
    {
      name: "John",
      role: "HardWare Engineer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?",
    },
    {
      name: "Nancy",
      role: "Developer",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?",
    },
    {
      name: "Elliot",
      role: "Developer",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?",
    },
    {
      name: "Nile",
      role: "Developer",
      img: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?",
    },
    {
      name: "Beauty",
      role: "Developer",
      img: "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?",
    },
  ]);
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

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
