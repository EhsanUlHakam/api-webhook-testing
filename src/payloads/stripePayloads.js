const stripePayloads = {
    paymentIntentSucceeded: {
        id: "pi_1GqjW4Lfs1a5zO5abc123456", //New generated every single time ? needs to discuss this with dev
        object: "payment_intent",
        amount: 1000,
        currency: "usd",
        status: "succeeded",
        // other relevant fields...
    },
    paymentIntentFailed: {
        id: "pi_1GqjW4Lfs1a5zO5abc654321", //New generated every single time ? needs to discuss this with dev
        object: "payment_intent",
        amount: 1000,
        currency: "usd",
        status: "requires_payment_method",
        // other relevant fields...
    }
};

module.exports = stripePayloads;
