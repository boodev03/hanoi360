const CONTACTS = [
  { label: "Hotline", number: "19008888", color: "#009B8C" },
  { label: "Cấp cứu", number: "115", color: "#BA1A1A" },
  { label: "Cứu hoả", number: "114", color: "#BA1A1A" },
  { label: "Cảnh sát", number: "113", color: "#BA1A1A" },
];

export function EmergencyTab() {
  return (
    <div className="flex flex-col gap-2 px-4 py-4">
      {CONTACTS.map((contact) => (
        <div
          key={contact.label}
          className="flex items-center justify-between gap-3 bg-white px-6 py-5"
        >
          <span className="text-base font-semibold" style={{ color: contact.color }}>
            {contact.label}
          </span>
          <a
            href={`tel:${contact.number}`}
            className="flex w-1/2 items-center justify-center rounded border border-[#9B9B9B] px-3 py-2 text-base"
            style={{ color: contact.color }}
          >
            {contact.number}
          </a>
        </div>
      ))}
    </div>
  );
}
