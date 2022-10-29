const express = require('express');
const router = express.Router();
const inMaterial = require("../controllers/inmaterial.controller");

router.post("/", inMaterial.inmaterial_create); /**Add Material */
router.get("/", inMaterial.inmaterial_all);     /**Get All Material */
router.get("/:inmaterialId", inMaterial.inmaterial_details);    /**Get Material details by material ID*/
router.put("/:inmaterialId", inMaterial.inmaterial_update);     /**Update Material details by material ID */
router.delete("/:inmaterialId", inMaterial.inmaterial_delete);      /**Delete Material */



module.exports = router;