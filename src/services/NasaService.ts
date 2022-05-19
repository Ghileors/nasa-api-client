import { AxiosResponse } from 'axios';
import { nasaApi } from '../http/nasa-api';
import { IApod } from 'models/IApod';

class NasaService {
  async fetchApod(): Promise<AxiosResponse<IApod>> {
    return await nasaApi.get<IApod>('/planetary/apod');
  }

  async fetchNeoWs() {
    return await nasaApi.get('/neo/rest/v1/feed');
  }

  async fetchDONKI() {
    return await nasaApi.get('/DONKI/CME');
  }
}

export default new NasaService();
