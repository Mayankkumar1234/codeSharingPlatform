const { Router } = require("express");
const {getCode,saveCode,updateCode} = require("../controllers/codeController");
const codeRoute = Router();

codeRoute.get("/getCode/:codeId", getCode);
codeRoute.post("/saveCode", saveCode);
codeRoute.put("/editCode/:codeId", updateCode);

module.exports = codeRoute
