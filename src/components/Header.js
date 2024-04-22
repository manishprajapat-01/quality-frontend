import React from 'react'
import whitelogo from '../assets/images/logo-white.svg'

import avtar from '../assets/images/user/avatar-1.jpg'
import avtar2 from '../assets/images/user/avatar-2.jpg'
import { Link } from 'react-router-dom'


function header() {
  let user = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <nav className="pc-sidebar">
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link to="/" className="b-brand text-primary">
              {/* ========   Change your logo from here   ============ */}
              <img
                src={whitelogo}
                className="img-fluid logo-lg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-content">
            <div className="card pc-user-card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img
                      src={avtar}
                      alt="user-image"
                      className="user-avtar wid-45 rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-3 me-2">
                    <h6 className="mb-0">{user?.firstName}</h6>
                    <small>Administrator</small>
                  </div>
                  <a
                    className="btn btn-icon btn-link-secondary avtar"
                    data-bs-toggle="collapse"
                    href="#pc_sidebar_userlink"
                  >
                    <span className='pc-icon'>
                      <i className="fas fa-bars"></i>
                    </span>
                  </a>
                </div>
                <div className="collapse pc-user-links" id="pc_sidebar_userlink">
                  <div className="pt-3">
                    <a href="#">
                      <i className="ti ti-user" />
                      <span>My Account</span>
                    </a>
                    <a href="#">
                      <i className="ti ti-settings" />
                      <span>Settings</span>
                    </a>
                    <a href="#">
                      <i className="ti ti-lock" />
                      <span>Lock Screen</span>
                    </a>
                    <Link to="/login" onClick={logout}>
                      <i className="ti ti-power" />
                      <span >Logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pc-navbar">
              <li className="pc-item pc-caption">
                <label>Dashboard</label>
              </li>
              <li className="pc-item">
                <Link to="/" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-th-large"></i>
                    </em>
                  </span>
                  <span className="pc-mtext">Dashboard</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/user-list" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-users"></i>
                    </em>
                  </span>
                  <span className="pc-mtext">User Management</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/video-course-list" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-video"></i>
                    </em>
                  </span>
                  <span className="pc-mtext">Video Management</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/video-course-category-list" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-video"></i>
                    </em>
                  </span>
                  <span className="pc-mtext">Video Course Category</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/live-video-course-list" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-video"></i>
                    </em>
                  </span>
                  <span className="pc-mtext">Live Video Course </span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/live-video-course-category-list" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-video"></i>
                    </em>
                  </span>
                  <span className="pc-mtext"> Live Video Course Category</span>
                </Link>
              </li>
              <li className="pc-item">
                <Link to="/add-role" className="pc-link">
                  <span className="pc-micon">
                    <em className='pc-icon'>
                      <i className="fas fa-user"></i>
                    </em>
                  </span>
                  <span className="pc-mtext"> New Role</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="pc-header">
        <div className="header-wrapper">
          {" "}
          {/* [Mobile Media Block] start */}
          <div className="me-auto pc-mob-drp">
            <ul className="list-unstyled">
              {/* ======= Menu collapse Icon ===== */}
              <li className="pc-h-item pc-sidebar-collapse">
                <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="pc-h-item pc-sidebar-popup">
                <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
            </ul>
          </div>
          {/* [Mobile Media Block end] */}
          <div className="ms-auto">
            <ul className="list-unstyled">
              <li className="dropdown pc-h-item">
                <a
                  className="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >

                  <span className='pc-icon'>
                    <i className="fas fa-bell"></i>
                  </span>
                  <span className="badge bg-success pc-h-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                  <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 className="m-0">Notifications</h5>
                    <a href="#" className="btn btn-link btn-sm">
                      Mark all read
                    </a>
                  </div>
                  <div
                    className="dropdown-body text-wrap header-notification-scroll position-relative"
                    style={{ maxHeight: "calc(100vh - 215px)" }}
                  >
                    <p className="text-span">Today</p>
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <svg className="pc-icon text-primary">
                              <use xlinkHref="#custom-document-text" />
                            </svg>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <span className="float-end text-sm text-muted">
                              2 hour ago
                            </span>
                            <h5 className="text-body mb-2">Forms</h5>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <svg className="pc-icon text-primary">
                              <use xlinkHref="#custom-user-bold" />
                            </svg>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <span className="float-end text-sm text-muted">
                              12 hour ago
                            </span>
                            <h5 className="text-body mb-2">Challenge invitation</h5>
                            <p className="mb-2">
                              <span className="text-dark">Jonny aber</span> invites to
                              join the challenge
                            </p>
                            <button className="btn btn-sm btn-outline-secondary me-2">
                              Decline
                            </button>
                            <button className="btn btn-sm btn-primary">Accept</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <svg className="pc-icon text-primary">
                              <use xlinkHref="#custom-security-safe" />
                            </svg>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <span className="float-end text-sm text-muted">
                              5 hour ago
                            </span>
                            <h5 className="text-body mb-2">Security</h5>
                            <p className="mb-0">
                              Lorem Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center py-2">
                    <a href="#" className="link-danger">
                      Clear all Notifications
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown pc-h-item header-user-profile">
                <a
                  className="pc-head-link dropdown-toggle arrow-none me-0"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <img
                    src={avtar2}
                    alt="user-image"
                    className="user-avtar"
                  />
                </a>
                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                  <div className="dropdown-header d-flex align-items-center justify-content-between">
                    <h5 className="m-0">Profile</h5>
                  </div>
                  <div className="dropdown-body">
                    <div
                      className="profile-notification-scroll position-relative"
                      style={{ maxHeight: "calc(100vh - 225px)" }}
                    >
                      <div className="d-flex mb-1">
                        <div className="flex-shrink-0">
                          <img
                            src={avtar2}
                            alt="user-image"
                            className="user-avtar wid-35"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">Carson Darrin 🖖</h6>
                          <span>carson.darrin@company.io</span>
                        </div>
                      </div>
                      <hr className="border-secondary border-opacity-50" />
                      <div className="card">
                        <div className="card-body py-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0 d-inline-flex align-items-center">
                              <svg className="pc-icon text-muted me-2">
                                <use xlinkHref="#custom-notification-outline" />
                              </svg>
                              Notification
                            </h5>
                            <div className="form-check form-switch form-check-reverse m-0">
                              <input
                                className="form-check-input f-18"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-span">Manage</p>
                      <a href="#" className="dropdown-item">
                        <span>
                          <svg className="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-setting-outline" />
                          </svg>
                          <span>Settings</span>
                        </span>
                      </a>
                      <a href="#" className="dropdown-item">
                        <span>
                          <svg className="pc-icon text-muted me-2">
                            <use xlinkHref="#custom-lock-outline" />
                          </svg>
                          <span>Change Password</span>
                        </span>
                      </a>
                      <hr />
                      <div className="d-grid mb-3">
                        <Link to="/login" onClick={logout} className="btn btn-primary">
                          <svg className="pc-icon me-2">
                            <use xlinkHref="#custom-logout-1-outline" />
                          </svg>
                          Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default header