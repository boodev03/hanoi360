export type MuseumCategory = "culture-art" | "history-society" | "military-security" | "science-nature";

export type Museum = {
  id: number;
  title: string;
  address: string;
  image: string;
  distance: string;
  category: MuseumCategory;
};

export const CATEGORIES: { key: MuseumCategory; label: string; image: string }[] = [
  { key: "culture-art", label: "Văn hoá\nNghệ thuật", image: "/bao-tang/nghe-thuat.png" },
  { key: "history-society", label: "Lịch sử\nXã hội", image: "/bao-tang/lich-su-xa-hoi.png" },
  { key: "military-security", label: "Quân sự\nAn ninh", image: "/bao-tang/an-ninh.png" },
  { key: "science-nature", label: "Khoa học\nTự nhiên", image: "/bao-tang/khtn.png" },
];

export const MUSEUMS: Museum[] = [
  {
    id: 1,
    title: "Bảo tàng Dân tộc học Việt Nam",
    address: "Đường Nguyễn Văn Huyên, phường Cầu Giấy",
    image: "/di-tich-lich-su/di-tich-hoa-lo.png",
    distance: "250m",
    category: "culture-art",
  },
  {
    id: 2,
    title: "Bảo tàng Hà Nội",
    address: "Phạm Hùng, phường Nam Từ Liêm",
    image: "/di-tich-lich-su/ho-tay.png",
    distance: "250m",
    category: "history-society",
  },
  {
    id: 3,
    title: "Bảo tàng Lịch sử Quốc gia",
    address: "1 Tràng Tiền & 216 Trần Quang Khải, Hoàn Kiếm",
    image: "/di-tich-lich-su/chua-mot-cot.png",
    distance: "250m",
    category: "history-society",
  },
  {
    id: 4,
    title: "Bảo tàng Mỹ thuật Việt Nam",
    address: "66 Nguyễn Thái Học, phường Ba Đình",
    image: "/di-tich-lich-su/chua-tran-quoc.png",
    distance: "250m",
    category: "culture-art",
  },
  {
    id: 5,
    title: "Bảo tàng Lịch sử Quân sự Việt Nam",
    address: "Đại lộ Thăng Long, phường Nam Từ Liêm",
    image: "/di-tich-lich-su/ho-hoan-kiem.png",
    distance: "800m",
    category: "military-security",
  },
  {
    id: 6,
    title: "Bảo tàng Phụ nữ Việt Nam",
    address: "36 Lý Thường Kiệt, Hoàn Kiếm",
    image: "/di-tich-lich-su/lang-co-duong-lam.png",
    distance: "600m",
    category: "history-society",
  },
  {
    id: 7,
    title: "Bảo tàng Hồ Chí Minh",
    address: "19 Ngọc Hà, phường Ba Đình",
    image: "/di-tich-lich-su/thanh-co-loa.png",
    distance: "1.5km",
    category: "history-society",
  },
  {
    id: 8,
    title: "Bảo tàng Thiên nhiên Việt Nam",
    address: "18 Hoàng Quốc Việt, phường Cầu Giấy",
    image: "/di-tich-lich-su/vuon-quoc-gia-ba-vi.png",
    distance: "2km",
    category: "science-nature",
  },
];
