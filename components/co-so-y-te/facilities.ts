export type FacilityCategory = "benh-vien" | "phong-kham" | "tram-y-te" | "tiem-chung";

export type Facility = {
  id: number;
  name: string;
  address: string;
  distance: string;
  category: FacilityCategory;
  photo: string;
};

export const CATEGORIES: { key: FacilityCategory; label: string; icon: string }[] = [
  { key: "benh-vien", label: "Bệnh viện", icon: "/co-so-y-te/cat-benh-vien.png" },
  { key: "phong-kham", label: "Phòng khám", icon: "/co-so-y-te/cat-phong-kham.png" },
  { key: "tram-y-te", label: "Trạm y tế", icon: "/co-so-y-te/cat-tram-y-te.png" },
  { key: "tiem-chung", label: "Tiêm chủng", icon: "/co-so-y-te/cat-tiem-chung.png" },
];

export const FACILITIES: Facility[] = [
  {
    id: 1,
    name: "Trạm Y tế phường Phú Thượng",
    address: "Phường Phú Thượng, Tây Hồ",
    distance: "250m",
    category: "tram-y-te",
    photo: "/co-so-y-te/tram-y-te-phu-thuong.png",
  },
  {
    id: 2,
    name: "Trạm y tế phường Tây Hồ",
    address: "Phường Tây Hồ, Tây Hồ",
    distance: "350m",
    category: "tram-y-te",
    photo: "/co-so-y-te/tram-y-te-tay-ho.png",
  },
  {
    id: 3,
    name: "Phòng khám đa khoa Hồng Ngọc Tây Hồ",
    address: "132 Xuân Diệu, Tây Hồ",
    distance: "500m",
    category: "phong-kham",
    photo: "/co-so-y-te/phong-kham-hong-ngoc.png",
  },
  {
    id: 4,
    name: "Phòng Khám Đa Khoa Medlatec Tây Hồ",
    address: "Đường Âu Cơ, Tây Hồ",
    distance: "600m",
    category: "phong-kham",
    photo: "/co-so-y-te/phong-kham-medlatec.png",
  },
  {
    id: 5,
    name: "Hanoi Petcare Clinic",
    address: "116 Xuân Diệu, Tây Hồ",
    distance: "700m",
    category: "phong-kham",
    photo: "/co-so-y-te/hanoi-petcare-clinic.png",
  },
  {
    id: 6,
    name: "Bệnh viện Thú y Asvelis",
    address: "68 Trần Thái Tông, Cầu Giấy",
    distance: "850m",
    category: "benh-vien",
    photo: "/co-so-y-te/benh-vien-thu-y-asvelis.png",
  },
  {
    id: 7,
    name: "Trung tâm tiêm chủng VNVC Lạc Long Quân",
    address: "180 Lạc Long Quân, Tây Hồ",
    distance: "950m",
    category: "tiem-chung",
    photo: "/co-so-y-te/vnvc-lac-long-quan.png",
  },
  {
    id: 8,
    name: "Bệnh viện Đa Khoa Xanh Pôn",
    address: "12 Chu Văn An, Ba Đình",
    distance: "1.1km",
    category: "benh-vien",
    photo: "/co-so-y-te/benh-vien-xanh-pon.png",
  },
  {
    id: 9,
    name: "Trạm Y tế phường Ba Đình",
    address: "Phường Ba Đình, Ba Đình",
    distance: "1.3km",
    category: "tram-y-te",
    photo: "/co-so-y-te/tram-y-te-ba-dinh.png",
  },
  {
    id: 10,
    name: "Family Medical Practice (FMP) Hà Nội",
    address: "298I Kim Mã, Ba Đình",
    distance: "1.5km",
    category: "phong-kham",
    photo: "/co-so-y-te/fmp-ha-noi.png",
  },
  {
    id: 11,
    name: "Trung Tâm Kiểm Dịch Y Tế Quốc Tế",
    address: "35 Trần Bình, Cầu Giấy",
    distance: "1.8km",
    category: "tiem-chung",
    photo: "/co-so-y-te/trung-tam-kiem-dich-y-te.png",
  },
];
