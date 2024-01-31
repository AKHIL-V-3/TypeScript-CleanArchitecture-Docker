import { userInteractorInterface } from "../interfaces/userInteractorInterface";
import { userRepositoryInterface } from "../interfaces/userRepositoryInterface";


export class userInteractor implements userInteractorInterface{

    private  repository:userRepositoryInterface

    constructor(repository:userRepositoryInterface){
            this.repository = repository
    }
   
   async createUser(input: any) {
       return this.repository.createUser(input)    
    }

       
}