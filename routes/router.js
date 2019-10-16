var express = require('express');
var router = express.Router();
mealsController = require("../controllers/mealsController");
router.get('/404', function(req, res){
    // res.sendFile('../views/index.html');
    // res.sendFile(__dirname + "/" + "style.css");
    // console.log(process.cwd()+'\\'+'views'+'\\'+'404.html');
    res.sendFile('404.html', { root: '/shop/views/'});
    //app.use(express.static(path.join(__dirname, 'assets')));
});

// router.use('/404',function(req, res, next){
//     console.log("Start");
//     next();
// });
// router.use('/404', function(req, res, next){
//     console.log("Middle");
//     next();
// });
// router.use('/404', mealsController.getMenuController);
module.exports = router;


