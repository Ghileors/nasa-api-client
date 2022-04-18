import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const EditPage: FC = () => {
  const { id } = useParams();

  return <div>Edit {id}</div>;
};

export default EditPage;
