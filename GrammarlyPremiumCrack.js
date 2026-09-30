/******************************
 * Grammarly Pro / Premium Unlock
 * Endpoint: https://gateway.grammarly.com/subscription/api/v1/subscription
 * Target: Surge 5 / Quantumult X / Shadowrocket
 ******************************/

let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    // Kích hoạt trạng thái Premium/Pro
    obj.isPremium = true;
    obj.isFree = false;
    obj.isFreebie = false;
    obj.isCancelled = false;
    obj.isDunning = false;
    obj.isPaymentMethodFailed = false;
    obj.isPremiumConversion = true;
    obj.nextPayDate = "Oct 28, 2999, 04:56:52 AM";
    obj.paymentMethod = "creditCard";
    obj.subscriptionPaymentMethods = ["creditCard"];
    obj.creditCard = {
      cardType: "Visa"
    };

    // Thiết lập gói cước hiện tại thành Annual (10203084 / 1005)
    obj.currentPlan = {
      id: 10203084,
      regularPlanId: 10203084,
      title: "Annual",
      description: "Annual Grammarly Pro plan",
      regularPrice: 144,
      regularPriceMoney: {
        currency: "USD",
        value: 144
      },
      price: 144,
      priceMoney: {
        currency: "USD",
        value: 144
      },
      periodMonths: 12,
      hasTrial: false,
      trialDays: 0,
      baseInstitutionCampaign: false
    };

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("Grammarly Script Error: " + e);
    $done({});
  }
} else {
  $done({});
}
