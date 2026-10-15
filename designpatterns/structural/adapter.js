class PayPal {
  sendPayment(amount) {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

class Stripe {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  makeCharge(amountInCents) {
    console.log(`Charged ${amountInCents} cents using Stripe.`);
  }
}

class StripeAdapter {
  constructor(stripeInstance) {
    this.stripe = stripeInstance;
  }

  sendPayment(amount) {
    const amountInCents = amount * 100;
    this.stripe.makeCharge(amountInCents);
  }
}

function processOrder(paymentProcessor, total) {
  paymentProcessor.sendPayment(total);
}

const legacyProcessor = new PayPal();
processOrder(legacyProcessor, 49.99);

const stripeService = new Stripe("sk_test_123");
const adaptedProcessor = new StripeAdapter(stripeService);
processOrder(adaptedProcessor, 49.99);
