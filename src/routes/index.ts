import { Router } from "express"
import "express-async-errors"

import handleError from "@middlewares/handlerErrorMiddleware"

import authRouter from "./authRouter"
import credentialRouter from "./credentialsRouter"
import noteRouter from "./noteRouter"
import cardRouter from "./cardRouter"

const router = Router()

router.use(authRouter)
router.use("/credential", credentialRouter)
router.use("/note", noteRouter)
router.use("/card", cardRouter)
router.use(handleError)

export default router
