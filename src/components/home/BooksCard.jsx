import React from 'react'

import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';

import { BiUserCircle } from 'react-icons/bi';

import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import SingleBookCard from './SingleBookCard';

function BooksCard({ books }) {

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

      {books.map((item) => (

        <SingleBookCard item={item} key={item._id} />

      ))}

    </div>
  )
}

export default BooksCard