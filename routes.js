import {Router} from "https://deno.land/x/oak/mod.ts"

import {getPhotos} from "./controllers/getPhotos.js"
import {getPhoto} from "./controllers/getPhoto.js"
import {addPhoto} from "./controllers/addPhoto.js"
import {updateFavorite} from "./controllers/updateFavorite.js"
import {deletePhoto} from "./controllers/deletePhoto.js"

const router  = new Router()

router
.get("/api/photos", getPhotos)
.post("/api/photos/add", addPhoto)
.get("/api/photo/:id", getPhoto)
.put("/api/photo/update/:id", updateFavorite)
.delete("/api/photo/delete/:id", deletePhoto)

export default router
