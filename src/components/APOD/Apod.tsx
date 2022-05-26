import React, { useEffect, useState } from 'react';
import NasaService from 'http/services/NasaService';

const Apod = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await NasaService.fetchApodByServer();
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
};

export default Apod;
