import {IUser} from "../types/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../api/services/AuthService";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async Login(userName: string, password: string) {
        try {
            const response = await AuthService.login(userName, password);
            console.log(response.data);
            localStorage.setItem('accessToken', response.data.tokensResponse.accessToken);
            this.setAuth(true);
            this.setUser(response.data.usersResponse);
            console.log(this.user);
        } catch (e){
            console.error(e);
        }
    }
    async Registration(userName: string, userEmail: string,  password: string, role: string) {
        try {
            await AuthService.registration(userName, userEmail, password, role);
        } catch (e){
            console.error(e);
        }
    }

    async Logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('accessToken');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e){
            console.error(e);
        }
    }
}