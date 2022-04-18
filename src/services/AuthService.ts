import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export interface Credentials {
  email: string;
  password: string;
}

class AuthService {
  async registration(credentials: Credentials): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', credentials);
  }

  async login(credentials: Credentials): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', credentials);
  }

  async logout(): Promise<void> {
    return $api.post('/logout');
  }
}

export default new AuthService();
