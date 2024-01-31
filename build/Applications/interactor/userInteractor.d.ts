import { userInteractorInterface } from "../interfaces/userInteractorInterface";
import { userRepositoryInterface } from "../interfaces/userRepositoryInterface";
export declare class userInteractor implements userInteractorInterface {
    private repository;
    constructor(repository: userRepositoryInterface);
    createUser(input: any): Promise<import("../../entities/userEntity").userEntity>;
}
