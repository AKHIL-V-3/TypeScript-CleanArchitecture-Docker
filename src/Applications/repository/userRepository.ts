import { userEntity } from "../../entities/userEntity";
import { userRepositoryInterface } from "../interfaces/userRepositoryInterface";
import {User} from "../../Frameworks/MongoDB/Models/userModel";
import rabbitMqConnection from "../../Frameworks/Rabbitmq";


export class userRepository implements userRepositoryInterface {

   
    async createUser(data: userEntity):Promise<any> {

        // console.log(data);

        try{
            const newUser = new User({   
                  name:data.name,
                  email:data.email,
                  password:data.password
            })
    
           const response = await newUser.save()

            const rabbitMq = rabbitMqConnection()

            console.log(rabbitMq,'all goooooooooooooooood');
            
           rabbitMq.sendNotification(response)

           setTimeout(() => {
            rabbitMq.closeConnection()
            process.exit(0)
        }, 500)
            
           return response

        }catch(err){

              console.log(err);
              
        }

        

    //    User.create(data).then((response)=>{

    //     console.log('hmm');
        

    //     console.log(response);
    //     return response
    //    })
         
          
        
    }

    
}