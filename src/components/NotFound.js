import React from 'react'
import { Link } from 'react-router-dom'
import Img404 from '../assets/images/pages/img-error-404.svg'
export default function NotFound() {
  return (
    <>
      <div className="maintenance-block">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card error-card">
                <div className="card-body">
                  <div className="error-image-block">
                    <img className="img-fluid" src={Img404} alt="img" />
                  </div>
                  <div className="text-center">
                    <h1 className="mt-5"><b>Page Not Found</b></h1>
                    <p className="mt-2 mb-4 text-muted">The page you are looking was moved, removed,<br />  renamed, or might never exist!</p>
                    <Link to="/"> <button type="button" className="btn btn-primary mb-3">Go to home</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pct-c-btn">
        <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_pc_layout">
          <i className="ph-duotone ph-gear-six"></i>
        </a>
      </div>
      <div className="offcanvas border-0 pct-offcanvas offcanvas-end" tabindex="-1" id="offcanvas_pc_layout">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Settings</h5>
          <button type="button" className="btn btn-icon btn-link-danger" data-bs-dismiss="offcanvas" aria-label="Close"><i
            className="ti ti-x"></i></button>
        </div>
        <div className="pct-body customizer-body">
          <div className="offcanvas-body py-0">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="pc-dark">
                  <h6 className="mb-1">Theme Mode</h6>
                  <p className="text-muted text-sm">Choose light or dark mode or Auto</p>
                  <div className="row theme-color theme-layout">
                    <div className="col-4">
                      <div className="d-grid">
                        <button className="preset-btn btn active" data-value="true" data-bs-toggle="tooltip" title="Light">
                          <svg className="pc-icon text-warning">
                            {/* <use xlink:href="#custom-sun-1"></use> */}
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-grid">
                        <button className="preset-btn btn" data-value="false" data-bs-toggle="tooltip" title="Dark">
                          <svg className="pc-icon">
                            {/* <use xlink:href="#custom-moon"></use> */}
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="d-grid">
                        <button className="preset-btn btn" data-value="default"
                          data-bs-toggle="tooltip" title="Automatically sets the theme based on user's operating system's color scheme.">
                          <span className="pc-lay-icon d-flex align-items-center justify-content-center">
                            <i className="ph-duotone ph-cpu"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <h6 className="mb-1">Theme Contrast</h6>
                <p className="text-muted text-sm">Choose theme contrast</p>
                <div className="row theme-contrast">
                  <div className="col-6">
                    <div className="d-grid">
                      <button className="preset-btn btn" data-value="true" data-bs-toggle="tooltip" title="True">
                        <svg className="pc-icon">
                          {/* <use xlink:href="#custom-mask"></use> */}
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid">
                      <button className="preset-btn btn active" data-value="false" data-bs-toggle="tooltip" title="False">
                        <svg className="pc-icon">
                          {/* <use xlink:href="#custom-mask-1-outline"></use> */}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <h6 className="mb-1">Custom Theme</h6>
                <p className="text-muted text-sm">Choose your primary theme color</p>
                <div className="theme-color preset-color">
                  <a href="#!" data-bs-toggle="tooltip" title="Blue" className="active" data-value="preset-1"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Indigo" data-value="preset-2"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Purple" data-value="preset-3"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Pink" data-value="preset-4"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Red" data-value="preset-5"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Orange" data-value="preset-6"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Yellow" data-value="preset-7"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Green" data-value="preset-8"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Teal" data-value="preset-9"><i className="ti ti-checks"></i></a>
                  <a href="#!" data-bs-toggle="tooltip" title="Cyan" data-value="preset-10"><i className="ti ti-checks"></i></a>
                </div>
              </li>
              <li className="list-group-item">
                <h6 className="mb-1">Sidebar Caption</h6>
                <p className="text-muted text-sm">Sidebar Caption Hide/Show</p>
                <div className="row theme-color theme-nav-caption">
                  <div className="col-6">
                    <div className="d-grid">
                      <button className="preset-btn btn-img btn active" data-value="true" data-bs-toggle="tooltip" title="Caption Show">
                        <img src="../assets/images/customizer/caption-on.svg" alt="img" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid">
                      <button className="preset-btn btn-img btn" data-value="false" data-bs-toggle="tooltip" title="Caption Hide">
                        <img src="../assets/images/customizer/caption-off.svg" alt="img" className="img-fluid" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="pc-rtl">
                  <h6 className="mb-1">Theme Layout</h6>
                  <p className="text-muted text-sm">LTR/RTL</p>
                  <div className="row theme-color theme-direction">
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="preset-btn btn-img btn active" data-value="false" data-bs-toggle="tooltip" title="LTR">
                          <img src="../assets/images/customizer/ltr.svg" alt="img" className="img-fluid" />
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="preset-btn btn-img btn" data-value="true" data-bs-toggle="tooltip" title="RTL">
                          <img src="../assets/images/customizer/rtl.svg" alt="img" className="img-fluid" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item pc-box-width">
                <div className="pc-container-width">
                  <h6 className="mb-1">Layout Width</h6>
                  <p className="text-muted text-sm">Choose Full or Container Layout</p>
                  <div className="row theme-color theme-container">
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="preset-btn btn-img btn active" data-value="false" data-bs-toggle="tooltip" title="Full Width">
                          <img src="../assets/images/customizer/full.svg" alt="img" className="img-fluid" />
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-grid">
                        <button className="preset-btn btn-img btn" data-value="true" data-bs-toggle="tooltip" title="Fixed Width">
                          <img src="../assets/images/customizer/fixed.svg" alt="img" className="img-fluid" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-grid">
                  <button className="btn btn-light-danger" id="layoutreset">Reset Layout</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  )
}
