const Inmaterial = require("../models/inmaterial.model");

/**Get all Material to show
 * Find all materials and show
 */
const inmaterial_all = async(req,res) =>{
    try {
        const inmaterials = await Inmaterial.find();
        res.json(inmaterials);
      } catch (error) {
        res.json({ message: error });
      }
};
/**Finds material separately
 * Search by material ID and get details
 */
const inmaterial_details = async(req,res) =>{
    try {
        const inmaterial = await Inmaterial.findById(req.params.inmaterialId);
        res.json(inmaterial);
      } catch (error) {
        res.json({ message: error });
      }
};
/**Save New Material
 * Get material details to save and
 * try to save
 */
const inmaterial_create = async(req,res) =>{
    const inmaterial = new Inmaterial({
        itemcode: req.body.itemcode,
        purchaser: req.body.purchaser,
        vendor: req.body.vendor,
        price: req.body.price
    });
    try{
        const savedinmaterial = await inmaterial.save();
        res.send(savedinmaterial);
    }catch(error){
        res.status(400).send(error);
    }
};
/**Upade Material
 * Find by material ID and
 * Try to update
 */
const inmaterial_update = async(req,res) =>{
    const inmaterial = new Inmaterial({
        itemcode: req.body.itemcode,
        purchaser: req.body.purchaser,
        vendor: req.body.vendor,
        price: req.body.price
    });
    try{
        const updateinmaterial = await inmaterial.findByIdAndUpdate();
        res.json(updateinmaterial);
    }catch(error){
        res.json({ message: error });    }
};
/**Delete material search by material ID and delete */
const inmaterial_delete = async(req,res) =>{
    try {
        const removeinmaterial = await Inmaterial.findByIdAndDelete(req.params.inmaterialId);
        res.json(removeinmaterial);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    inmaterial_details,
    inmaterial_all,
    inmaterial_create,
    inmaterial_delete,
    inmaterial_update
}