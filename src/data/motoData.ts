export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  model: string;
  avatar: string;
  likes: number;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  cc: number;
  power: number;
  weight: number;
  inStock: boolean;
  description: string;
}

export const CATEGORIES = ['Все', 'Спортивные', 'Круизеры', 'Эндуро', 'Скутеры', 'Туристические'];

export const products: Product[] = [
  {
    id: 1,
    name: 'CBR600RR',
    brand: 'Honda',
    price: 1_290_000,
    oldPrice: 1_450_000,
    rating: 4.8,
    reviewCount: 47,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Спортивные',
    isSale: true,
    cc: 599,
    power: 120,
    weight: 194,
    inStock: true,
    description: 'Легендарный суперспорт Honda с идеальным балансом мощности и управляемости.',
  },
  {
    id: 2,
    name: 'MT-09',
    brand: 'Yamaha',
    price: 980_000,
    rating: 4.7,
    reviewCount: 63,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Спортивные',
    isNew: true,
    cc: 889,
    power: 119,
    weight: 193,
    inStock: true,
    description: 'Трёхцилиндровый naked-байк с агрессивным характером и современной электроникой.',
  },
  {
    id: 3,
    name: 'Fat Boy 114',
    brand: 'Harley-Davidson',
    price: 2_150_000,
    rating: 4.9,
    reviewCount: 31,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Круизеры',
    cc: 1868,
    power: 98,
    weight: 317,
    inStock: true,
    description: 'Иконический американский круизер с огромным V-Twin двигателем и культовым стилем.',
  },
  {
    id: 4,
    name: 'KTM 690 Enduro R',
    brand: 'KTM',
    price: 1_120_000,
    oldPrice: 1_250_000,
    rating: 4.6,
    reviewCount: 28,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Эндуро',
    isSale: true,
    cc: 692,
    power: 75,
    weight: 149,
    inStock: true,
    description: 'Профессиональный эндуро для экстремального бездорожья и длительных путешествий.',
  },
  {
    id: 5,
    name: 'Forza 750',
    brand: 'Honda',
    price: 760_000,
    rating: 4.5,
    reviewCount: 19,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Скутеры',
    isNew: true,
    cc: 745,
    power: 58,
    weight: 233,
    inStock: false,
    description: 'Флагманский макси-скутер с двухцилиндровым двигателем и максимальным комфортом.',
  },
  {
    id: 6,
    name: 'R 1250 GS Adventure',
    brand: 'BMW',
    price: 2_890_000,
    rating: 4.9,
    reviewCount: 55,
    image: 'https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg',
    category: 'Туристические',
    cc: 1254,
    power: 136,
    weight: 268,
    inStock: true,
    description: 'Король туристических эндуро. Непревзойдённые возможности на любом покрытии.',
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    author: 'Алексей Морозов',
    rating: 5,
    date: '12 апреля 2026',
    text: 'Заказывал Honda CBR600RR — доставили за 3 дня, упаковка отличная. Байк пришёл в идеальном состоянии, все документы в порядке. Менеджер помог с выбором аксессуаров. Однозначно рекомендую!',
    verified: true,
    model: 'Honda CBR600RR',
    avatar: 'А',
    likes: 24,
  },
  {
    id: 2,
    author: 'Дмитрий Волков',
    rating: 5,
    date: '8 апреля 2026',
    text: 'Брал BMW R 1250 GS Adventure для кругосветки. Магазин помог с настройкой под длительные путешествия, установили дополнительные кофры и защиту. Цена ниже дилерской на 15%. Отличный сервис!',
    verified: true,
    model: 'BMW R 1250 GS Adventure',
    avatar: 'Д',
    likes: 18,
  },
  {
    id: 3,
    author: 'Сергей Петров',
    rating: 4,
    date: '2 апреля 2026',
    text: 'Yamaha MT-09 — зверь машина. Магазин хороший, но пришлось немного подождать с доставкой (4 дня вместо 3). В остальном всё на высоте: цена, комплект, общение с менеджером.',
    verified: true,
    model: 'Yamaha MT-09',
    avatar: 'С',
    likes: 11,
  },
  {
    id: 4,
    author: 'Кирилл Захаров',
    rating: 5,
    date: '28 марта 2026',
    text: 'Купил KTM 690 Enduro R со скидкой 10%. Всё чётко: связались быстро, объяснили условия гарантии, помогли с оформлением кредита. Байк уже проехал 500 км по бездорожью — полный восторг!',
    verified: true,
    model: 'KTM 690 Enduro R',
    avatar: 'К',
    likes: 9,
  },
  {
    id: 5,
    author: 'Михаил Иванов',
    rating: 5,
    date: '19 марта 2026',
    text: 'Harley Fat Boy — мечта сбылась! Долго выбирал, консультант был терпелив и профессионален. Оформили в кредит на выгодных условиях. Огромное спасибо команде МотоМира!',
    verified: false,
    model: 'Harley-Davidson Fat Boy 114',
    avatar: 'М',
    likes: 33,
  },
  {
    id: 6,
    author: 'Наталья Белова',
    rating: 5,
    date: '10 марта 2026',
    text: 'Первый мотоцикл взяла здесь — Honda Forza 750. Ребята помогли выбрать, не навязывали дорогие варианты. Предложили курсы вождения для начинающих. Сервис на 10 из 10!',
    verified: true,
    model: 'Honda Forza 750',
    avatar: 'Н',
    likes: 15,
  },
];

export const promotions = [
  {
    id: 1,
    title: 'СЕЗОН ОТКРЫТ',
    subtitle: 'Скидки до 20% на спортивные',
    desc: 'Только до 1 мая 2026 года',
    badge: 'ДО 20%',
    color: '#FF7A00',
  },
  {
    id: 2,
    title: 'РАССРОЧКА 0%',
    subtitle: 'На 12 месяцев без переплат',
    desc: 'На всю линейку круизеров',
    badge: '0%',
    color: '#3B82F6',
  },
  {
    id: 3,
    title: 'TRADE-IN',
    subtitle: 'Обменяй старый байк',
    desc: 'Скидка до 150 000 ₽ на новый',
    badge: '−150K',
    color: '#10B981',
  },
];
