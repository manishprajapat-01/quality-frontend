import React from 'react'
import { Link } from 'react-router-dom'
import { useTable,usePagination } from 'react-table';

function DataTable({ columns, data,handleStatus,handleDelete }) {

    const { getTableProps, getTableBodyProps,headerGroups,page,prepareRow,
    nextPage,previousPage,canPreviousPage,canNextPage,state:{pageIndex},pageCount,gotoPage} = useTable({ columns, data ,initialState: { pageSize: 10 }},usePagination);
  
    return (
      <div className='table-responsive'>
        <table {...getTableProps()} className='table table-bordered'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Status</th>
              <th>action</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                 <>
                 <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  {/* <td> actoin</td> */}
                 </> 
                ))}
                <td>
                    {row.cells[0].row.original.status === true ? (
                      <button className='btn btn-success'onClick={()=>handleStatus(row.cells[0].row.original._id)}>Active</button>
                    ) : (
                      <button className='btn btn-danger' onClick={()=>handleStatus(row.cells[0].row.original._id)}>Inactive</button>
                    )}
                </td>
                 <td>
                  {/* <button >{console.log(row.cells[0].row.original._id)}</button> */}
                  <Link to={`/user-details/${row.cells[0].row.original._id}`} className='btn btn-info btn-sm'>
                    <i className="fas fa-eye"></i>
                    </Link>
                    <Link to='' onClick={()=>handleDelete(row.cells[0].row.original._id)} className='btn btn-danger btn-sm'>
                    <i className="fas fa-trash"></i>
                    </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='custom-pagination'>
        {/* <button disabled={!canPreviousPage} onClick={() => previousPage()}>Previous Page</button>
        <span>{pageIndex}of{pageCount}</span>
        <button disabled={!canNextPage} onClick={() => nextPage()}>Next Page</button> */}
        
  <ul className="pagination">
    <li disabled={pageIndex === 0} className="page-item"><Link className="page-link" onClick={() => previousPage()} href="#">Previous</Link></li>
    <li className="page-item active" ><Link className="page-link" onClick={()=>(gotoPage(pageIndex))} href="">{(pageIndex)+1}</Link></li>
    {/* <li className="page-item "><Link className="page-link" href="#">{(pageCount)}</Link></li> */}
    {/* <li className="page-item"><Link className="page-link" href="#" onClick={()=>(gotoPage((pageIndex)+3))}>{(pageIndex)+3}</Link></li> */}
    <li disabled={!canNextPage} className="page-item"><Link className="page-link" onClick={() => nextPage()} href="#">Next</Link></li>
  </ul>
 
      </div>
      </div>
    );
  }

export default DataTable;