import { Router } from "express"
import "express-async-errors"

import handleError from "@middlewares/handlerErrorMiddleware"

import authRouter from "./authRouter"

const router = Router()

router.use(authRouter)
router.use(handleError)

export default router
