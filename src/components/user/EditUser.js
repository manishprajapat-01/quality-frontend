import React, { useState,useEffect } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import { Link, useNavigate} from "react-router-dom";
import BASE_URL from "../../config/baseurl";
import { toast, Bounce } from 'react-toastify';
export default function EditUser() {
  let [formval, setFormval] = useState({ profileImg: '', firstName: '', lastName: '', dob: '', email: '', phone: '', gender: '', city: '', pin: '', status: '' })
  let [img,setImg]=useState("")
  let navigator = useNavigate();
  let { id } = useParams();

  const handelOnChange = (e) => {
    if (e.target.name === "profileImg") {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFormval((currVal) => ({ ...currVal, profileImg: e.target.files[0] }));
    } else {
      setFormval((currVal) => ({ ...currVal, [e.target.name]: e.target.value }));
    }
  };

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
  },[]);


  const handelOnSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("profileImg", formval.profileImg);
    postData.append('firstName', formval.firstName);
    postData.append('lastName', formval.lastName);
    postData.append('dob', formval.dob);
    postData.append('email', formval.email);
    postData.append('phone', formval.phone);
    postData.append('gender', formval.gender);
    postData.append('city', formval.city);
    postData.append('pin', formval.pin);
    postData.append('status', formval.status);
    const apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/user/edit/${id}`, {
        method: "post",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
        body: postData
      });
      const result = await res.json();
      if (!result.status) {
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
        navigator("/user-list")
      }else{
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
      }
    }
    apiCall();
  }
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
                      <Link to="">User Management</Link >
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Edit User
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">Edit User</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5>Edit User</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handelOnSubmit} autoComplete="off">
                    <div className="row g-4">
                      <div className="col-md-4">
                        <div className="mb-0 input-group-lg">
                          <input
                            type="file"
                            className="form-control "
                            id=""
                            placeholder=""
                            name="profileImg"
                            onChange={handelOnChange}
                          />
                        </div>
                        <img src={`${img}`?`${img}`:`${BASE_URL}/${formval?.profileImg}`} alt="Preview Image" className='img-50' />

                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="text"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='firstName'
                            value={formval.firstName}
                            onChange={handelOnChange}
                          />
                          <label htmlFor="">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="text"
                            className="form-control"
                            value={formval.lastName}
                            name='lastName'
                            onChange={handelOnChange}
                          />
                          <label htmlFor="">Last Name</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="date"
                            className="form-control"
                            id="example-datemax"
                            max=""
                            placeholder=""
                            name='dob'
                            value={(formval.dob?.split("T")[0])}
                            onChange={handelOnChange}
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
                            value={formval.email}
                            onChange={handelOnChange}
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
                            value={formval.phone}
                            onChange={handelOnChange}
                          />
                          <label htmlFor="">Phone Number</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" name='gender' value={formval.gender} onChange={handelOnChange} id="">
                        
                            <option value={"Male"} >Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Other"} >Other</option>
                          </select>
                          <label htmlFor="">Gender</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" name='city' value={formval.city} onChange={handelOnChange} id="">
                            <option value={"Jaipur"}>Jaipur</option>
                            <option value={"Ajmer"}>Ajmer</option>
                            <option value={"Udaipur"}>Udaipur</option>
                            <option value={"kota"}>kota</option>
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
                            value={formval.pin}
                            onChange={handelOnChange}
                          />
                          <label htmlFor="">Pin Number</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" name='status' value={formval.status.toString()} onChange={handelOnChange} id="">
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                          </select>
                          <label htmlFor="">Status</label>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button className="btn btn-primary" >
                          Submit                       </button>
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
