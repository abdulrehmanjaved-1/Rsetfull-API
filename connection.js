const mongoose = require('mongoose');


async function connectbyurl(url){
    return mongoose.connect(url);
}
module.exports=connectbyurl;