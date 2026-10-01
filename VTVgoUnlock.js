let body = $response.body;
try {
    let obj = JSON.parse(body);
    
    // Ví dụ: Bật trạng thái VIP / Subscription thành công
    if (obj.hasOwnProperty("isSubscription")) {
        obj.isSubscription = true;
    }
    
    // Hoặc chỉnh sửa thêm các thông tin khác nếu cần thiết trong object trả về
    
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({});
}
