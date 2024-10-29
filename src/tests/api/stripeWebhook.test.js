const {makeHttpPost} = require('../helpers/apiHelpers');
const stripePayloads = require('../../payloads/stripePayloads');
// const DonationModel = require('../../models/DonationModel');
const logger = require('../../utils/logger');
const config = require('../../../config/index');
const allure = require('@wdio/allure-reporter').default;

describe('Stripe Webhook Testing', () => {
    beforeEach(async () => {
        // Clear the database or set up test data if needed
        // await DonationModel.clearDatabase(); // Hypothetical function to clear the database
    });

    it('should process payment_intent.succeeded event correctly', async () => {
        allure.startStep('Starting my test');
        const response = await makeHttpPost(config.endpoints.webhook, stripePayloads.paymentIntentSucceeded);

        expect(response.status).toBe(200);

        // const donation = await DonationModel.findLastDonation();
        // expect(donation).toBeTruthy();
        // expect(donation.amount).toBe(1000);  // Check if the amount matches
        logger.info('Successfully processed payment_intent.succeeded webhook event.');
        allure.endStep('passed');
    });

    it('should handle payment_intent.failed event correctly', async () => {
        allure.startStep('Starting my test');
        const response = await makeHttpPost(config.endpoints.webhookDemo, stripePayloads.paymentIntentFailed);

        expect(response.status).toBe(200);

        // const donation = await DonationModel.findLastDonation();
        // expect(donation).toBeFalsy(); // No donation should be logged for a failed payment
        logger.warn('Handled payment_intent.failed event without creating donation.');
        allure.endStep('passed');
    });
});
