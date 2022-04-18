import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GeneralPage: FC = () => {
  const [categories, setCategories] = useState([{ id: 0, title: '' }]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <Link key={category.id} to={`posts/${category?.id}`}>
          <li>{category?.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default GeneralPage;
