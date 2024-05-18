const jsonServer = require('json-server')

const SDServer = jsonServer.create()

const middleware = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

SDServer.use(middleware)
SDServer.use(route)
SDServer.listen(PORT,()=>{
  console.log(`Std App Server started at port ${PORT} and waiting for client request`);
})