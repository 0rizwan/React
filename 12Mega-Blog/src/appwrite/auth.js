import { Client, Account, ID, } from 'appwrite'
import config from '../config/config';

export class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                this.login({email, password})
            } else {
                return user;
            }
        } catch (err) {
            throw err;
        }

    }

    async login ({email, password}){
        try{
            const user = await this.account.createEmailSession(email, password)
            return user
        }catch(err){
            throw err;
        }
    }

    async getCurrentUser (){
        try{
            return await this.account.get()
        }catch(err){
            console.log("Error occured in Appwrite service :: getCurrentUser :: error", err)
        }
        return null
    }

    async logout (){
        try{
            return await this.account.deleteSessions()
        }catch(err){
            console.log("Error occured in Appwrite service :: logout :: error", err)
        }
    }
}
const authService = new AuthService();
export default authService