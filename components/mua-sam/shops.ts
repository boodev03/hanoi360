export type ShopCategory = "trung-tam-thuong-mai" | "cho-truyen-thong" | "cua-hang-tien-loi" | "sieu-thi";

export type Shop = {
  id: number;
  name: string;
  address: string;
  distance: string;
  category: ShopCategory;
  photo: string;
};

export function getShop(id: number) {
  return SHOPS.find((shop) => shop.id === id);
}

export const CATEGORIES: { key: ShopCategory; label: string; icon: string }[] = [
  { key: "trung-tam-thuong-mai", label: "Trung tâm\nthương mại", icon: "/mua-sam/cat-trung-tam-thuong-mai.png" },
  { key: "cho-truyen-thong", label: "Chợ truyền thống", icon: "/mua-sam/cat-cho-truyen-thong.png" },
  { key: "cua-hang-tien-loi", label: "Cửa hàng\ntiện lợi", icon: "/mua-sam/cat-cua-hang-tien-loi.png" },
  { key: "sieu-thi", label: "Siêu thị", icon: "/mua-sam/cat-sieu-thi.png" },
];

export const SHOPS: Shop[] = [
  {
    id: 1,
    name: "Lotte Mall West Lake Hanoi",
    address: "272 Lạc Long Quân, phường Xuân La, Tây Hồ",
    distance: "250m",
    category: "trung-tam-thuong-mai",
    photo: "/mua-sam/lotte-mall-west-lake.png",
  },
  {
    id: 2,
    name: "Chợ hoa đêm Quảng Bá",
    address: "Đường Âu Cơ, phường Quảng An, Tây Hồ",
    distance: "400m",
    category: "cho-truyen-thong",
    photo: "/mua-sam/cho-hoa-dem-quang-ba.png",
  },
  {
    id: 3,
    name: "GS25 (Trích Sài)",
    address: "Phố Trích Sài, phường Bưởi, Tây Hồ",
    distance: "500m",
    category: "cua-hang-tien-loi",
    photo: "/mua-sam/gs25-trich-sai.png",
  },
  {
    id: 4,
    name: "Circle K (Hàng Bông)",
    address: "Phố Hàng Bông, Hoàn Kiếm",
    distance: "600m",
    category: "cua-hang-tien-loi",
    photo: "/mua-sam/circle-k-hang-bong.png",
  },
  {
    id: 5,
    name: "Chợ Đồng Xuân",
    address: "Phố Đồng Xuân, Hoàn Kiếm",
    distance: "750m",
    category: "cho-truyen-thong",
    photo: "/mua-sam/cho-dong-xuan.png",
  },
  {
    id: 6,
    name: "WinMart+ (Núi Trúc)",
    address: "Phố Núi Trúc, Ba Đình",
    distance: "850m",
    category: "sieu-thi",
    photo: "/mua-sam/winmart-plus-nui-truc.png",
  },
  {
    id: 7,
    name: "Chợ Hôm - Đức Viên",
    address: "Phố Huế, Hai Bà Trưng",
    distance: "950m",
    category: "cho-truyen-thong",
    photo: "/mua-sam/cho-hom-duc-vien.png",
  },
  {
    id: 8,
    name: "Big C Thăng Long",
    address: "222 Trần Duy Hưng, Cầu Giấy",
    distance: "1.1km",
    category: "sieu-thi",
    photo: "/mua-sam/big-c-thang-long.png",
  },
  {
    id: 9,
    name: "FujiMart (Lê Duẩn)",
    address: "Phố Lê Duẩn, Đống Đa",
    distance: "1.3km",
    category: "sieu-thi",
    photo: "/mua-sam/fujimart-le-duan.png",
  },
  {
    id: 10,
    name: "WinMart (Times City)",
    address: "458 Minh Khai, Hai Bà Trưng",
    distance: "1.5km",
    category: "sieu-thi",
    photo: "/mua-sam/winmart-times-city.png",
  },
  {
    id: 11,
    name: "AEON Mall Long Biên",
    address: "27 Cổ Linh, Long Biên",
    distance: "1.8km",
    category: "trung-tam-thuong-mai",
    photo: "/mua-sam/aeon-mall-long-bien.png",
  },
];
