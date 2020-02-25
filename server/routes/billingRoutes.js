const keys = require("../config/keys");
const requireLogin = require("../middlewares/requireLogin");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "$5 for 5 credits",
        source: req.body.id
      });
    } catch (err) {
      console.log("error in processing payment");
      console.log(err);
    }

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
