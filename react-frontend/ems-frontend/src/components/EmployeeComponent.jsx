  /* eslint-disable no-unused-vars */
  import React, {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

  const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const {id} = useParams();


    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
      if(id) {
        getEmployee(id).then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        }).catch(error => {
          console.log(error)
        })
      }
    }, [id]);

    function saveOrUpdateEmployee(e) {
      e.preventDefault();

      if (validateForm()) {

        const employee = {firstName, lastName, email};
        console.log(employee);

        if(id) {
          updateEmployee(id, employee).then((response) => {
            console.log(response.data);
            navigator('/employees');
          }).catch(error => {
              console.log(error);
            })
          } else {
            createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
          }).catch(error => {
            console.log(error);
          })
        }
      }
    }

    function validateForm() {
      let valid = true;

      const errorsCopy = {...errors}

      if (firstName.trim()) {
        errorsCopy.firstName = '';
      } else {
        errorsCopy.firstName = 'Ad sahəsi boş ola bilməz';
        valid = false;
      }

      if (lastName.trim()) {
        errorsCopy.lastName = '';
      } else {
        errorsCopy.lastName = 'Soyad sahəsi boş ola bilməz';
        valid = false;
      }

      if (email.trim()) {
        errorsCopy.email = '';
      } else {
        errorsCopy.email = 'Elektron poçt sahəsi boş ola bilməz';
        valid = false;
      }

      setErrors(errorsCopy);
      return valid;
    }

    function pageTitle() {
      if(id) {
        return <h2 className='text-center'>Kadr Məlumatlarını Düzəlt</h2>
      } else {
        return <h2 className='text-center'>Kadr Əlavə Et</h2>
      }
    }

    return (
      <div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>

            {
              pageTitle()
            }

              <div className='card-body'>
                <form onSubmit={saveOrUpdateEmployee}>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Ad:</label>
                    <input 
                    type='text'
                    placeholder='Kadrın adını daxil edin'
                    name='firstName'
                    value={firstName}
                    className={`form-control ${errors.firstName? 'is-invalid': ''}`}
                    onChange={(e) => setFirstName(e.target.value)}
                    >
                    </input>

                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Soyad:</label>
                    <input 
                    type="text"
                    placeholder='Kadrın soyadını daxil edin'
                    name='lastName'
                    value={lastName}
                    className= {`form-control ${errors.lastName? 'is-invalid': ''}`}
                    onChange={(e) => setLastName(e.target.value)}
                    >
                    </input>

                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                  </div>

                  <div className='form-group mb-2'>
                    <label className='form-label'>Elektron poçt:</label>
                    <input 
                    type='text'
                    placeholder='Kadrın elektron poçtunu daxil edin'
                    name="email"
                    value={email}
                    className= {`form-control ${errors.email? 'is-invalid' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                    
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                  </div>

                  <button className='btn btn-success' type='submit'>Əlavə et</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default EmployeeComponent