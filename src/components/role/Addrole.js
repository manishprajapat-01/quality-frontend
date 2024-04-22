import React, { useEffect, useState } from 'react'
import Header from '../Header'
import BASE_URL from "../../config/baseurl";
import { Link } from 'react-router-dom';
function Addrole() {
    let [formval, setFormval] = useState({})
    let [role, setrole] = useState("")
    let [data, setData] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            let response = await fetch(`${BASE_URL}/api/permission/alldata`, {
                method: "GET",
                headers: {
                    "Authorization": (localStorage.getItem("token"))
                }
            });
            const result = await response.json();
            setData([...result.data])
        };
        apiCall();
    }, []);

    const handelOnChange = (e) => {
        if (!e.target.checked) {
            delete formval[e.target.name];
            setFormval((currVal) => ({ ...currVal }));
            return
        }
        setFormval((currVal) => ({ ...currVal, [e.target.name]: e.target.checked }));
    };


    const handelOnSubmit = async (e) => {
        e.preventDefault();
        if (!role) {
            return;
        }
        if (Object.keys(formval).length === 0) {
            return;
        }

        //api call for role
        const addroleApi = async () => {
            let response = await fetch(`${BASE_URL}/api/role/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: (localStorage.getItem("token"))
                },
                body: JSON.stringify({ "role": role })
            });
            const result = await response.json();
            return (result?.data?._id);
        };
        let roleId = await addroleApi();

        //save permission in role permission 
        const addrolePrmission = async () => {
            if (!roleId) {
                return;
            }
            let response = await fetch(`${BASE_URL}/api/rolepermission/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: (localStorage.getItem("token"))
                },
                body: JSON.stringify({ formval, "roleId": roleId })
            });
            await response.json();
        };
        addrolePrmission();
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
                                            <Link to="">User Management</Link>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Add Role
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h2 className="mb-0">Add Role </h2>
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
                                    <h5>Add Role</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handelOnSubmit}>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <label className='form-label'>Name</label>
                                                <input type='text' className='form-control' onChange={(e) => setrole(e.target.value)} value={role} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div name="userval" className='col-lg-4' >
                                                <div className="card-header border-0 ps-0">
                                                    <h5>user Mangement</h5>
                                                </div>
                                                {data.map((arr) => {
                                                    return (arr?.category?.category === "user Mangement") ?
                                                        (
                                                            <div key={arr?._id} className="form-check mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name={arr?._id}
                                                                    id={arr?.permission}
                                                                    onChange={handelOnChange} />
                                                                <label className="form-check-label" htmlFor={arr?.permission}>
                                                                    {arr?.permission}
                                                                </label>
                                                            </div>
                                                        )
                                                        : null
                                                })}
                                            </div>
                                            <div name="userval" className='col-lg-4' >
                                                <div className="card-header border-0 ps-0">
                                                    <h5>video Mangement</h5>
                                                </div>
                                                {data.map((arr) => {
                                                    return (arr?.category?.category === "video Mangement") ?
                                                        (
                                                            <div key={arr?._id} className="form-check mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name={arr?._id}
                                                                    id={arr?.permission}
                                                                    onChange={handelOnChange} />
                                                                <label className="form-check-label" htmlFor={arr?.permission}>
                                                                    {arr?.permission}
                                                                </label>
                                                            </div>
                                                        )
                                                        : null
                                                })}
                                            </div>
                                            <div name="userval" className='col-lg-4' >
                                                <div className="card-header border-0 ps-0">
                                                    <h5>live video Mangement</h5>
                                                </div>
                                                {data.map((arr) => {
                                                    return (arr?.category?.category === "live video Mangement") ?
                                                        (
                                                            <div key={arr?._id} className="form-check mb-3">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name={arr?._id}
                                                                    id={arr?.permission}
                                                                    onChange={handelOnChange} />
                                                                <label className="form-check-label" htmlFor={arr?.permission}>
                                                                    {arr?.permission}
                                                                </label>
                                                            </div>
                                                        )
                                                        : null
                                                })}
                                            </div>
                                            {/* <div className="col-md-12 text-center">
                                                <button className=" mt-3 btn btn-primary" >
                                                    Add Role
                                                </button>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addrole
