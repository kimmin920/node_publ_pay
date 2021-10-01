var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const order = {
    userId: "vvee1253",
    productName: "잉글래쉬 블랙퍼스트 tea",
    amount: 36000,
    currency: "KRW",
    orderId: 13566422344,
    taxFreeAmount: 3400,
  };

  res.render("checkout", { title: "checkout", order });
});

router.get("/success", function (req, res, next) {
  res.render("success", { title: "success" });
});

router.get("/fail", function (req, res, next) {
  res.render("fail", { title: "fail" });
});

router.post("/:orderId", function (req, res, next) {
  console.log(req.body);

  res.redirect('https://www.naver.com');
});

module.exports = router;
