const subCategorySchema = require("../moddel/subCategorySchema");

async function subCategoryDeleteControllers (req ,res) {
     try {

        const deleted = await subCategorySchema.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "SubCategory deleted"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting SubCategory",
            error: error.message
        });
    }
}
module.exports = subCategoryDeleteControllers