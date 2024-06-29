/* eslint-disable no-unused-vars */
import React, {useEffect ,useState} from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();
  
  useEffect(() => {
    getAllEmployees();
  }, [])

  function getAllEmployees() {
    listEmployees()
    .then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }
  
  function addNewEmployee () {
    navigator('/add-employee')
  }


  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }


  function removeEmployee(id) {
    console.log(id)

    deleteEmployee(id).then((response) => {
      getAllEmployees();
    }).catch(error => {
      console.log(error);
    })
  }
    return (
    <div className="container">
      <h2 className="text-center">Kadrların Siyahısı</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Yeni Kadr Əlavə Et</button>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Elektron Poçt</th>
            <th>Əməliyyatlar</th>
          </tr>
        </thead>
        <tbody>
            {
              employees.map(employee => 
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className="btn btn-secondary me-2" onClick={() => updateEmployee(employee.id)}>Düzəlt</button>
                  <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)}>Sil</button>
                </td>
              </tr>)
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent