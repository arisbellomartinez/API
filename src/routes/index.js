const {Router} = require("express");
const router = Router();


router.get("/", (req, res) => {
    res.json({title:"Welcome"});
});

router.get("/test", (req, res) => {
    res.json("Esta corriendo");
})

router.get("/example", (req, res) => {
    res.json("example")
});

module.exports = router;