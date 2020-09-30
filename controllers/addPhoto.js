import { Client } from "https://deno.land/x/postgres/mod.ts";
import {credentials} from "../database/config.js"

const client = new Client(credentials)

//@desc: POST Photo to /api/photos
const addPhoto = async ({request, response}) => {
    const body = await request.body()
    const photo = await body.value

    if(!request.hasBody){
        response.status = 400
        response.body = {
            success: false,
            message: "Sorry. No Data."
        }
    }else{
        
        try {
            await client.connect()
            const result = await client.query("INSERT INTO photos(url,isfavorite,description,tag)VALUES($1,$2,$3,$4)", photo.url, photo.isfavorite===false, photo.description, photo.tag)
            
            response.status = 201
            response.body = {
                success: true,
                data: photo
            }
            
        } catch (error) {
            
            response.status = 500
            response.body = {
                success: false,
                message: error.toString()
            }
            
        }finally{
            await client.end()
        }
    }

}

export {addPhoto}