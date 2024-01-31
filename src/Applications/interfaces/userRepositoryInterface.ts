import { userEntity } from "../../entities/userEntity"

export interface userRepositoryInterface {
       createUser(data:userEntity): Promise <userEntity>
}