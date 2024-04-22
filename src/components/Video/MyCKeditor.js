import React from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function MyCkeditor({data,seteditor,disabled=false}) { 



  return (
    <>
    <div className='App'>
    <label htmlFor="">Video Details</label>

      <CKEditor disabled={disabled} 
        editor={ ClassicEditor }
        data={data}

        onChange={ ( event, editor ) => {
          const data = editor.getData();
          seteditor((curval)=>{
            return {...curval,details:data}
          })
 
        } }
      />
    </div>
    </>
  )
}

export default MyCkeditor

