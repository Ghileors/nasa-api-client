import React, { FC, useEffect, useState } from 'react';
import NasaService from 'http/services/NasaService';
import { IApod } from 'models/IApod';

const Apod: FC = () => {
  const [apod, setApod] = useState<IApod | null>(null);

  const getApod = async () => {
    const response = await NasaService.fetchApod();

    setApod(response.data);
  };

  useEffect(() => {
    getApod();
  }, []);
  return (
    <div>
      <img src={apod?.hdurl} alt={apod?.title} width="300" />
      <h3>{apod?.date}</h3>
    </div>
  );
};

export default Apod;
