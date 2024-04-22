import React, { useState, useEffect } from 'react'
import Header from '../Header'
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';
import MyCkeditor from './MyCKeditor';
import BASE_URL from "../../config/baseurl";
export default function VideoCourseAdd() {
  const navigate = useNavigate();
  let [formval, setFormval] = useState({ title: '', videoCategory: "", images: [], details: '', price: '', offerPrice: '' });
  let [data, setData] = useState(null);
  const handelOnChange = (e) => {
    if (e.target.name == "images") {
      let arr = []
      for (let i of e.target.files) {
        arr.push(i)
      }
      setFormval((currVal) => ({ ...currVal, images: arr }));
    } else {
      setFormval((currVal) => ({ ...currVal, [e.target.name]: e.target.value }));
    }
  };


  useEffect(() => {
    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/videocoursecategory/allcourses`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
      });
      const result = await response.json();
      setData([...result.data])
    };
    apiCall();
  }, []);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (!formval.title || !formval.details || !formval.videoCategory || !formval.price || !formval.offerPrice) {
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
      return;
    };


    const postData = new FormData();
    formval.images.map((arr) => {
      postData.append('images', arr);
    });
    postData.append('title', formval.title);
    postData.append('videoCategory', formval.videoCategory);
    postData.append('details', formval.details);
    postData.append('price', formval.price);
    postData.append('offerPrice', formval.offerPrice);

    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/videocourse/add`, {
        method: "POST",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
        body: postData,
      });
      const result = await response.json();
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
      }
      navigate("/video-course-list");
    };
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
                      <Link to="">Video Course  Management
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Add VIdeo Course
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">Add VIdeo Course</h2>
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
                  <h5>Add Video Course</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handelOnSubmit} autoComplete="off" >
                    <div className="row g-4">
                      <div className="col-md-4">
                         <div className="mb-0 input-group-lg">
                          {/* <label for="" class="form-label">Profile Img</label> */}
                          <input
                            type="file"
                            className="form-control "
                            id=""
                            placeholder=""
                            name="images"
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
                            name='title'
                            onChange={handelOnChange}
                            value={formval.title}
                          />
                          <label htmlFor="">Video Title</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="number"
                            className="form-control"
                            id="example-datemax"
                            max=""
                            placeholder=""
                            name='price'
                            onChange={handelOnChange}
                            value={formval.price}
                          />
                          <label htmlFor="">Price</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <input
                            type="number"
                            className="form-control"
                            id=""
                            placeholder=""
                            name='offerPrice'
                            onChange={handelOnChange}
                            value={formval.offerPrice}
                          />
                          <label htmlFor="">Offer Price</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" name='videoCategory' onChange={handelOnChange} id="">
                            <option defaultValue="">Select Category</option>
                            {
                              data?.map((arr) => (
                                <option key={arr?._id} value={arr?._id} > {arr?.category}</option>
                              ))
                            }
                          </select>
                          <label htmlFor="">Video Category</label>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <MyCkeditor data={formval?.details} seteditor={setFormval} />
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
