const {Router} = require("express");
const router = Router();

const example = require("../example.json")




router.get("/test", (req, res) => {
    res.json("Esta vivo!, esta vivo!");
})



router.post("/example", (req, res) => {
    
    res.send("llegue")
})


module.exports = router;