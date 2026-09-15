const CONTACTS = [
  { label: "Hotline", number: "19008888", color: "#009b8c" },
  { label: "Cấp cứu", number: "115", color: "#e53935" },
  { label: "Cứu hoả", number: "114", color: "#f57c00" },
  { label: "Cảnh sát", number: "113", color: "#c0392b" },
];

export function EmergencyTab() {
  return (
    <div className="px-4 py-4">
      <p className="text-sm leading-relaxed text-[#58585c]">
        Hà Nội luôn sẵn sàng hỗ trợ bạn. Dưới đây là các số liên hệ hữu ích khi bạn cần giúp đỡ.
      </p>

      <div className="mt-5 flex flex-col gap-4">
        {CONTACTS.map((contact) => (
          <div key={contact.label} className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold" style={{ color: contact.color }}>
              {contact.label}
            </span>
            <a
              href={`tel:${contact.number}`}
              className="flex h-10 w-36 items-center rounded-lg border border-[#e5e5e4] px-3 text-sm text-[#252525]"
            >
              {contact.number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
