const express = require("express");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../utils/errors");

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to template server!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.status(StatusCodes.OK).json({ message: "Hello World!" });
  })
);

/**
 * @swagger
 * /*:
 *   get:
 *     description: Response scan end point
 *     responses:
 *       400:
 *         description: Returns a error string
 */
router.get(
  "*",
  asyncHandler(async (req, res, next) => {
    throw new BadRequestError("what???");
  })
);

module.exports = router;
