import { Express } from "express";
declare function expressConfig(app: Express): void;
declare function serverConfig(server: any, getconfig: any): void;
declare const express: {
    expressConfig: typeof expressConfig;
    serverConfig: typeof serverConfig;
};
export default express;
