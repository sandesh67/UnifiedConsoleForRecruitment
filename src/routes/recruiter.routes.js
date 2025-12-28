const express = require("express");
const router = express.Router();
const controller = require("../controller/recruiter.controller");

router.get("/", controller.getAllRecruiters);
router.get("/:id", controller.getRecruiterById);
router.post("/", controller.createRecruiter);
router.put("/:id", controller.updateRecruiter);

module.exports = router;
