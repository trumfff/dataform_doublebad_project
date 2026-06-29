// Khai báo các bảng Bronze (external table đọc thẳng GCS) trong dataset doublebad_sources.
// Silver/Staging tham chiếu qua ${ref("shopee_<entity>")}.
//
// ⚠️ Các external table này PHẢI được tạo trước (block bq tạo dataset doublebad_sources
//    + 4 external table — xem hướng dẫn deploy).
["shopee_order_details", "shopee_escrow", "shopee_ads_campaign", "shopee_ads_daily"].forEach((name) => {
  declare({ schema: "doublebad_sources", name });
});
