import { Client } from "https://deno.land/x/postgres/mod.ts"
import {credentials} from "../database/config.js"

const client = new Client(credentials)

//@desc: GET Photo products FROM /api/photo/:id
const getPhoto = async ({params, response}) => {
    try {
        await client.connect()
        const res = await client.query("SELECT * from photos WHERE id = $1", params.id)

        if(res.rows.toString() === ""){
            response.status = 404
            response.body = {
                success: false,
                message: `No Photo with the ID: ${params.id}`
            }
        }else{
            const photo = new Object()
            res.rows.map(p =>{
                res.rowDescription.columns.map((e,i)=>{
                    photo[e.name] = p[i]
                })
            })
            response.status = 200
            response.body = {
                success: true,
                data: photo
            }
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

export {getPhoto}