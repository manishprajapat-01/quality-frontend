import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { useParams } from "react-router";
import MyCkeditor from '../Video/MyCKeditor';
import BASE_URL from "../../config/baseurl";
import { Link } from 'react-router-dom';
export default function LiveVideoCourseDetail() {
  let { id } = useParams();
  let [formval, setFormval] = useState({ title: '', images: [], details: '', price: '', offerPrice: '' })
  let [data, setData] = useState(null);

  useEffect(() => {
    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/livevideocoursescategory/allcourses`, {
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

  useEffect(() => {
    const apiCall = async () => {
      let response = await fetch(`${BASE_URL}/api/livevideocourse/videoCoursDetails/${id}`, {
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
                      <Link to=''>Live Video Course Management
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Live Video Course  Details
                    </li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className="page-header-title">
                    <h2 className="mb-0">Live Video Course Details</h2>
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
                  <h5>Live Video Course Details</h5>
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
                            disabled
                            name='title'
                            defaultValue={formval.title}
                          />
                          <label htmlFor="">Live Video Title</label>
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
                            disabled
                            defaultValue={formval.price}
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
                            disabled
                            defaultValue={formval.offerPrice}
                          />
                          <label htmlFor="">Offer Price</label>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-0 input-group-lg">
                          {/* <label for="" class="form-label">Profile Img</label> */}
                          <input
                            type="file"
                            className="form-control "
                            id=""
                            placeholder=""
                            name="images"
                            disabled
                          />
                        </div>
                        <div className='image-box'>
                          {
                            formval?.images?.map((arr) => {
                              return (
                                <div key={arr._id} className='image-box-innr'>
                                  <img src={`${BASE_URL}/${arr?.image}`} alt="Preview Image" />
                                  <button type='button'><i className='fas fa-times'></i></button>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-floating mb-0">
                          <select className="form-select" name='videoCategory' disabled value={formval.videoCategory} id="">
                            <option >Select Category</option>
                            {
                              data?.map((arr) => (
                                <option key={arr?._id} value={arr?._id} >{arr?.category}</option>
                              ))
                            }
                          </select>
                          <label htmlFor="">Live Video Course Category</label>
                        </div>
                      </div>
                      <MyCkeditor disabled={true} data={formval.details} seteditor={setFormval} />
                      {/* <div className="col-md-12 text-center">
                        <button className="btn btn-primary" >
                          Add User
                        </button>
                      </div> */}
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
