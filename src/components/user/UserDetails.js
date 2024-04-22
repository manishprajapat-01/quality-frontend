import React, { useEffect, useState } from 'react'
import Header from '../Header'

import { useParams } from "react-router";
import BASE_URL from "../../config/baseurl";
import { Link } from 'react-router-dom';
export default function AddDetails() {
  let { id } = useParams();
  let [formval, setFormval] = useState({ profileImg: '', firstName: '', lastName: '', dob: '', email: '', phone: '', gender: '', city: '', pin: '', status: '' })

  useEffect(() => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/user/user_data/${id}`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        }
      });
      const result = await res.json();
      setFormval({ ...result.data });
    };
    apiCall()
  }, []);

  return (
    <>
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          {/* [ breadcrumb ] start */}
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
                      User details
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">User details</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* [ form-element ] start */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5>All details</h5>
                </div>
                <div className="card-body">
                  <form >
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='firstName'
                            disabled
                            defaultValue={formval.firstName}
                          />
                          <label htmlFor="">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='lastName'
                            defaultValue={formval.lastName}
                            disabled
                          />
                          <label htmlFor="">Last Name</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="text"
                            className="form-control"
                            id="example-datemax"
                            max=""
                            placeholder=""
                            name='dob'
                            defaultValue={formval.dob.split("T")[0]}
                            disabled
                          />
                          <label htmlFor="">DOB</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="email"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='email'
                            disabled
                            defaultValue={formval.email}
                          />
                          <label htmlFor="">Email Address</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="number"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='phone'
                            disabled
                            defaultValue={formval.phone}
                          />
                          <label htmlFor="">Phone Number</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" disabled value={formval.gender} name='gender' id="">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                          <label htmlFor="">Gender</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" disabled value={formval.city} name='city' id="">
                            <option>Jaipur</option>
                            <option>Ajmer</option>
                            <option>Udaipur</option>
                          </select>
                          <label htmlFor="">City</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="number"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='pin'
                            disabled
                            defaultValue={formval.pin}
                          />
                          <label htmlFor="">Pin Number</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" disabled value={formval.status} name='status' id="">
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </select>
                          <label htmlFor="">Status</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-0 input-group-lg">
                          <input
                            type="file"
                            className="form-control "
                            id=""
                            placeholder=""
                            name="profileImg"
                            disabled
                          />
                          {<img src={`${BASE_URL}/${formval?.profileImg}`} alt="Preview" className="img-50 " />}
                          {/* {<img src={`${image && true ? image:`${formval?.profileImg}`}`} alt="Preview Image" className="img-100" />} */}
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        {/* <button className="btn btn-primary" disabled>
                    Add User
                  </button> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* [ form-element ] end */}
          </div>
          {/* [ breadcrumb ] end */}
          {/* [ Main Content ] start */}
          {/* [ Main Content ] end */}
        </div>
      </div>

    </>
  )
}
