const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Successful -GET",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get("/:id", (req, res, next) => {
  res.status(200).json({
    message: "Successful -GET by ID",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});


router.post("/", (req, res, next) => {
    const name = req.body
    res.status(201).json({
      message: "Successful - POST",
      metadata: {
        name: name,
        hostname: req.hostname,
        method: req.method,
      },
    });
  });


  router.put("/:id", (req, res, next) => {
    res.status(200).json({
      message: "Successful -PUT by ID",
      metadata: {
        id: req.params.id,
        hostname: req.hostname,
        method: req.method,
      },
    });
  });

  router.delete("/:id", (req, res, next) => {
    res.status(200).json({
      message: "Successful -DELETE by ID",
      metadata: {
        id: req.params.id,
        hostname: req.hostname,
        method: req.method,
      },
    });
  });

module.exports = router;
