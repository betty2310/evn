import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { phong, canBo, heSo, quaTrinhLuong } from "./schema";
import { db } from "./setup";

async function seed() {
  await db.insert(phong).values([
    { maPhong: 1, tenPhong: "Phòng Nhân sự" },
    { maPhong: 2, tenPhong: "Phòng Kế toán" },
    { maPhong: 3, tenPhong: "Phòng IT" },
  ]);

  await db.insert(canBo).values([
    {
      maCB: "CB001",
      hoTen: "Nguyễn Văn A",
      ngaySinh: new Date("1985-05-15"),
      danToc: "Kinh",
      cmt: "123456789",
      gioiTinh: "Nam",
      queQuan: "Hà Nội",
      diaChi: "Số 1, Đường ABC, Hà Nội",
      maPhong: 1,
      chucVu: "Trưởng phòng",
      trinhDo: "Đại học",
      ngayBienChe: new Date("2010-01-01"),
    },
    {
      maCB: "CB002",
      hoTen: "Trần Thị B",
      ngaySinh: new Date("1990-08-20"),
      danToc: "Kinh",
      cmt: "987654321",
      gioiTinh: "Nữ",
      queQuan: "Hồ Chí Minh",
      diaChi: "Số 2, Đường XYZ, Hồ Chí Minh",
      maPhong: 2,
      chucVu: "Nhân viên",
      trinhDo: "Cao đẳng",
      ngayBienChe: new Date("2015-03-01"),
    },
  ]);

  await db.insert(heSo).values([
    { maHeSo: 1, heSo: "123", giaTri: "2.34" },
    { maHeSo: 2, heSo: "256,", giaTri: "2.67" },
    { maHeSo: 3, heSo: "798", giaTri: "3.0" },
  ]);

  await db.insert(quaTrinhLuong).values([
    {
      maCanBo: "CB001",
      soQD: "QD001",
      ngayQD: new Date("2020-01-01"),
      maHeSo: 1,
    },
    {
      maCanBo: "CB001",
      soQD: "QD002",
      ngayQD: new Date("2021-01-01"),
      maHeSo: 2,
    },
    {
      maCanBo: "CB002",
      soQD: "QD003",
      ngayQD: new Date("2020-06-01"),
      maHeSo: 1,
    },
  ]);

  console.log("Seed data inserted successfully");
}

seed().catch(console.error);
