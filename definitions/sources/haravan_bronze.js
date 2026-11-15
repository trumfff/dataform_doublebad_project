// Khai báo bronze external table Haravan (doublebad_sources). Tạo bằng bq trước (xem hướng dẫn).
declare({ schema: "doublebad_sources", name: "haravan_orders" });

// Inventory APIs (job doublebad-ingest-haravan-inventory, 1 lần/ngày).
// LƯU Ý: 5 API này KHÔNG hỗ trợ lọc theo ngày → mỗi lần chạy ghi lại FULL
// lịch sử vào partition ingest_dt của ngày đó. Vì vậy tầng silver phía sau
// chỉ đọc snapshot MỚI NHẤT, không merge tăng dần như orders.
declare({ schema: "doublebad_sources", name: "haravan_inventory_adjustments" });
declare({ schema: "doublebad_sources", name: "haravan_inventory_transfers" });
declare({ schema: "doublebad_sources", name: "haravan_purchase_orders" });
declare({ schema: "doublebad_sources", name: "haravan_purchase_receives" });
declare({ schema: "doublebad_sources", name: "haravan_purchase_returns" });
