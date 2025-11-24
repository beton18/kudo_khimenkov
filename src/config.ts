// Конфигурация сайта - меняй здесь основные параметры

export const siteConfig = {
  // Основная информация
  siteName: "Khimenkov Kickboxing Podolsk",
  siteDescription: "Тренировки по кикбоксингу для детей и взрослых",
  
  // Контакты
  contacts: {
    phone: "+7 (999) 123-45-67",
    email: "info@kickboxing-club.ru",
    address: "г. Подольск, ул. 43-й Армии, 23",
    telegram: "https://t.me/yourusername", // Ссылка на телеграм
    whatsapp: "https://wa.me/79991234567", // Ссылка на ватсапп (формат: 79991234567)
  },
  
  // Социальные сети
  social: {
    instagram: "https://instagram.com/yourclub",
    vk: "https://vk.com/yourclub",
  },
  
  // Hero секция
  hero: {
    title: "Секция кикбоксинга",
    subtitle: "Развивай силу, выносливость и характер",
    ctaText: "Записаться на пробное занятие",
    backgroundImage: "/assets/devuska-kikbokser.jpg",
  },
  
  // О секции
  about: {
    title: "О нашей секции",
    description: [
      "Наша секция работает с 20XX года и имеет богатый опыт подготовки спортсменов различного уровня.",
      "Мы предлагаем тренировки для детей от 6 лет и взрослых. Занятия проходят в современном зале с профессиональным оборудованием.",
      "Наши воспитанники регулярно участвуют в соревнованиях городского и регионального уровня."
    ],
    image: "/assets/bokser-v-cernom-remeske-na-zapast-e.jpg",
  },
  
  // Направления/Группы
  groups: [
    {
      id: 1,
      title: "Детская группа",
      description: "Общая физическая подготовка и базовая техника кикбоксинга для начинающих",
      age: "6-15 лет",
      image: "/assets/vid-sboku-rebenok-zanimaetsa-boksom.jpg",
    },
    {
      id: 2,
      title: "Взрослая группа",
      description: "Интенсивные тренировки для взрослых любого уровня подготовки",
      age: "от 16 лет",
      image: "/assets/zenskii-bokser-treniruetsa-s-trenerom.jpg",
    },
  ],
  
  // Тренеры
  coaches: [
    {
      id: 1,
      name: "Виктор Хименков",
      title: "Главный тренер",
      description: "Мастер спорта, опыт работы 15 лет",
      image: "/assets/mock.jpg",
    },
  ],
  
  // Расписание
  schedule: [
    { day: "Вторник", time: "18:30 - 20:00", group: "Дети", coach: "Виктор Хименков" },
    { day: "Вторник", time: "20:00 - 21:30", group: "Взрослые", coach: "Виктор Хименков" },
    { day: "Четверг", time: "18:30 - 20:00", group: "Дети", coach: "Виктор Хименков" },
    { day: "Четверг", time: "20:00 - 21:30", group: "Взрослые", coach: "Виктор Хименков" },
  ],
  
  // Цены
  pricing: [
    {
      id: 1,
      title: "Месячный абонемент",
      price: "8 000 ₽",
      features: [
        "2 раза в неделю",
        "Вторник и четверг",
        "Детская или взрослая группа",
        "Профессиональное оборудование",
      ],
      popular: true,
    },
  ],
};

