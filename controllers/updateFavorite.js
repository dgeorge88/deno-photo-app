import {Client} from "https://deno.land/x/postgres/mod.ts"
import {credentials} from "../database/config.js"
import {getPhoto} from "./getPhoto.js"

const client = new Client(credentials)

//@desc: UPDATE Photo PUT /api/product/:id
//@as: this will most likely be to add isFavorite
const updateFavorite = async ({params, request, response}) => {
    await getPhoto({params, response})

    if(response.status === 404){
        response.status = 404
        response.body = {
            success: false,
            message: `No Photo with the ID: ${params.id}.`
        }
        return
    }else{
        const body = await request.body()
        const photo = await response.body.data

            try {
                await client.connect()
                const res = await client.query("UPDATE photos SET isfavorite = NOT isfavorite WHERE id=$1", params.id)

                response.status = 200
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

export {updateFavorite}