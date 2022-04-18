import React, { FC, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { EDIT_POST } from 'constants/path';

const SinglePage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState({
    albumId: 1,
    id: 1,
    title: '',
    url: '',
    thumbnailUrl: '',
  });

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((json) => setPhoto(json));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button>
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} width="100" />
      <Link to={`${EDIT_POST.replace(':id', id || '')}`}>Edit</Link>
    </div>
  );
};

export default SinglePage;
