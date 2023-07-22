const express = require("express");
const functions=require("../controller/functions")
const router=express.Router();


router.get('api/:id',functions.findit).
patch(functions.updateit).delete(functions.deleteit);
router.post("/", functions.makeit);
router.get('/',functions.getall);

module.exports=router