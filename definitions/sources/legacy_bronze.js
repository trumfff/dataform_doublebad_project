// Bảng lịch sử copy 1 LẦN từ gold cũ asia-southeast1 (order_detail.NEW_all_orders_detail)
// sang US (2026-07-04, qua AVRO export/load, bucket tạm gs://doublebad-legacy-transfer).
// Cấp MÓN, schema cũ 57 cột (DATETIME, main_item STRING...). v_items_legacy cast về schema mới.
// Dùng cho: (1) lịch sử <2025 + toàn bộ LAZADA trong s_all_orders_detail, (2) mốc đối chiếu completeness check.
declare({ schema: "doublebad_sources", name: "legacy_all_orders_detail" });
