 import {Application, Router, send} from 'https://deno.land/x/oak/mod.ts'
 import { oakCors } from "https://deno.land/x/cors/mod.ts";
 import * as flags from 'https://deno.land/std/flags/mod.ts';


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

const app = new Application();

const {args, exit} = Deno;
const DEFAULT_PORT = 8000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
console.log("This is not port number");
exit(1);
};

app
.use( await router.routes())
.use( await router.allowedMethods())
.use(async (context) => {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/build`,
      index: "index.html",
    })
  })

await app.listen({port: port});