import { getAllUsers, getUserById } from '@/api/user';
import { defineStore } from 'pinia';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [] as User[],
  }),

  actions: {
    async fetchUsers() {
      this.users = await getAllUsers();
      return this.users;
    },

    async fetchUserById(id: number): Promise<User> {
      return await getUserById(id);
    },

    getUsers(): User[] {
      return this.users;
    },

    getUserById(id: number): User | undefined {
      return this.users.find((item) => item.id === id);
    },
  },
});
