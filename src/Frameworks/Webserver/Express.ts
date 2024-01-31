
import bodyParser from "body-parser"
import { Express } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "../MongoDB/Routes/authRoute"
import logger from "morgan"



function expressConfig(app: Express) {

      app.use(bodyParser.json())
      app.use(cookieParser())
      app.use(cors({
            credentials: true
      }))
      app.use(logger("dev"))

      app.use(
            bodyParser.urlencoded({
                  limit: "50mb",
                  extended: true,
                  parameterLimit: 50000,
            })
      );

      app.use("/auth", userRouter)

}

function serverConfig(server: any, getconfig) {
      const config = getconfig()
      server.listen(config.server.port, () => {
            console.log(`${config.server.name} server started on ${config.server.port}`);
      })
}
const express = {

      expressConfig,
      serverConfig
}

export default express




