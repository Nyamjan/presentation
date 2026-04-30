export const scheduleItems = [
  {
    title: "Нээлтийн ёслол",
    time: "09:30",
    location: "Төв талбай",
    status: "Шууд",
  },
  {
    title: "Үндэсний бөхийн 1-р даваа",
    time: "10:15",
    location: "Бөхийн дэвжээ",
    status: "Тун удахгүй",
  },
  {
    title: "Сурын харвааны финал",
    time: "12:00",
    location: "Сурын талбай",
    status: "Тун удахгүй",
  },
  {
    title: "Морин уралдааны мэдээлэл",
    time: "14:00",
    location: "Шууд дамжуулалт",
    status: "Төлөвлөгдсөн",
  },
  {
    title: "Уламжлалт хөгжмийн тоглолт",
    time: "16:30",
    location: "Соёлын тайз",
    status: "Төлөвлөгдсөн",
  },
];

export const mapLocations = [
  {
    name: "Хоолны бүс",
    category: "Хоол",
    walkTime: "4 мин",
    queue: "6 мин",
  },
  {
    name: "Хойд ариун цэврийн өрөө",
    category: "Ариун цэврийн өрөө",
    walkTime: "3 мин",
    queue: "2 мин",
  },
  {
    name: "Мэдээллийн цэг",
    category: "Мэдээлэл",
    walkTime: "2 мин",
    queue: "0 мин",
  },
  {
    name: "Анхны тусламж",
    category: "Аюулгүй байдал",
    walkTime: "5 мин",
    queue: "1 мин",
  },
  {
    name: "Бэлэг дурсгалын бүс",
    category: "Дурсгал",
    walkTime: "6 мин",
    queue: "8 мин",
  },
];

export const vendors = [
  {
    name: "Хуушуурын гэр",
    category: "Уламжлалт хоол",
    queue: "8 мин",
    price: "дунджаар ₮7,000",
  },
  {
    name: "Айрагны булан",
    category: "Ундаа",
    queue: "4 мин",
    price: "дунджаар ₮5,000",
  },
  {
    name: "Наадам дурсгалын дэлгүүр",
    category: "Дурсгал",
    queue: "3 мин",
    price: "дунджаар ₮15,000",
  },
  {
    name: "Кофе гэр",
    category: "Кафе",
    queue: "6 мин",
    price: "дунджаар ₮6,000",
  },
];

export const quickActions = [
  { label: "Газрын зураг", href: "/app/map" },
  { label: "Хоол", href: "/app/vendors" },
  { label: "Хуваарь", href: "/app/schedule" },
  { label: "Тусламж", href: "/app/safety" },
  { label: "Орчуулга", href: "/app/assistant" },
  { label: "Миний аялал", href: "/app/journey" },
];

export const incidentReports = [
  {
    type: "Алдагдсан эд зүйл",
    location: "B хэсэг",
    status: "Хуваарилагдсан",
    time: "5 минутын өмнө",
  },
  {
    type: "Эмнэлгийн тусламж",
    location: "Хоолны бүс",
    status: "Шийдэж байна",
    time: "12 минутын өмнө",
  },
  {
    type: "Олон нийтийн асуудал",
    location: "Үндсэн хаалга",
    status: "Шинэ",
    time: "2 минутын өмнө",
  },
];

export const badges = [
  {
    title: "Эхний тоглолтоо үзэв",
    status: "Авсан",
  },
  {
    title: "Уламжлалт хоол амсав",
    status: "Авсан",
  },
  {
    title: "Сурын талбайг оллоо",
    status: "Явцтай",
  },
  {
    title: "Наадмын 5 баримтыг мэдлээ",
    status: "Түгжээтэй",
  },
];

export const vendorOrders = [
  {
    id: "ND-4821",
    items: "4x хуушуур, 2x айраг",
    pickup: "12:10",
  },
  {
    id: "ND-4822",
    items: "2x кофе, 1x бууз",
    pickup: "12:14",
  },
  {
    id: "ND-4823",
    items: "3x Наадам дурсгалын багц",
    pickup: "12:18",
  },
];

export const sponsorMetrics = [
  { label: "Харагдсан тоо", value: "128K", trend: "+12%" },
  { label: "Даралт", value: "8.4K", trend: "+6%" },
  { label: "Купон авсан", value: "1,240", trend: "+9%" },
  { label: "Ашигласан", value: "620", trend: "+4%" },
];

export const analyticsHighlights = [
  {
    label: "Дээд үзэгчийн тоо",
    value: "940 үзэгч",
    detail: "12:00 - 13:00",
  },
  {
    label: "Хамгийн их хайлт",
    value: "Хойд ариун цэврийн өрөө",
    detail: "214 хайлт",
  },
  {
    label: "Шилдэг худалдаачин",
    value: "Хуушуурын гэр",
    detail: "₮4.2 сая орлого",
  },
];
