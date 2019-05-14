const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_K0IrbRNF5ZWUd2S6MqX4g6II00tl9QLAjW')


router.get('/', (req,res) => {
  res.render('index')
})

router.post('/checkout', async (req,res,next)  => {
// console.log(req.body);

  const customer = await stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken

  });

  const charge = await stripe.charges.create({
    amount:'3000',
    currency: 'usd',
    customer:customer.id,
    description: 'Video Edition Software'
  });
  console.log(charge.id)
  //Finally show a succes view
  res.render('downloads')
})

module.exports = router