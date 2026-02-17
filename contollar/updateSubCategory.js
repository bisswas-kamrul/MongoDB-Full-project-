const subCategorySchema = require("../moddel/subCategorySchema");


async function updateSubCategory (req , res) {
      try {

        const updated = await subCategorySchema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "SubCategory updated",
            data: updated
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating SubCategory",
            error: error.message
        });
    }
}
module.exports = updateSubCategory