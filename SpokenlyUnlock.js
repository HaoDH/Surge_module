let body = $response.body;
try {
    let obj = JSON.parse(body);
    obj.limit_reached = false;
    obj.usage_remaining_percent = 100.0;
    $done({ body: JSON.stringify(obj) });
} catch (e) {
    $done({});
}
