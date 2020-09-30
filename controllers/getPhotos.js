import { Client } from "https://deno.land/x/postgres/mod.ts";
import {credentials} from "../database/config.js"

const client = new Client(credentials)

//@desc: GET all products FROM /api/photos
const getPhotos = async ({response}) => {
    try {
        await client.connect()
        const res = await client.query("SELECT * from photos")

        //after testing consider changing obj to const photo
        const photos = new Array()
        res.rows.map(p=>{
            let obj = new Object()
            res.rowDescription.columns.map((e,i)=>{
                obj[e.name] = p[i]
            })
            photos.push(obj)
        })

        response.status = 200
        response.body = {
            success: true,
            data: photos
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

export {getPhotos}