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
import EditUser from './components/user/EditUser';
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
import Protected from './components/Protected';




function App() {
  // const token = localStorage.getItem("token");
  // console.log(token);


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Userlist/>} /> */}
          <Route path="/" element={<Protected Component={Home} />} />

          <Route path="/user-list" element={<Protected Component={Userlist} />} />
          <Route path="/user-details/:id" element={<Protected Component={AddDetails} />} />
          <Route path="/add-user" element={<Protected Component={AddUser} />} />
          <Route path="/user-edit/:id" element={<Protected Component={EditUser} />} />

          {/* video courses */}
          <Route path='/video-course-list' element={<Protected Component={Videocourselist} />} />
          <Route path='/video-course-add' element={<Protected Component={VideoCourseAdd} />} />
          <Route path='/video-course-details/:id' element={<Protected Component={VideoCourseDetails} />} />
          <Route path='/video-course-edit/:id' element={<Protected Component={VideoCourseEdit} />} />

          {/* VideoCourseCategorylist */}
          <Route path='/video-course-category-list' element={<Protected Component={VideoCourseCategorylist} />} />
          <Route path='/video-course-category-add' element={<Protected Component={VideoCourseCategoryAdd} />} />
          <Route path='/video-course-category-edit/:id' element={<Protected Component={VideoCourseCategoryEdit} />} />


          {/* live video course list */}
          <Route path='/live-video-course-list' element={<Protected Component={LiveVideocourselist} />} />
          <Route path='/live-video-course-add' element={<Protected Component={LiveVideoCourseAdd} />} />
          <Route path='/live-video-course-details/:id' element={<Protected Component={LiveVideoCourseDetail} />} />
          <Route path='/live-video-course-edit/:id' element={<Protected Component={LiveVideoCourseEdit} />} />

          {/* LiveVideoCourseCategorylist */}
          <Route path='/live-video-course-category-list' element={<Protected Component={LiveVideoCourseCategorylist} />} />
          <Route path='/live-video-course-category-add' element={<Protected Component={LiveVideoCourseCategoryAdd} />} />
          <Route path='/live-video-course-category-edit/:id' element={<Protected Component={LiveVideoCourseCategoryEdit} />} />
          <Route path='/add-role' element={<Addrole />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
