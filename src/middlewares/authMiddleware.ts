import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from "../configuration/config";

export  function authenticationMiddleware(request : Request , 
    response : Response , next : NextFunction) : void
{
    try
    {
        const authHeader = request.headers.authorization;
        if(authHeader)
        {
            const bearer = authHeader.split(" ")[0].toLowerCase();
            const token = authHeader.split(" ")[1];
            if(token && bearer === 'bearer')
            {
                if(jwt.verify(token , config.json_token as string))
                {
                    response.locals.decodedJWT = jwt.verify(token , config.json_token as string)
                    next();
                   
                  
                }
            }
            else
            {
                response.status(401);
                response.send(`Invalid token.`);
            }
        }
        else
        {
            response.send('A token must be provided.');
        }
    }
    catch(err)
    {

    }
}