import { relations } from "drizzle-orm";
import {
  mysqlTable,
  int,
  varchar,
  datetime,
  text,
  decimal,
} from "drizzle-orm/mysql-core";

export const phong = mysqlTable("phong", {
  maPhong: int("MaPhong").primaryKey().notNull(),
  tenPhong: varchar("TenPhong", { length: 50 }).notNull(),
});

export const canBo = mysqlTable("can_bo", {
  maCB: varchar("MaCB", { length: 8 }).primaryKey().notNull(),
  hoTen: varchar("HoTen", { length: 50 }).notNull(),
  ngaySinh: datetime("NgaySinh"),
  danToc: varchar("DanToc", { length: 50 }),
  cmt: varchar("CMT", { length: 9 }),
  gioiTinh: varchar("GioiTinh", { length: 3 }),
  queQuan: text("QueQuan"),
  diaChi: text("DiaChi"),
  maPhong: int("MaPhong").references(() => phong.maPhong),
  chucVu: varchar("ChucVu", { length: 50 }),
  trinhDo: varchar("TrinhDo", { length: 50 }),
  ngayBienChe: datetime("NgayBienChe"),
});

export const heSo = mysqlTable("he_so", {
  maHeSo: int("MaHeSo").primaryKey().notNull(),
  heSo: varchar("HeSo", { length: 50 }).notNull(),
  giaTri: decimal("GiaTri", { precision: 10, scale: 2 }).notNull(),
});

export const quaTrinhLuong = mysqlTable("qua_trinh_luong", {
  maQuaTrinh: int("MaQuaTrinh").primaryKey().notNull().autoincrement(),
  maCanBo: varchar("MaCanBo", { length: 5 })
    .notNull()
    .references(() => canBo.maCB),
  soQD: varchar("SoQD", { length: 10 }),
  ngayQD: datetime("NgayQD"),
  maHeSo: int("MaHeSo")
    .notNull()
    .references(() => heSo.maHeSo),
});

// Relations
export const canBoRelations = relations(canBo, ({ one, many }) => ({
  phong: one(phong, {
    fields: [canBo.maPhong],
    references: [phong.maPhong],
  }),
  quaTrinhLuong: many(quaTrinhLuong),
}));

export const phongRelations = relations(phong, ({ many }) => ({
  canBo: many(canBo),
}));

export const heSoRelations = relations(heSo, ({ many }) => ({
  quaTrinhLuong: many(quaTrinhLuong),
}));

export const quaTrinhLuongRelations = relations(quaTrinhLuong, ({ one }) => ({
  canBo: one(canBo, {
    fields: [quaTrinhLuong.maCanBo],
    references: [canBo.maCB],
  }),
  heSo: one(heSo, {
    fields: [quaTrinhLuong.maHeSo],
    references: [heSo.maHeSo],
  }),
}));
