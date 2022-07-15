import { Router } from "express"
import handleError from "@middlewares/handlerErrorMiddleware"

const router = Router()

router.use(handleError)

export default router
