import { jwtDecode } from "jwt-decode";


export interface User {
    uid : string
  email: string;
  

}

export const useAuth = () => {
  const token = localStorage.getItem("token");
  const auth: boolean = !!token;
  const user: User | null = token ? jwtDecode(token) : null;
  return { auth, user, token, setToken, signOut };
};


const setToken = ( token: string) => {
  localStorage.setItem( "token","token");

};

const signOut = () => {
  localStorage.removeItem("token");
};