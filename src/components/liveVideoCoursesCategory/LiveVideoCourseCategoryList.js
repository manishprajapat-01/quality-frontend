import React, { useEffect, useState } from 'react'
import Header from '../Header'
import defaultimg from '../../assets/images/default.jpg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import BASE_URL from "../../config/baseurl";
function LiveVideoCourseCategorylist() {
  let [tableData, setTableData] = useState([]);
  let [num, setnum] = useState(1);

  useEffect(() => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocoursescategory/allcourses`, {
        method: "GET",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
      });
      const result = await res.json();
      setTableData([...result.data])
    };
    apiCall();
    ;
  }, []);


  const handleDelete = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocoursescategory/delete/${id}`, {
        method: "POST",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
      });
      const result = await res.json();
      let deletedUser = result.data
      setTableData(tableData.filter((arr) => arr._id != deletedUser._id))
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
        apiCall();
        Swal.fire({
          title: "Deleted!",
          text: "video course category has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleStatus = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocoursescategory/active/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": (localStorage.getItem("token"))
        },
      });
      const result = await res.json();
      setTableData((currtable) => {
        currtable.map((arr) => {
          if (arr._id === result.data._id) {
            arr.isActive = (result.data.isActive)
          }
        });
        return [...currtable]
      })
    };
    apiCall();
  };

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
                      <Link href="">Live Video Course Category Management</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Live Video Course  Category List
                    </li>
                  </ul>
                </div>

                <div className='card'>
                  <div className="card-header mb-3 border-0">
                    <h5 className='d-flex justify-content-between align-items-center'> <span>Live Video Course Category List</span>
                      <Link to='/live-video-course-category-add' className='btn btn-primary'>Live Video course Category Add</Link>
                    </h5>
                  </div>
                  <div className='table-responsive'>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>CategoryPhoto</th>
                          <th>Category</th>
                          <th>categorySequence</th>

                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          tableData.map((arr) => {
                            return (
                              <tr key={arr._id}>
                                <td>
                                  {num++}
                                </td>
                                <td> <img src={(arr?.categoryPhoto) ? `${BASE_URL}/${arr?.categoryPhoto}` : defaultimg} className='img-50' alt='' /></td>
                                <td>{arr?.category}</td>
                                {/* <td> 
                                      <video width={50} height={50} controls="">
                                      <source src={dummy} type="video/mp4" />
                                      </video>
                                    </td> */}
                                <td>{arr.categorySequence}</td>
                                <td>
                                  <div className="form-switch">
                                    <input type="checkbox" onClick={() => handleStatus(arr?._id)} className={`form-check-input ${arr.isActive ? "bg-primary" : "bg-danger"}`} defaultChecked={arr.isActive} />
                                  </div>
                                </td>
                                <td>
                                  <Link to={`/live-video-course-category-edit/${arr._id}`} className='btn btn-primary btn-sm'>
                                    <i className="fas fa-edit"></i>
                                  </Link>
                                  {/* <Link to={`/video-course-category-edit/${arr._id}`} className='btn btn-info btn-sm'>
                                    <i className="fas fa-eye"></i>
                                  </Link> */}
                                  {/* <Link to='#' onClick={() => handleDelete(arr?._id)} className='btn btn-danger btn-sm'>
                                    <i className="fas fa-trash"></i>
                                  </Link> */}
                                </td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                    </table>
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

export default LiveVideoCourseCategorylist;