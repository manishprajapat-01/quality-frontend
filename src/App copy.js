// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes  , Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/assets/fonts/inter/inter.css'
import '../src/assets/fonts/feather.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/fonts/tabler-icons.min.css'
import '../src/assets/fonts/fontawesome.css'

import 'font-awesome/css/font-awesome.min.css';
import '../src/assets/fonts/material.css'
import '../src/assets/css/style.css'
import '../src/assets/css/style-preset.css';


import Home from './components/home';
import Userlist from './components/user/Userlist';
import AddUser from './components/user/AddUser';
import AddDetails from './components/user/UserDetails';
import Login from './components/Login';

// video courses
import Videocourselist from './components/Video/Videocourselist';
import VideoCourseAdd from './components/Video/VideoCourseAdd';
import VideoCourseDetails from './components/Video/VideoCourseDetail';
import VideoCourseEdit from './components/Video/VideoCourseEdit';
// import Table from './components/user/Table';
import NotFound from './components/NotFound';

// Live video course
import LiveVideocourselist from './components/liveVideoCourse/LiveVideocourselist';
import LiveVideoCourseAdd from './components/liveVideoCourse/LiveVideoCourseAdd';
import LiveVideoCourseDetail from './components/liveVideoCourse/LiveVideoCourseDetail';
import LiveVideoCourseEdit from './components/liveVideoCourse/LiveVideoCourseEdit';


// VideoCourseCategorylist
import VideoCourseCategorylist from './components/videoCoursesCategory/VideoCourseCategoryList';
import VideoCourseCategoryAdd from './components/videoCoursesCategory/VideoCourseCategoryAdd';
import VideoCourseCategoryEdit from './components/videoCoursesCategory/VideoCourseCategoryEdit';

// LiveVideoCourseCategorylist
import LiveVideoCourseCategorylist from './components/liveVideoCoursesCategory/LiveVideoCourseCategoryList';
import LiveVideoCourseCategoryAdd from './components/liveVideoCoursesCategory/LiveVideoCourseCategoryAdd';
import LiveVideoCourseCategoryEdit from './components/liveVideoCoursesCategory/LiveVideoCourseCategoryEdit';
import Addrole from './components/role/Addrole';





function App() {
  const token = localStorage.getItem("token");
  console.log(token);


  return (
    <>
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Userlist/>} /> */}
          <Route path="/" element={<Home />} />
          {
            token != null ?
              <>
                <Route path="/userlist" element={<Userlist />} />
                <Route path="/user-details/:id" element={<AddDetails />} />
                <Route path="/adduser" element={<AddUser />} />
                {/* video courses */}
                <Route path='/video-course-list' element={<Videocourselist />} />
                <Route path='/video-course-add' element={<VideoCourseAdd />} />
                <Route path='/video-course-details/:id' element={<VideoCourseDetails />} />
                <Route path='/video-course-edit/:id' element={<VideoCourseEdit />} />

                {/* VideoCourseCategorylist */}
                <Route path='/video-course-category-list' element={<VideoCourseCategorylist />} />
                <Route path='/video-course-category-add' element={<VideoCourseCategoryAdd />} />
                <Route path='/video-course-category-edit/:id' element={<VideoCourseCategoryEdit />} />


                {/* live video course list */}
                <Route path='/live-video-course-list' element={<LiveVideocourselist />} />
                <Route path='/live-video-course-add' element={<LiveVideoCourseAdd />} />
                <Route path='/live-video-course-details/:id' element={<LiveVideoCourseDetail />} />
                <Route path='/live-video-course-edit/:id' element={<LiveVideoCourseEdit />} />

                {/* LiveVideoCourseCategorylist */}
                <Route path='/live-video-course-category-list' element={<LiveVideoCourseCategorylist />} />
                <Route path='/live-video-course-category-add' element={<LiveVideoCourseCategoryAdd />} />
                <Route path='/live-video-course-category-edit/:id' element={<LiveVideoCourseCategoryEdit />} />
                <Route path='/add-role' element={<Addrole />} />
              </> :
              <Route path="/login" element={<Login />} />

          }

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
// {
//     arr?.permission.map((i) => (
//         <div className="form-check mb-3">
//             <input
//                 className="form-check-input"
//                 type="checkbox"
//                 name={arr?.category?.category}
//                 id={i}
//                 onChange={handelOnChange}
//                 // checked={formval.userMangement.value}
//                 value={i}
//             />
//             <label className="form-check-label" htmlFor={i}>
//                 {i}
//             </label>
//         </div>
//     ))
// }

// let [formval, setFormval] = useState([{
//     userMangement: [
//         { name: "add user", checked: false },
//         { name: "edit user", checked: false },
//         { name: "delete user", checked: false },
//         { name: "active user", checked: false },
//         { name: "read all user", checked: false },
//     ],
// },
// {
//     videoMangement: [
//         { name: "add video", checked: false },
//         { name: "edit video", checked: false },
//         { name: "delete video", checked: false },
//         { name: "active video", checked: false },
//         { name: "read all video", checked: false },
//     ]
// },
// {
//     livevideoMangement: [
//         { name: "live add video", checked: false },
//         { name: "live edit video", checked: false },
//         { name: "live delete video", checked: false },
//         { name: "live active video", checked: false },
//         { name: "live read all video", checked: false },
//     ]
// }
// ])