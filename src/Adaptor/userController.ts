import { Request,Response,NextFunction } from "express";
import { userInteractorInterface } from "../Applications/interfaces/userInteractorInterface";


export class userController {
  
     private interactor:userInteractorInterface

     constructor(interactor:userInteractorInterface){

            this.interactor = interactor
     }
       
      async  createUser(req:Request,res:Response,next:NextFunction){

                 try{

                     const userData = req.body
                     const data = await this.interactor.createUser(userData) 
                     res.status(200).json(data)
  
                 }catch(error){

                   next(error)
                 }
        }
} 