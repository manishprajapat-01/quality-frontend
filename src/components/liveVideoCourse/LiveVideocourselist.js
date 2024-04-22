import React, { useEffect, useState } from 'react'
import Header from '../Header'
// import defaultimg from '../../assets/images/default.jpg'
// import dummy from '../../assets/images/dummy.mp4'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
// import { useNavigate } from "react-router-dom";
// import { toast, Bounce } from 'react-toastify';
import VideoTable from "../Table/VideoTable"
import BASE_URL from "../../config/baseurl";
function LiveVideocourselist() {
  let [tableData, setTableData] = useState([]);
  let [num, setnum] = useState(1)
  useEffect(() => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocourse/allcourses`, {
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
  }, [num]);

  const data = tableData;
  const columns = [
    { Header: 'firstName', accessor: 'title' },
    // { Header: 'Price ', accessor: 'price' },
    // { Header: 'offerPrice', accessor: 'offerPrice' },
  ];

  const handleDelete = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocourse/deletecourse/${id}`, {
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
          text: "Live Video Course has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleStatus = (id) => {
    let apiCall = async () => {
      let res = await fetch(`${BASE_URL}/api/livevideocourse/activevideo/${id}`, {
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
                      <Link to="">Live Video Course Management </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Live Video Course List
                    </li>
                  </ul>
                </div>

                <div className='card'>
                  <div className="card-header mb-3 border-0">
                    <h5 className='d-flex justify-content-between align-items-center'> <span>Live Video Course  List</span>
                      <Link to='/live-video-course-add' className='btn btn-primary'>Add Live Video Course </Link>
                    </h5>
                  </div>
                </div>
                <div>
                  {/* <DataTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete}/> */}
                  <VideoTable columns={columns} data={data} handleStatus={handleStatus} handleDelete={handleDelete} isLiveCourse={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LiveVideocourselist