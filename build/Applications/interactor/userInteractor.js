"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInteractor = void 0;
class userInteractor {
    constructor(repository) {
        this.repository = repository;
    }
    async createUser(input) {
        return this.repository.createUser(input);
    }
}
exports.userInteractor = userInteractor;
//# sourceMappingURL=userInteractor.js.map