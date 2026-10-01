let body = $response.body;
try {
    let obj = JSON.parse(body);
    
    // Bật trạng thái subscription và thêm gói ONE VTV MAX vào danh sách plans
    obj.isSubscription = true;
    obj.plans = [
        {
            "id": "onevtvmax",
            "name": "ONE VTV MAX",
            "price": 99000,
            "timeUnit": "30 Ngày",
            "status": "active"
        }
    ];
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({});
}
