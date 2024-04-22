import React, { useState } from 'react'
import Header from '../Header'
import {Link, useNavigate} from "react-router-dom";
import {toast ,Bounce} from 'react-toastify';
// import { Link } from 'react-router-dom';
// import {toast,Bounce} from "react-toastify"
import BASE_URL from "../../config/baseurl";
export default function VideoCourseCategoryAdd () {
  const navigate = useNavigate();
 let [formval,setFormval]=useState({category:'',categoryPhoto:"",categorySequence:''})
  const handelOnChange=(e)=>{
    if(e.target.name === "categoryPhoto"){
      setFormval((currVal)=>({...currVal,categoryPhoto: e.target.files[0]}));
    }else{
      setFormval((currVal)=>({...currVal,[e.target.name]:e.target.value}));
    }
  };


  const handelOnSubmit=(e)=>{
    e.preventDefault();
    if(!formval.category || !formval.categoryPhoto || !formval.categorySequence ){
      toast.error('all filds is required!', {
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
        return ;
    };
 
    
    const postData = new FormData();
		postData.append('categoryPhoto', formval.categoryPhoto);
		postData.append('category', formval.category);
		postData.append('categorySequence', formval.categorySequence);

    const apiCall =async ()=>{
      let response=await fetch(`${BASE_URL}/api/videocoursecategory/add`,{
        method: "POST",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
				body: postData,
      });
      const result=await response.json();
      if(!result.status){
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
          
        }
        navigate("/video-course-category-list");

    };
    apiCall();
  }
  return (
    <>
    <Header/>
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
                <Link to="">Video Course Category Management
                  </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Add Video Course Category 
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <div className="page-header-title">
              <h2 className="mb-0">Add VIdeo Course Category</h2>
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
            <h5>Add Video Course Category </h5>
          </div>
          <div className="card-body">
            <form onSubmit={handelOnSubmit} autoComplete="off">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="mb-0 input-group-lg">
                    {/* <label for="" class="form-label">Profile Img</label> */}
                    <input
                      type="file"
                      className="form-control "
                      id=""
                      placeholder=""
                      name="categoryPhoto"
                      onChange={handelOnChange}
                      // value={formval.avatar}
                      multiple
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='category'
                      onChange={handelOnChange}
                      value={formval.category}
                    />
                    <label htmlFor="">Video Category</label>
                  </div>
                </div>
                {/* <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      placeholder=""
                      name='details'
                      onChange={handelOnChange}
                      value={formval.details}
                    />
                    <label htmlFor="">Video Details</label>
                  </div>
                </div> */}
                <div className="col-md-4">
                  <div className="form-floating mb-0">
                    <input
                      type="number"
                      className="form-control"
                      id="example-datemax"
                      max=""
                      placeholder=""
                      name='categorySequence'
                      onChange={handelOnChange}
                      value={formval.categorySequence}
                    />
                    <label htmlFor="">CategorySequence</label>
                  </div>
                </div>
               
                <div className="col-md-12 text-center">
                  <button className="btn btn-primary" >
                  Submit
                  </button>
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
