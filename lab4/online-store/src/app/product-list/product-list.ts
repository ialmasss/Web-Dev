import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 820704,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: ['', '', ''],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000'
    },

    {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
    description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов.',
    price: 439990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },

    {
    id: 3,
    name: 'Телевизор LG OLED55B4RLA 140 см черный',
    description: 'Невероятно тонкий дизайн телевизора LG OLED55B4RLA позволяет сосредоточить внимание на всем экране, не отвлекаясь на посторонние детали, и гармонично впишется в интерьер вашего дома.',
    price: 740000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/hf5/86202406764574.png?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/lg-oled55b4rla-140-sm-chernyi-120091495/?c=750000000'
    },

    {
    id: 4,
    name: 'Наушники Apple AirPods 4 белый',
    description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни.',
    price: 60714,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },

    {
    id: 5,
    name: 'Смарт-часы Apple Watch Series 10 M/L 46 мм черный',
    description: 'Apple Watch Series 10 предлагают еще больше возможностей: увеличенный экран, тонкий изящный и прочный корпус, быстрая зарядка и новые возможности. В Apple хорошо поработали над обновлением серии, внеся значительные и приятные изменения, после которых захочется купить Apple Watch Series 10.',
    price: 60714,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/p77/3341806.png?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/apple-watch-series-10-m-l-46-mm-chernyi-128572958/?c=750000000'
    },

    {
    id: 6,
    name: 'Игровая приставка Sony Playstation 5 Pro',
    description: 'PlayStation 5 Pro – это обновленная версия популярной консоли PS5, созданная для любителей самых современных технологий и производительности.',
    price: 441483,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p22/57117341.jpg?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-pro-130061486/?c=750000000'
    },

    {
    id: 7,
    name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
    description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
    price: 205711,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },

    {
    id: 8,
    name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серебристый',
    description: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серебристый + подарок',
    price: 825164,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p98/27912962.png?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-serebristyi-podarok-135655748/?c=750000000'
    },

    {
    id: 9,
    name: 'GoodGame i5-14400F / RTX 5060 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
    description: 'GoodGame i5-14400F / RTX 5060 8 Гб / 32 Гб / SSD 1000 Гб / Win 11 Pro',
    price: 649000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p5a/p16/35994027.jpeg?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/goodgame-i514400f5060-belyi-137927438/?c=750000000'
    },

    {
    id: 10,
    name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 512 Гб / Win 11 / 15IAU7 / 82RK00EWRK',
    description: 'Lenovo ideapad 3 располагает всем необходимым для реализации учебных проектов, участия в видеоконференциях и приятного отдыха. Ноутбук продуман до деталей: от производительной «начинки» до защитной шторки на веб-камере и минималистичного серого оттенка корпуса.',
    price: 238411,
    rating: 5.0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h14/65051456962590.jpg?format=gallery-large',
    images: ['1','2','3'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-512-gb-win-11-15iau7-82rk00ewrk-107333284/?c=750000000'
    }
  ];

  share(product: Product) {
    const message = `Check out this product: ${product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}