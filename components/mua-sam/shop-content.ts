import type { DetailBlock } from "../shared/detail-content";
import type { Shop } from "./shops";

const HIGHLIGHTS_BY_CATEGORY: Record<Shop["category"], string[]> = {
  "trung-tam-thuong-mai": [
    "Khu mua sắm, ăn uống và giải trí trong cùng một tòa nhà",
    "Nhiều thương hiệu thời trang và công nghệ trong nước, quốc tế",
    "Rạp chiếu phim và khu vui chơi cho trẻ em",
    "Bãi đỗ xe rộng rãi, miễn phí giờ gửi cho khách mua hàng",
  ],
  "cho-truyen-thong": [
    "Đặc sản, hoa tươi và nông sản theo mùa",
    "Giá cả phải chăng, có thể thương lượng",
    "Không khí chợ truyền thống đặc trưng của Hà Nội",
    "Nhộn nhịp nhất vào sáng sớm và buổi tối",
  ],
  "cua-hang-tien-loi": [
    "Mở cửa 24/7, kể cả ngày lễ",
    "Đồ ăn nhanh, cà phê và hàng tiêu dùng thiết yếu",
    "Thanh toán không tiền mặt, nạp thẻ điện thoại",
    "Giao hàng tận nơi qua ứng dụng",
  ],
  "sieu-thi": [
    "Thực phẩm tươi sống được nhập mỗi ngày",
    "Chương trình khuyến mãi và giảm giá cuối tuần",
    "Đa dạng hàng hóa gia dụng, mỹ phẩm, đồ dùng học tập",
    "Quầy đồ ăn liền và bánh tươi trong ngày",
  ],
};

const INTRO_BY_CATEGORY: Record<Shop["category"], string> = {
  "trung-tam-thuong-mai": "là trung tâm thương mại hiện đại, tập trung nhiều thương hiệu lớn cùng khu ẩm thực và giải trí phù hợp cho cả gia đình vào cuối tuần.",
  "cho-truyen-thong": "là khu chợ truyền thống lâu đời của địa phương, nơi bạn có thể tìm thấy đặc sản tươi ngon với giá bình dân và cảm nhận nhịp sống thường nhật của người Hà Nội.",
  "cua-hang-tien-loi": "là cửa hàng tiện lợi phục vụ nhanh mọi nhu cầu thiết yếu, từ đồ ăn nhẹ, nước uống đến đồ dùng sinh hoạt, phù hợp khi bạn cần mua gấp.",
  "sieu-thi": "là siêu thị quy mô lớn với đầy đủ ngành hàng, giúp bạn hoàn thành việc mua sắm cho cả tuần chỉ trong một chuyến đi.",
};

export function getShopContent(shop: Shop): DetailBlock[] {
  return [
    {
      type: "text",
      parts: [
        { text: shop.name, bold: true },
        {
          text: ` nằm tại ${shop.address}, Hà Nội, cách bạn khoảng ${shop.distance}. Đây ${INTRO_BY_CATEGORY[shop.category]}`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Không gian bên trong được bố trí theo từng khu rõ ràng, dễ tìm hàng. Nhân viên hỗ trợ nhiệt tình và quầy thu ngân hoạt động liên tục trong giờ cao điểm.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Mẹo nhỏ: ", italic: true },
        {
          text: "cuối tuần thường đông khách, hãy ghé vào buổi sáng hoặc đầu giờ chiều để mua sắm thoải mái hơn.",
          italic: true,
        },
      ],
    },
    { type: "image", src: shop.photo, alt: shop.name },
    {
      type: "text",
      parts: [{ text: "Điểm nổi bật", bold: true }],
    },
    {
      type: "list",
      items: HIGHLIGHTS_BY_CATEGORY[shop.category].map((highlight) => [{ text: highlight }]),
    },
    {
      type: "text",
      parts: [{ text: "Kinh nghiệm mua sắm", bold: true }],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Chuẩn bị danh sách đồ cần mua để tiết kiệm thời gian" }],
        [{ text: "Kiểm tra chương trình ưu đãi trong ngày trước khi thanh toán" }],
        [{ text: "Mang theo túi vải hoặc giỏ đựng để tiện di chuyển" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${shop.address}, Hà Nội. ` },
        { text: `Chỉ khoảng ${shop.distance} từ vị trí của bạn, rất thuận tiện để ghé qua.` },
      ],
    },
  ];
}
