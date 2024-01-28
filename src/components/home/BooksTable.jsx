import React from 'react';

import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

function BooksTable({books}) {
  return (
    
    <table className='w-full border-separate border-spacing-1'>

          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md '>Operations</th>
            </tr>
          </thead>

          <tbody>
            { books.map((book, index) => (

              <tr key={book._id}>
                <td className='border border-slate-700 rounded-700 text-center'>
                  {index+1}
                </td>
                <td className='border border-slate-700 rounded-700 text-center'>
                  {book.title}
                </td>
                <td className='border border-slate-700 rounded-700 text-center max-md:hidden'>
                  {book.author}
                </td>
                <td className='border border-slate-700 rounded-700 text-center max-md:hidden'>
                  {book.publishYear}
                </td>
                <td className='border border-slate-700 rounded-700 text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/book/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800' />
                    </Link>
                    <Link to={`/book/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/book/delete/${book._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600' />
                    </Link>
                  </div>
                </td>
              </tr>

            )) }
          </tbody>
        </table>

  )
}

export default BooksTable