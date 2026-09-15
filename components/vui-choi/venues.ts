export type VenueCategory = "trekking-tour" | "cong-vien" | "pho-di-bo" | "khu-vui-choi";

export type Venue = {
  id: number;
  name: string;
  address: string;
  distance: string;
  category: VenueCategory;
  photo: string;
};

export const CATEGORIES: { key: VenueCategory; label: string; icon: string }[] = [
  { key: "trekking-tour", label: "Trekking tour", icon: "/vui-choi/cat-trekking-tour.png" },
  { key: "cong-vien", label: "Công viên", icon: "/vui-choi/cat-cong-vien.png" },
  { key: "pho-di-bo", label: "Phố đi bộ", icon: "/vui-choi/cat-pho-di-bo.png" },
  { key: "khu-vui-choi", label: "Khu vui chơi", icon: "/vui-choi/cat-khu-vui-choi.png" },
];

export const VENUES: Venue[] = [
  {
    id: 1,
    name: "Lotte World Aquarium Hà Nội (Thủy cung Lotte Mall)",
    address: "Núi Câu Lâu, xã Thạch Xá, huyện Thạch Thất",
    distance: "250m",
    category: "khu-vui-choi",
    photo: "/vui-choi/lotte-aquarium.png",
  },
  {
    id: 2,
    name: "Công viên Bách Thảo",
    address: "3 Hoàng Hoa Thám, Ba Đình, Hà Nội.",
    distance: "300m",
    category: "cong-vien",
    photo: "/vui-choi/cong-vien-bach-thao.png",
  },
  {
    id: 3,
    name: "Phố đi bộ Hồ Gươm",
    address: "Quanh khu vực Hồ Hoàn Kiếm, Hà Nội.",
    distance: "450m",
    category: "pho-di-bo",
    photo: "/vui-choi/pho-di-bo-ho-guom.png",
  },
  {
    id: 4,
    name: "Jump Arena",
    address: "Số 1 Tăng Bạt Hổ, Phạm Đình Hổ, Hai Bà Trưng",
    distance: "600m",
    category: "khu-vui-choi",
    photo: "/vui-choi/jump-arena.png",
  },
  {
    id: 5,
    name: "Tổ hợp Complex 01",
    address: "Ngõ 167 Tây Sơn, Quang Trung, Đống Đa, Hà Nội.",
    distance: "750m",
    category: "khu-vui-choi",
    photo: "/vui-choi/complex-01.png",
  },
  {
    id: 6,
    name: "Công viên Yên Sở",
    address: "QL1A, Cụm Gamuda Central, Hoàng Mai, Hà Nội.",
    distance: "900m",
    category: "cong-vien",
    photo: "/vui-choi/cong-vien-yen-so.png",
  },
  {
    id: 7,
    name: "Trekking vườn quốc gia Ba Vì",
    address: "Huyện Ba Vì, Hà Nội.",
    distance: "1.1km",
    category: "trekking-tour",
    photo: "/vui-choi/trekking-ba-vi.png",
  },
  {
    id: 8,
    name: "Phố đi bộ Thành cổ Sơn Tây",
    address: "Xã Cổ Loa, huyện Đông Anh",
    distance: "1.3km",
    category: "pho-di-bo",
    photo: "/vui-choi/pho-di-bo-son-tay.png",
  },
  {
    id: 9,
    name: "Trekking Núi Hàm Lợn",
    address: "Dãy Độc Tôn, Huyện Sóc Sơn, Hà Nội.",
    distance: "1.5km",
    category: "trekking-tour",
    photo: "/vui-choi/trekking-ham-lon.png",
  },
];
