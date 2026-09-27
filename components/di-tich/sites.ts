export type Site = {
  id: number;
  name: string;
  subtitle: string;
  distance: string;
  photo: string;
};

export function getSite(id: number) {
  return SITES.find((site) => site.id === id);
}

export const SITES: Site[] = [
  {
    id: 1,
    name: "Hồ Tây",
    subtitle: "Phường Tây Hồ.",
    distance: "250m",
    photo: "/di-tich-lich-su/ho-tay.png",
  },
  {
    id: 2,
    name: "Chùa Trấn Quốc",
    subtitle: "Phường Tây Hồ.",
    distance: "800m",
    photo: "/di-tich-lich-su/chua-tran-quoc.png",
  },
  {
    id: 3,
    name: "Di tích Nhà tù Hỏa Lò",
    subtitle: "Phường Hoàn Kiếm.",
    distance: "4.2km",
    photo: "/di-tich-lich-su/di-tich-hoa-lo.png",
  },
  {
    id: 4,
    name: "Chùa Một Cột (Diên Hựu tự)",
    subtitle: "Phường Ba Đình.",
    distance: "3.8km",
    photo: "/di-tich-lich-su/chua-mot-cot.png",
  },
  {
    id: 5,
    name: "Hồ Hoàn Kiếm (Hồ Gươm)",
    subtitle: "Phường Hoàn Kiếm.",
    distance: "4.5km",
    photo: "/di-tich-lich-su/ho-hoan-kiem.png",
  },
  {
    id: 6,
    name: "Vườn Quốc gia Ba Vì",
    subtitle: "Huyện Ba Vì.",
    distance: "48km",
    photo: "/di-tich-lich-su/vuon-quoc-gia-ba-vi.png",
  },
  {
    id: 7,
    name: "Thành Cổ Loa",
    subtitle: "Huyện Đông Anh.",
    distance: "24km",
    photo: "/di-tich-lich-su/thanh-co-loa.png",
  },
  {
    id: 8,
    name: "Làng cổ Đường Lâm",
    subtitle: "Thị xã Sơn Tây.",
    distance: "44km",
    photo: "/di-tich-lich-su/lang-co-duong-lam.png",
  },
];
