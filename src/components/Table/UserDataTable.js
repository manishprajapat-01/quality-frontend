import React from 'react'
import { Link } from 'react-router-dom'
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import Filterform from './Filterform';
import avtar from '../../assets/images/user/avatar-1.jpg'
import BASE_URL from "../../config/baseurl";
import RandomImage from './RandomImg';
function UserDataTable({ columns, data, handleStatus, handleDelete }) {



  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow,
    nextPage, previousPage, canPreviousPage, canNextPage, state: { pageIndex,pageSize }, pageCount, gotoPage, state, setGlobalFilter } = useTable({ columns, data }, useGlobalFilter, usePagination);
  const { globalFilter } = state
  return (
    <>
      <Filterform filter={globalFilter} setFilter={setGlobalFilter} />
      <div className='table-responsive'>
        <table {...getTableProps()} className='table table-bordered'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                <th>S no.</th>
                <th>Images</th>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                <th>Status</th>
                <th>action</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} >
                  <td >{row.index + 1}</td>
                  <td> <img src={(row.cells[0].row.original?.profileImg) ? `${BASE_URL}/${row.cells[0].row.original?.profileImg}` : avtar} className='img-50' alt='' /></td>
                  {/* <RandomImage src={(row.cells[0].row.original?.profileImg) ? `${BASE_URL}/${row.cells[0].row.original?.profileImg}` : ''} alt='' /> */}
                  {row.cells.map(cell => (
                    <td key={cell.id} {...cell.getCellProps()}>{(cell.column.Header === "DOB") ? (cell.value.split("T")[0]) : cell.render('Cell')}</td>
                  ))}
                  <td>
                    {/* {row.cells[0].row.original.status === true ? (
                      <button className='btn btn-success' onClick={() => handleStatus(row.cells[0].row.original._id)}>Active</button>
                    ) : (
                      <button className='btn btn-danger' onClick={() => handleStatus(row.cells[0].row.original._id)}>Inactive</button>
                    )} */}
                    <div className="form-switch">
                      <input type="checkbox" onClick={() => handleStatus(row.cells[0].row.original._id)} className={`form-check-input ${row.cells[0].row.original.status ? "bg-primary" : "bg-danger"}`} defaultChecked={row.cells[0].row.original.status} />
                    </div>
                  </td>
                  <td>
                    <Link to={`/user-edit/${row.cells[0].row.original?._id}`} className='btn btn-primary btn-sm'>
                      <i className="fas fa-edit"></i>
                    </Link>
                    <Link to={`/user-details/${row.cells[0].row.original._id}`} className='btn btn-info btn-sm'>
                      <i className="fas fa-eye"></i>
                    </Link>
                    <Link to='' onClick={() => handleDelete(row.cells[0].row.original._id)} className='btn btn-danger btn-sm'>
                      <i className="fas fa-trash"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='mb-3'>
          
          Showing <span>{pageIndex * pageSize + 1 }</span> To  <span>{ Math.min((pageIndex + 1) * pageSize > data.length ? data.length:Math.min((pageIndex + 1) * pageSize))}</span> of {data.length}      
        </div>
        <div className='custom-pagination'>

          <ul className="pagination">
            <li disabled={pageIndex === 0} className="page-item"><Link className="page-link" onClick={() => previousPage()} >Previous</Link></li>
            <li className="page-item active" ><Link className="page-link" onClick={() => (gotoPage(pageIndex))} >{(pageIndex) + 1}</Link></li>
            {/* <li className="page-item "><Link className="page-link" href="#">{((pageIndex) + 2)}</Link></li> */}
            {/* <li className="page-item"><Link className="page-link" href="#" onClick={()=>(gotoPage((pageIndex)+3))}>{(pageIndex)+3}</Link></li> */}
            <li disabled={!canNextPage} className="page-item"><Link className="page-link" onClick={() => nextPage()} >Next</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default UserDataTable;