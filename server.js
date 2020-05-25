import{Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.js'


const port = 3003
const app = new Application()


//Using middleware
app.use(router.routes())
app.use(router.allowedMethods())


console.log(`Server running on port ${port}`)
await app.listen({port})