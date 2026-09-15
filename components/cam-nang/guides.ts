export type Guide = {
  id: number;
  title: string;
  photo: string;
  category: "itinerary" | "heritage" | "season" | "food";
  accentColor: string;
};

export const GUIDES: Guide[] = [
  {
    id: 1,
    title: "2 ngày 1 đêm khám phá Hà Nội",
    photo: "/cam-nang/2-ngay-1-dem.png",
    category: "itinerary",
    accentColor: "#00dac5",
  },
  {
    id: 2,
    title: "3 ngày 2 đêm khám phá Hà Nội",
    photo: "/cam-nang/3-ngay-2-dem.png",
    category: "itinerary",
    accentColor: "#00dac5",
  },
  {
    id: 3,
    title: "Du lịch gia đình - những địa điểm vui chơi phù hợp với trẻ em",
    photo: "/cam-nang/du-lich-gia-dinh.png",
    category: "itinerary",
    accentColor: "#00dac5",
  },
  {
    id: 4,
    title: "1 ngày tại HN, ăn gì? chơi gì?",
    photo: "/cam-nang/1-ngay-tai-ha-noi.png",
    category: "itinerary",
    accentColor: "#00dac5",
  },
  {
    id: 5,
    title: "Food tour đêm tại quận Hoàn Kiếm",
    photo: "/cam-nang/am-thuc-tour/food-tour.png",
    category: "food",
    accentColor: "#f2d79f",
  },
  {
    id: 6,
    title: "Ẩm thực đường phố Hà Nội",
    photo: "/cam-nang/am-thuc-tour/am-thuc-chay.png",
    category: "food",
    accentColor: "#f2d79f",
  },
  {
    id: 7,
    title: "Top quán cà phê phố cổ",
    photo: "/cam-nang/am-thuc-tour/top-cafe.png",
    category: "food",
    accentColor: "#f2d79f",
  },
  {
    id: 8,
    title: "Food tour khám phá ẩm thực",
    photo: "/cam-nang/am-thuc-tour/food-tour-2.png",
    category: "food",
    accentColor: "#f2d79f",
  },
  {
    id: 9,
    title: "Tết ở Hà Nội ăn gì? chơi gì?",
    photo: "/cam-nang/le-hoi/tet.png",
    category: "season",
    accentColor: "#004942",
  },
  {
    id: 10,
    title: "Mùa xuân Hà Nội",
    photo: "/cam-nang/le-hoi/mua-xuan.png",
    category: "season",
    accentColor: "#004942",
  },
  {
    id: 11,
    title: "Mùa thu phố cổ",
    photo: "/cam-nang/le-hoi/mua-thu.jpg",
    category: "season",
    accentColor: "#004942",
  },
  {
    id: 12,
    title: "Trekking mùa lễ hội",
    photo: "/cam-nang/le-hoi/treckking.png",
    category: "season",
    accentColor: "#004942",
  },
  {
    id: 13,
    title: "Chùa Hà Nội",
    photo: "/cam-nang/hanh-trinh/chua-ha-noiu.png",
    category: "heritage",
    accentColor: "#00dac5",
  },
  {
    id: 14,
    title: "Làng nghề phố cổ",
    photo: "/cam-nang/hanh-trinh/lang-nghe-pho-co.png",
    category: "heritage",
    accentColor: "#00dac5",
  },
  {
    id: 15,
    title: "Nghệ thuật truyền thống",
    photo: "/cam-nang/hanh-trinh/nghe-thuat-truyen-thong.png",
    category: "heritage",
    accentColor: "#00dac5",
  },
  {
    id: 16,
    title: "Thăng Long Hà Nội",
    photo: "/cam-nang/hanh-trinh/thang-long.png",
    category: "heritage",
    accentColor: "#00dac5",
  },
  {
    id: 17,
    title: "Thơ mẫu Hà Nội",
    photo: "/cam-nang/hanh-trinh/tho-mau-ha-noi.png",
    category: "heritage",
    accentColor: "#00dac5",
  },
];
