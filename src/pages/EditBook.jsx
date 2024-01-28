import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function EditBook() {

  const [title, setTitle] = useState('');  
  const [author, setAuthor] = useState('');  
  const [publishYear, setPublistYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:8000/book/${id}`)
      .then((response) => {

        setAuthor(response.data.data.author);
        setPublistYear(response.data.data.publishYear);
        setTitle(response.data.data.title);
        setLoading(false);

      })
      .catch( (error) => {
        setLoading(false);
        alert("Check console for error");
        console.log(error);
      });

  }, []);

  const handleEditBook = () => {

    const data = { title, author, publishYear };

    setLoading(true);

    axios.put(`http://localhost:8000/book/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Error happened.")
      })

  };


  return (
    <div className='p-4'>
      <BackButton />

      <h1 className='text-3xl my-4'> Edit Book </h1>
      { loading ? <Spinner /> : '' }

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4'>Title</label>
          <input type="text" value={title} className='border-2 border-gray-400 px-4 py-2 w-full'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4'>Author</label>
          <input type="text" value={author} className='border-2 border-gray-400 px-4 py-2 w-full'
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className='my-4'>
          <label htmlFor="" className='text-xl mr-4'>Publish Year</label>
          <input type="number" value={publishYear} className='border-2 border-gray-400 px-4 py-2 w-full'
            onChange={(e) => setPublistYear(e.target.value)}
          />
        </div>

        <button className='p-2 bg-sky-300 m-8'
          onClick={handleEditBook}>
          Save
        </button>
      </div>

    </div>
  )
}

export default EditBook