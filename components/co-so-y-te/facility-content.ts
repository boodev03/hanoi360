import type { DetailBlock } from "../shared/detail-content";
import type { Facility } from "./facilities";

const SERVICES_BY_CATEGORY: Record<Facility["category"], string[]> = {
  "benh-vien": [
    "Cấp cứu và hồi sức 24/7",
    "Khám và điều trị đa khoa",
    "Xét nghiệm, chẩn đoán hình ảnh hiện đại",
    "Phẫu thuật và điều trị nội trú",
    "Bảo hiểm y tế và bảo lãnh viện phí",
  ],
  "phong-kham": [
    "Khám đa khoa theo lịch hẹn",
    "Tư vấn sức khỏe định kỳ và khám tổng quát",
    "Xét nghiệm máu, siêu âm tại chỗ",
    "Bác sĩ giàu kinh nghiệm, ít thời gian chờ",
  ],
  "tram-y-te": [
    "Khám chữa bệnh ban đầu cho người dân",
    "Tiêm phòng mở rộng miễn phí",
    "Quản lý sức khỏe cộng đồng",
    "Cấp phát thuốc theo đơn cơ bản",
  ],
  "tiem-chung": [
    "Tiêm chủng trẻ em và người lớn",
    "Tư vấn lịch tiêm cá nhân hóa",
    "Vắc xin nhập khẩu, bảo quản đạt chuẩn lạnh",
    "Theo dõi sau tiêm 30 phút tại chỗ",
  ],
};

const NOTES_BY_CATEGORY: Record<Facility["category"], string> = {
  "benh-vien": "Bệnh viện thường đông vào buổi sáng đầu tuần. Nếu không cấp cứu, bạn nên đặt lịch trước qua tổng đài hoặc đến vào buổi chiều để rút ngắn thời gian chờ.",
  "phong-kham": "Phòng khám nhận đặt lịch qua điện thoại. Đến đúng giờ hẹn giúp bạn được khám ngay mà không phải chờ lâu.",
  "tram-y-te": "Trạm y tế phù hợp với các bệnh thông thường và tiêm phòng cơ bản. Với ca bệnh phức tạp, bạn sẽ được chuyển tuyến lên bệnh viện.",
  "tiem-chung": "Sau khi tiêm, bạn sẽ được theo dõi tại chỗ khoảng 30 phút. Hãy mang theo sổ tiêm chủng nếu có.",
};

export function getFacilityContent(facility: Facility): DetailBlock[] {
  return [
    {
      type: "text",
      parts: [
        { text: facility.name, bold: true },
        {
          text: ` tọa lạc tại ${facility.address}, Hà Nội, chỉ cách bạn khoảng ${facility.distance}. Đây là cơ sở y tế uy tín trong khu vực, đáp ứng nhu cầu chăm sóc sức khỏe hằng ngày của người dân quanh phường và các quận lân cận.`,
        },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Cơ sở có đội ngũ y bác sĩ tận tâm, trang thiết bị được đầu tư đồng bộ và quy trình tiếp đón rõ ràng. Người bệnh được hướng dẫn từ khâu đăng ký, khám lâm sàng đến thanh toán và nhận thuốc.",
        },
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Gợi ý cho bạn: ", italic: true },
        { text: NOTES_BY_CATEGORY[facility.category], italic: true },
      ],
    },
    { type: "image", src: facility.photo, alt: facility.name },
    {
      type: "text",
      parts: [{ text: "Dịch vụ nổi bật", bold: true }],
    },
    {
      type: "list",
      items: SERVICES_BY_CATEGORY[facility.category].map((service) => [{ text: service }]),
    },
    {
      type: "text",
      parts: [
        { text: "Khi đến khám, bạn nên chuẩn bị:" },
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [{ text: "Giấy tờ tùy thân và thẻ bảo hiểm y tế (nếu có)", bold: false }],
        [{ text: "Sổ khám bệnh hoặc kết quả xét nghiệm cũ liên quan" }],
        [{ text: "Danh sách thuốc đang sử dụng để bác sĩ nắm rõ" }],
      ],
    },
    {
      type: "text",
      parts: [
        { text: "Địa chỉ: ", bold: true },
        { text: `${facility.address}, Hà Nội. ` },
        { text: `Cách bạn khoảng ${facility.distance}, có thể đi bộ hoặc di chuyển bằng xe máy trong vài phút.` },
      ],
    },
    {
      type: "text",
      parts: [
        {
          text: "Thông tin trên chỉ mang tính tham khảo. Vui lòng liên hệ trực tiếp cơ sở y tế để biết lịch làm việc chính xác và các dịch vụ hiện có.",
          italic: true,
        },
      ],
    },
  ];
}
