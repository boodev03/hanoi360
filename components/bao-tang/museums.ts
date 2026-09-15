export type Museum = {
  id: number;
  title: string;
  address: string;
  image: string;
  distance: string;
};

export const MUSEUMS: Museum[] = [
  {
    id: 1,
    title: "Bảo tàng Dân tộc học Việt Nam",
    address: "Đường Nguyễn Văn Huyên, phường Cầu Giấy",
    image: "/di-tich-lich-su/di-tich-hoa-lo.png",
    distance: "250m",
  },
  {
    id: 2,
    title: "Bảo tàng Hà Nội",
    address: "Phạm Hùng, phường Nam Từ Liêm",
    image: "/di-tich-lich-su/ho-tay.png",
    distance: "250m",
  },
  {
    id: 3,
    title: "Bảo tàng Lịch sử Quốc gia",
    address: "1 Tràng Tiền & 216 Trần Quang Khải, Hoàn Kiếm",
    image: "/di-tich-lich-su/chua-mot-cot.png",
    distance: "250m",
  },
  {
    id: 4,
    title: "Bảo tàng Mỹ thuật Việt Nam",
    address: "66 Nguyễn Thái Học, phường Ba Đình",
    image: "/di-tich-lich-su/chua-tran-quoc.png",
    distance: "250m",
  },
  {
    id: 5,
    title: "Bảo tàng Lịch sử Quân sự Việt Nam",
    address: "Đại lộ Thăng Long, phường Nam Từ Liêm",
    image: "/di-tich-lich-su/ho-hoan-kiem.png",
    distance: "800m",
  },
  {
    id: 6,
    title: "Bảo tàng Phụ nữ Việt Nam",
    address: "36 Lý Thường Kiệt, Hoàn Kiếm",
    image: "/di-tich-lich-su/lang-co-duong-lam.png",
    distance: "600m",
  },
  {
    id: 7,
    title: "Bảo tàng Hồ Chí Minh",
    address: "19 Ngọc Hà, phường Ba Đình",
    image: "/di-tich-lich-su/thanh-co-loa.png",
    distance: "1.5km",
  },
  {
    id: 8,
    title: "Bảo tàng Thiên nhiên Việt Nam",
    address: "18 Hoàng Quốc Việt, phường Cầu Giấy",
    image: "/di-tich-lich-su/vuon-quoc-gia-ba-vi.png",
    distance: "2km",
  },
];
