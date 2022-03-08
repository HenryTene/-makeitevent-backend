const user = require('./api/user');
//const event=require("./api/event/index.js");

function routes(app){
    app.use(user)
    //app.use(event)
}