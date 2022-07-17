import { Router } from "express"
import "express-async-errors"

import handleError from "@middlewares/handlerErrorMiddleware"

import authRouter from "./authRouter"
import credentialRouter from "./credentialsRouter"
import notesRouter from "./notesRouter"

const router = Router()

router.use(authRouter)
router.use(notesRouter)
router.use("/credential", credentialRouter)
router.use(handleError)

export default router
