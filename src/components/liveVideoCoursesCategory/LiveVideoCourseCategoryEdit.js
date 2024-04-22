import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { toast, Bounce } from 'react-toastify';
import BASE_URL from "../../config/baseurl";
export default function LiveVideoCourseCategoryEdit() {
  const navigate = useNavigate();
  let { id } = useParams();
  let [formval, setFormval] = useState({ category: '', categoryPhoto: "", categorySequence: '' })
  let [img,setImg]=useState("")

  const handelOnChange = (e) => {
    if (e.target.name == "categoryPhoto") {
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFormval((currVal) => ({ ...currVal, categoryPhoto: e.target.files[0] }));
    } else {
      setFormval((currVal) => ({ ...currVal, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/livevideocoursescategory/details/${id}`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
      });
      const result = await response.json();
      setFormval({ ...result.data })
    };

    apiCall();
  }, []);

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('categoryPhoto', formval.categoryPhoto);
    postData.append('category', formval.category);
    postData.append('categorySequence', formval.categorySequence);

    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/liveVideoCoursesCategory/edit/${id}`, {
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
        navigate("/live-video-course-category-list");

      };
    };
    apiCall();
  };

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
                      <Link to="">
                        Live Video Course Category Management
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Live Video Course Category Edit
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">Live Video Course Category Details</h2>
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
                  <h5>Live Video Course Category Edit </h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handelOnSubmit} autoComplete='off'>
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
                          />
                        </div>
                        <img src={`${img}`?`${img}`:`${BASE_URL}/${formval?.categoryPhoto}`} alt="Preview Image" className='img-50' />
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
                          <label htmlFor="">Video category</label>
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
                            name='categorySequence'
                            onChange={handelOnChange}
                            value={formval.categorySequence}
                          />
                          <label htmlFor="">categorySequence</label>
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
