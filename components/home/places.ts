export type Place = {
  id: number;
  title: string;
  address: string;
  distance: string;
};

export const PLACES: Place[] = [
  { id: 1, title: "Di tích Nhà tù Hỏa Lò", address: "1 Phố Hoả Lò, phường Hoàn Kiếm.", distance: "250m" },
  { id: 2, title: "Hồ Gươm", address: "Phố Đinh Tiên Hoàng, phường Hoàn Kiếm.", distance: "480m" },
  { id: 3, title: "Chợ Đồng Xuân", address: "Phố Đồng Xuân, phường Hoàn Kiếm.", distance: "620m" },
  { id: 4, title: "Nhà thờ Lớn Hà Nội", address: "40 Phố Nhà Chung, phường Hoàn Kiếm.", distance: "700m" },
];
