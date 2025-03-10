import { foodOrderItemRejex } from "../../utils/foodOrderItemRejex.js"
export const checkInfoValues = (req, res, next) => {
    const { quantity, food } = req.body
    try {
        foodOrderItemRejex.validateSync({ quantity, food })
        next()
    } catch (error) {
        res.status(500).send({
            error: true,
            message: error
        })
    }
}