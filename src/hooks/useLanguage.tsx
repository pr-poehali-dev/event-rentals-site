import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'fr' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header
    'nav.catalog': 'Каталог',
    'nav.solutions': 'Решения', 
    'nav.contact': 'Контакты',
    'button.call': 'Заказать звонок',
    
    // Hero Section
    'hero.title': 'Создаем незабываемые',
    'hero.title.highlight': 'мероприятия',
    'hero.subtitle': 'Аренда профессионального оборудования для свадеб, вечеринок, дискотек и корпоративных событий',
    'hero.button.equipment': 'Выбрать оборудование',
    'hero.button.calculate': 'Рассчитать стоимость',
    'hero.stats.events': 'Мероприятий',
    'hero.stats.support': 'Поддержка',
    'hero.stats.rating': 'Рейтинг',
    
    // Event Types
    'events.title': 'Мероприятия любого типа',
    'events.weddings': 'Свадьбы',
    'events.parties': 'Вечеринки',
    'events.corporate': 'Корпоративы',
    'events.disco': 'Дискотеки',
    'events.anniversaries': 'Юбилеи',
    'events.kids': 'Детские праздники',
    
    // Equipment
    'equipment.title': 'Популярное оборудование',
    'equipment.subtitle': 'Профессиональная техника для создания идеальной атмосферы',
    'equipment.sound.title': 'Звуковое оборудование',
    'equipment.sound.desc': 'Профессиональная аппаратура для качественного звука',
    'equipment.light.title': 'Световое оборудование',
    'equipment.light.desc': 'Создаем атмосферу с помощью профессионального света',
    'equipment.tent.title': 'Шатры и мебель',
    'equipment.tent.desc': 'Элегантные решения для любых мероприятий',
    'equipment.popular': 'Популярное',
    'equipment.price.from': 'от',
    'equipment.price.day': '₽/день',
    'equipment.button.details': 'Подробнее',
    'equipment.button.catalog': 'Смотреть весь каталог',
    
    // Why Choose Us
    'why.title': 'Почему выбирают нас',
    'why.quality.title': 'Гарантия качества',
    'why.quality.desc': 'Все оборудование проходит проверку',
    'why.delivery.title': 'Доставка',
    'why.delivery.desc': 'Быстрая доставка и установка',
    'why.experience.title': 'Опыт',
    'why.experience.desc': 'Более 5 лет на рынке',
    'why.service.title': 'Сервис',
    'why.service.desc': 'Поддержка 24/7',
    
    // CTA
    'cta.title': 'Готовы создать незабываемое мероприятие?',
    'cta.subtitle': 'Свяжитесь с нами для бесплатной консультации и расчета стоимости',
    'cta.button.contact': 'Связаться с нами',
    'cta.button.catalog': 'Скачать каталог',
    
    // Footer
    'footer.description': 'Профессиональная аренда оборудования для мероприятий любого масштаба',
    'footer.services': 'Услуги',
    'footer.sound': 'Звуковое оборудование',
    'footer.light': 'Световое оборудование',
    'footer.tents': 'Шатры и мебель',
    'footer.decor': 'Декор',
    'footer.events': 'Мероприятия',
    'footer.rights': 'Все права защищены',
    
    // Chat Bot
    'chat.title': 'Консультант',
    'chat.placeholder': 'Напишите ваш вопрос...',
    'chat.send': 'Отправить',
    'chat.welcome': 'Добро пожаловать! Как могу помочь с арендой оборудования?'
  },
  
  en: {
    // Header
    'nav.catalog': 'Catalog',
    'nav.solutions': 'Solutions',
    'nav.contact': 'Contact',
    'button.call': 'Request Call',
    
    // Hero Section
    'hero.title': 'Creating unforgettable',
    'hero.title.highlight': 'events',
    'hero.subtitle': 'Professional equipment rental for weddings, parties, discos and corporate events',
    'hero.button.equipment': 'Choose Equipment',
    'hero.button.calculate': 'Calculate Cost',
    'hero.stats.events': 'Events',
    'hero.stats.support': 'Support',
    'hero.stats.rating': 'Rating',
    
    // Event Types
    'events.title': 'Events of any type',
    'events.weddings': 'Weddings',
    'events.parties': 'Parties',
    'events.corporate': 'Corporate',
    'events.disco': 'Discos',
    'events.anniversaries': 'Anniversaries',
    'events.kids': 'Kids Parties',
    
    // Equipment
    'equipment.title': 'Popular Equipment',
    'equipment.subtitle': 'Professional equipment to create the perfect atmosphere',
    'equipment.sound.title': 'Sound Equipment',
    'equipment.sound.desc': 'Professional audio equipment for quality sound',
    'equipment.light.title': 'Lighting Equipment',
    'equipment.light.desc': 'Creating atmosphere with professional lighting',
    'equipment.tent.title': 'Tents & Furniture',
    'equipment.tent.desc': 'Elegant solutions for any event',
    'equipment.popular': 'Popular',
    'equipment.price.from': 'from',
    'equipment.price.day': '₽/day',
    'equipment.button.details': 'Details',
    'equipment.button.catalog': 'View Full Catalog',
    
    // Why Choose Us
    'why.title': 'Why choose us',
    'why.quality.title': 'Quality Guarantee',
    'why.quality.desc': 'All equipment is tested',
    'why.delivery.title': 'Delivery',
    'why.delivery.desc': 'Fast delivery and setup',
    'why.experience.title': 'Experience',
    'why.experience.desc': 'More than 5 years in business',
    'why.service.title': 'Service',
    'why.service.desc': '24/7 Support',
    
    // CTA
    'cta.title': 'Ready to create an unforgettable event?',
    'cta.subtitle': 'Contact us for free consultation and cost calculation',
    'cta.button.contact': 'Contact Us',
    'cta.button.catalog': 'Download Catalog',
    
    // Footer
    'footer.description': 'Professional equipment rental for events of any scale',
    'footer.services': 'Services',
    'footer.sound': 'Sound Equipment',
    'footer.light': 'Lighting Equipment',
    'footer.tents': 'Tents & Furniture',
    'footer.decor': 'Decor',
    'footer.events': 'Events',
    'footer.rights': 'All rights reserved',
    
    // Chat Bot
    'chat.title': 'Consultant',
    'chat.placeholder': 'Type your question...',
    'chat.send': 'Send',
    'chat.welcome': 'Welcome! How can I help you with equipment rental?'
  },
  
  fr: {
    // Header
    'nav.catalog': 'Catalogue',
    'nav.solutions': 'Solutions',
    'nav.contact': 'Contact',
    'button.call': 'Demander un appel',
    
    // Hero Section
    'hero.title': 'Créer des',
    'hero.title.highlight': 'événements inoubliables',
    'hero.subtitle': 'Location d\'équipement professionnel pour mariages, fêtes, discothèques et événements d\'entreprise',
    'hero.button.equipment': 'Choisir l\'équipement',
    'hero.button.calculate': 'Calculer le coût',
    'hero.stats.events': 'Événements',
    'hero.stats.support': 'Support',
    'hero.stats.rating': 'Note',
    
    // Event Types
    'events.title': 'Événements de tout type',
    'events.weddings': 'Mariages',
    'events.parties': 'Fêtes',
    'events.corporate': 'Entreprise',
    'events.disco': 'Discothèques',
    'events.anniversaries': 'Anniversaires',
    'events.kids': 'Fêtes d\'enfants',
    
    // Equipment
    'equipment.title': 'Équipement populaire',
    'equipment.subtitle': 'Équipement professionnel pour créer l\'atmosphère parfaite',
    'equipment.sound.title': 'Équipement sonore',
    'equipment.sound.desc': 'Équipement audio professionnel pour un son de qualité',
    'equipment.light.title': 'Équipement d\'éclairage',
    'equipment.light.desc': 'Créer l\'ambiance avec un éclairage professionnel',
    'equipment.tent.title': 'Tentes et mobilier',
    'equipment.tent.desc': 'Solutions élégantes pour tout événement',
    'equipment.popular': 'Populaire',
    'equipment.price.from': 'à partir de',
    'equipment.price.day': '₽/jour',
    'equipment.button.details': 'Détails',
    'equipment.button.catalog': 'Voir le catalogue complet',
    
    // Why Choose Us
    'why.title': 'Pourquoi nous choisir',
    'why.quality.title': 'Garantie qualité',
    'why.quality.desc': 'Tout équipement est testé',
    'why.delivery.title': 'Livraison',
    'why.delivery.desc': 'Livraison et installation rapides',
    'why.experience.title': 'Expérience',
    'why.experience.desc': 'Plus de 5 ans d\'activité',
    'why.service.title': 'Service',
    'why.service.desc': 'Support 24/7',
    
    // CTA
    'cta.title': 'Prêt à créer un événement inoubliable?',
    'cta.subtitle': 'Contactez-nous pour une consultation gratuite et un calcul de coût',
    'cta.button.contact': 'Nous contacter',
    'cta.button.catalog': 'Télécharger le catalogue',
    
    // Footer
    'footer.description': 'Location d\'équipement professionnel pour événements de toute envergure',
    'footer.services': 'Services',
    'footer.sound': 'Équipement sonore',
    'footer.light': 'Équipement d\'éclairage',
    'footer.tents': 'Tentes et mobilier',
    'footer.decor': 'Décoration',
    'footer.events': 'Événements',
    'footer.rights': 'Tous droits réservés',
    
    // Chat Bot
    'chat.title': 'Consultant',
    'chat.placeholder': 'Tapez votre question...',
    'chat.send': 'Envoyer',
    'chat.welcome': 'Bienvenue! Comment puis-je vous aider avec la location d\'équipement?'
  },
  
  he: {
    // Header
    'nav.catalog': 'קטלוג',
    'nav.solutions': 'פתרונות',
    'nav.contact': 'צור קשר',
    'button.call': 'בקש שיחה',
    
    // Hero Section
    'hero.title': 'יוצרים',
    'hero.title.highlight': 'אירועים בלתי נשכחים',
    'hero.subtitle': 'השכרת ציוד מקצועי לחתונות, מסיבות, דיסקוטקים ואירועי חברה',
    'hero.button.equipment': 'בחר ציוד',
    'hero.button.calculate': 'חשב עלות',
    'hero.stats.events': 'אירועים',
    'hero.stats.support': 'תמיכה',
    'hero.stats.rating': 'דירוג',
    
    // Event Types
    'events.title': 'אירועים מכל סוג',
    'events.weddings': 'חתונות',
    'events.parties': 'מסיבות',
    'events.corporate': 'ארגוניים',
    'events.disco': 'דיסקוטקים',
    'events.anniversaries': 'יום הולדת',
    'events.kids': 'מסיבות ילדים',
    
    // Equipment
    'equipment.title': 'ציוד פופולרי',
    'equipment.subtitle': 'ציוד מקצועי ליצירת האווירה המושלמת',
    'equipment.sound.title': 'ציוד קול',
    'equipment.sound.desc': 'ציוד אודיו מקצועי לקול איכותי',
    'equipment.light.title': 'ציוד תאורה',
    'equipment.light.desc': 'יצירת אווירה עם תאורה מקצועית',
    'equipment.tent.title': 'אוהלים ורהיטים',
    'equipment.tent.desc': 'פתרונות אלגנטיים לכל אירוע',
    'equipment.popular': 'פופולרי',
    'equipment.price.from': 'החל מ',
    'equipment.price.day': '₽/יום',
    'equipment.button.details': 'פרטים',
    'equipment.button.catalog': 'צפה בקטלוג המלא',
    
    // Why Choose Us
    'why.title': 'למה לבחור בנו',
    'why.quality.title': 'ערבות איכות',
    'why.quality.desc': 'כל הציוד נבדק',
    'why.delivery.title': 'משלוח',
    'why.delivery.desc': 'משלוח והתקנה מהירים',
    'why.experience.title': 'ניסיון',
    'why.experience.desc': 'יותר מ-5 שנים בעסק',
    'why.service.title': 'שירות',
    'why.service.desc': 'תמיכה 24/7',
    
    // CTA
    'cta.title': 'מוכן ליצור אירוע בלתי נשכח?',
    'cta.subtitle': 'צור קשר עמנו לייעוץ חינמי וחישוב עלות',
    'cta.button.contact': 'צור קשר',
    'cta.button.catalog': 'הורד קטלוג',
    
    // Footer
    'footer.description': 'השכרת ציוד מקצועי לאירועים בכל היקף',
    'footer.services': 'שירותים',
    'footer.sound': 'ציוד קול',
    'footer.light': 'ציוד תאורה',
    'footer.tents': 'אוהלים ורהיטים',
    'footer.decor': 'עיצוב',
    'footer.events': 'אירועים',
    'footer.rights': 'כל הזכויות שמורות',
    
    // Chat Bot
    'chat.title': 'יועץ',
    'chat.placeholder': 'הקלד את השאלה שלך...',
    'chat.send': 'שלח',
    'chat.welcome': 'ברוכים הבאים! איך אני יכול לעזור עם השכרת ציוד?'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ru', 'en', 'fr', 'he'].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};