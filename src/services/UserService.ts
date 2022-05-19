import { AxiosResponse } from 'axios';
import { api } from '../http';
import { IUser } from '../models/IUser';

class UserService {
  async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return await api.get<IUser[]>('/users');
  }

  async fetchCurrent(): Promise<AxiosResponse<IUser>> {
    return await api.get<IUser>('/users/current');
  }

  async updateCurrent(user: IUser): Promise<AxiosResponse<IUser>> {
    return await api.put<IUser>('/users/current/update', user);
  }

  async deleteCurrent(id: number) {
    await api.delete<IUser>(`/users/current/delete/${id}`);
  }
}

export default new UserService();
