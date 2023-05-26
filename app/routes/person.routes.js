const { authJwt } = require("../middleware");
const controller = require("../controllers/person.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/person/getData/:HHID",
        [authJwt.verifyToken],
        controller.getData
    );

    app.post(
        "/api/person/insert/:HHID",
        [authJwt.verifyToken],
        controller.insertData
    );

    app.put(
        "/api/person/update/:HHID",
        [authJwt.verifyToken],
        controller.updateData
    );

    app.delete(
        "/api/person/delete/:HHID",
        [authJwt.verifyToken],
        controller.deleteData
    );
};