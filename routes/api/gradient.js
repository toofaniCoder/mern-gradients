const express = require("express");
const router = express.Router();
const Gradient = require("../../models/Gradient");
const nodeHtmlToImage = require("node-html-to-image");

router.get("/", async (req, res) => {
  try {
    const gradients = await Gradient.find();
    res.send(gradients);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
});

router.post("/", async (req, res) => {
  try {
    let new_gradient = new Gradient(req.body);
    await new_gradient.save();
    res.send(new_gradient);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const gradient = await Gradient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(gradient);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Gradient.findByIdAndDelete(req.params.id);
    console.log("deleted!");
    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
});

router.get("/download/:themeName", async (req, res) => {
  const gradient = await Gradient.findOne({ name: req.params.themeName });
  await nodeHtmlToImage({
    output: "./public/images/image.png",
    html: `<div style="width:100%;height:100%;background-image:linear-gradient(${gradient.colors.direction},${gradient.colors.start}, ${gradient.colors.end})"></div>`,
    puppeteerArgs: { args: ["--no-sandbox", "--disable-setuid-sandbox"] },
  });

  gradient.downloads = gradient.downloads + 1;
  await gradient.save();

  res.download("./public/images/image.png");
});

module.exports = router;
