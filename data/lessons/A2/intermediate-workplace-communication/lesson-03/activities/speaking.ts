export const scenario = "You're documenting a new API endpoint in technical documentation. You need to clearly describe which services and components are involved.";

export const speaking = "The new payment processing endpoint that we developed is located at /api/v2/payments. This endpoint that handles credit card transactions uses Stripe as the payment gateway. The middleware that runs before the controller validates the request payload and checks the user's authentication status. Users who have verified accounts can process payments up to $10,000, while users who haven't completed verification are limited to $1,000. The response that the endpoint returns includes a transaction ID that clients should store for future reference. Developers who integrate with this API need to implement proper error handling for the edge cases that we've documented in the API specification.";

export const speakingPracticeMode = "explanation" as const;
