CREATE TABLE IF NOT EXISTS points (
  sbd TEXT,
  toan FLOAT,
  ngu_van FLOAT,
  ngoai_ngu FLOAT,
  vat_li FLOAT,
  hoa_hoc FLOAT,
  sinh_hoc FLOAT,
  lich_su FLOAT,
  dia_li FLOAT,
  gdcd FLOAT,
  ma_ngoai_ngu TEXT
);

COPY points(sbd, toan, ngu_van, ngoai_ngu, vat_li, hoa_hoc, sinh_hoc, lich_su, dia_li, gdcd, ma_ngoai_ngu)
FROM '/docker-entrypoint-initdb.d/diem_thi_thpt_2024.csv'
DELIMITER ','
CSV HEADER;
