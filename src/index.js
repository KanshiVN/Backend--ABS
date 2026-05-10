const express = require('express')
const {serverConfig,logger} = require('./config')
const {infoController , homeController} = require('./controllers/index')
const apiRoutes = require('./routes/index');
const { log } = require('winston');
const app = express();

app.use('/api',apiRoutes);



app.listen(serverConfig.PORT,()=>{
    console.log('Successfully started server');
    logger.info(`Server started at port ${serverConfig.PORT}`)
})