import axios, { AxiosResponse } from 'axios';
import { nasaApi } from '../nasa-api';
import { IApod } from 'models/IApod';
import { api } from '../';

const PLANETARY_URL = '/planetary';
const EPIC_URL = '/EPIC';
const EPIC_API_NATURAL_URL = `${EPIC_URL}/api/natural`;

class NasaService {
  async fetchApod(): Promise<AxiosResponse<IApod>> {
    return await nasaApi.get<IApod>(`${PLANETARY_URL}/apod`);
  }

  async fetchApodByServer() {
    try {
      return await api.get('/apod');
    } catch (error) {
      throw error;
    }
  }

  async fetchNeoWs() {
    return await nasaApi.get('/neo/rest/v1/feed');
  }

  async fetchDONKI() {
    return await nasaApi.get('/DONKI/CME');
  }

  async fetchEarthImagery() {
    return await nasaApi.get(
      'planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10'
    );
  }

  // async fetchInSight() {
  //   return await nasaApi.get('/insight_weather/');
  // }

  async fetchEPICImages() {
    // TODO implement
    // https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY
    // https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=DEMO_KEY
    // https://api.nasa.gov/EPIC/api/natural/all?api_key=DEMO_KEY
    // https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY
    return await nasaApi.get(`${EPIC_API_NATURAL_URL}/images`);
  }

  async fetchMarsRoverPhotos() {
    // TODO implement
    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY
    return await nasaApi.get('/mars-photos/api/v1/rovers/curiosity/photos?sol=1000');
  }

  async fetchTechport() {
    // TODO implement
    // https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY
    // https://api.nasa.gov/techport/api/projects/17792.xml?api_key=DEMO_KEY
    // https://api.nasa.gov/techport/api/projects?api_key=DEMO_KEY
    // https://api.nasa.gov/techport/api/projects?updatedSince=2016-01-01&api_key=DEMO_KEY
    return await nasaApi.get('/mars-photos/api/v1/rovers/curiosity/photos?sol=1000');
  }

  async fetchImageAndVideoLibrary(query: string) {
    return await axios.get(
      `https://images-api.nasa.gov/search?q=${query}&page=1&media_type=image,video,audio&year_start=1920&year_end=2022`
    );
  }

  async fetchTechTransfer() {
    return await nasaApi.get('/techtransfer/patent/?engine');
  }
}

export default new NasaService();
