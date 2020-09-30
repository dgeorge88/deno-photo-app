import {Client} from "https://deno.land/x/postgres/mod.ts"
import {credentials} from "../database/config.js"
import {getPhoto} from "./getPhoto.js"

const client = new Client(credentials)

const deletePhoto = async ({params, response}) => {
    await getPhoto({params, response})

    if(response.status === 404){
        response.body = {
            success: false,
            message: `No Photo with the ID: ${params.id}.`
        }
        return
    }else{

        try {
            await client.connect()
            const res = await client.query("DELETE FROM photos where id=$1", params.id)

            response.status = 204
            response.body = {
                success: true,
                message: `Deleted product with ID: ${params.id}.`
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

export {deletePhoto}
