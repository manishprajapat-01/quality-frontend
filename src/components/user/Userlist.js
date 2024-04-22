import React, { useEffect, useState } from 'react'
import Header from '../Header'

import Swal from 'sweetalert2';
import { toast, Bounce } from 'react-toastify';

import UserDataTable from '../Table/UserDataTable';
import { Link } from 'react-router-dom';
import BASE_URL from "../../config/baseurl";

function Userlist() {
  let [tableData, setTableData] = useState([]);

  useEffect(() => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/user/all_data`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        }
      });
      const result = await res.json(); 
      setTableData([...result?.data])
    };
    apiCall();
  }, []);
  const handleStatus = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/user/userstatus/${id}`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        }
      });
      const result = await res.json();

      if (result.status) {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return
      }
      toast.success(result.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTableData([...result?.data])
    };
    apiCall();
  };


  const handleDelete = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/user/deleteuser/${id}`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        }
      });
      const result = await res.json();
      if (result.status) {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return true
      } else {
        let deletedUser = result?.data
        setTableData(tableData.filter((arr) => arr?._id !== deletedUser?._id))
      }
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        apiCall().then((res) => {
          if (res) {
            return
          } else {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
          }
        })
      }
    });
  }

  const data = tableData;
  const columns = [
    { Header: 'firstName', accessor: 'firstName' },
    { Header: 'GENDER', accessor: 'gender' },
    { Header: 'DOB', accessor: 'dob' },
    { Header: 'email', accessor: 'email' },
    { Header: 'PHONE NUMBER', accessor: 'phone' },
    { Header: 'PIN', accessor: 'pin' },
  ];



  return (
    <>
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <div className="page-header">
            <div className="page-block">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="">User Management</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      User List
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className='mb-3'>User List</h2>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header mb-3">
                      <h5 className='d-flex justify-content-between align-items-center'> <span>User List</span>
                        <Link to='/add-user' className='btn btn-primary'>Add User</Link>
                      </h5>
                    </div>
                    <div>
                      <UserDataTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlist

