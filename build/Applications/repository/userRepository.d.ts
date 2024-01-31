import { userEntity } from "../../entities/userEntity";
import { userRepositoryInterface } from "../interfaces/userRepositoryInterface";
export declare class userRepository implements userRepositoryInterface {
    createUser(data: userEntity): Promise<any>;
}
