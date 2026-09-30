/******************************
 * Grammarly Pro / Premium Unlock
 * Endpoints:
 * - https://gateway.grammarly.com/subscription/api/v1/subscription
 * - https://auth.grammarly.com/auth/v5/api/userinfo
 * Target: Surge 5 / Quantumult X / Shadowrocket
 ******************************/

const url = $request.url;
let body = $response.body;

if (body) {
  try {
    let obj = JSON.parse(body);

    // 1. Xử lý Endpoint Subscription
    if (url.indexOf("/subscription/api/v1/subscription") !== -1) {
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
      obj.creditCard = { cardType: "Visa" };

      obj.currentPlan = {
        id: 10203084,
        regularPlanId: 10203084,
        title: "Annual",
        description: "Annual Grammarly Pro plan",
        regularPrice: 144,
        regularPriceMoney: { currency: "USD", value: 144 },
        price: 144,
        priceMoney: { currency: "USD", value: 144 },
        periodMonths: 12,
        hasTrial: false,
        trialDays: 0,
        baseInstitutionCampaign: false
      };
    }

    // 2. Xử lý Endpoint User Info (Mới bổ sung)
    if (url.indexOf("/auth/v5/api/userinfo") !== -1) {
      obj.type = "Premium";
      obj.free = false;
      obj.freemium = false;
      obj.plagiarismOn = true;
      obj.subscriptionFree = false;
      
      // Mở khóa các tính năng editor & plagiarism
      if (obj.editorFeatures) {
        obj.editorFeatures.plagiarismDisabled = false;
        obj.editorFeatures.proofit = true;
      }
      obj.institutionPlagiarismDisabled = false;

      // Cấp quyền / Roles
      obj.roles = ["ROLE_PREMIUM", "ROLE_USER"];
      obj.permissions = [
        "plagiarism",
        "human_proofreading",
        "advanced_checks",
        "clarity_rewrites",
        "vocabulary_enhancement",
        "tone_adjustments"
      ];

      // Thêm nhóm Premium vào groups
      if (Array.isArray(obj.groups) && !obj.groups.includes("premium")) {
        obj.groups.push("premium");
      }
    }

    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("Grammarly Script Error: " + e);
    $done({});
  }
} else {
  $done({});
}
