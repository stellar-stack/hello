import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Youtube Sensation",
      img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?",
    },
    {
      id: 2,
      name: "Shaziya",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/25756/pexels-photo.jpg?",
    },
    {
      id: 3,
      name: "Abby",
      role: "Manager",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?",
    },
    {
      id: 4,
      name: "Someone",
      role: "Web-Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?",
    },
    {
      id: 5,
      name: "John",
      role: "HardWare Engineer",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?",
    },
    {
      id: 6,
      name: "Nancy",
      role: "Developer",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?",
    },
    {
      id: 7,
      name: "Elliot",
      role: "Developer",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?",
    },
    {
      id: 8,
      name: "Nile",
      role: "Developer",
      img: "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?",
    },
    {
      id: 9,
      name: "Beauty",
      role: "Developer",
      img: "https://images.pexels.com/photos/2083751/pexels-photo-2083751.jpeg?",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  }


  function NewEmployee(name, role, img) {

   const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployee = true;

  return (
    <div className="App">
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
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>

          <AddEmployee newEmployee = {NewEmployee}/>

        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>

    
  );
}

export default App;
