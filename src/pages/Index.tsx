import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const equipmentCategories = [
    {
      id: 1,
      title: "Звуковое оборудование",
      description: "Профессиональная аппаратура для качественного звука",
      image: "/img/c44cc8c0-64d6-4d4b-84a8-68badaa06499.jpg",
      icon: "Volume2",
      price: "от 2,500₽/день",
      popular: true
    },
    {
      id: 2,
      title: "Световое оборудование",
      description: "Создаем атмосферу с помощью профессионального света",
      image: "/img/4642c05c-8be6-495c-942e-04e0d64e5af4.jpg",
      icon: "Lightbulb",
      price: "от 1,800₽/день",
      popular: false
    },
    {
      id: 3,
      title: "Шатры и мебель",
      description: "Элегантные решения для любых мероприятий",
      image: "/img/ba23ba59-6227-41c1-97c8-e8c2dfcf23ec.jpg",
      icon: "Home",
      price: "от 3,200₽/день",
      popular: false
    }
  ];

  const eventTypes = [
    { name: "Свадьбы", icon: "Heart", color: "bg-primary" },
    { name: "Вечеринки", icon: "PartyPopper", color: "bg-secondary" },
    { name: "Корпоративы", icon: "Building", color: "bg-tertiary" },
    { name: "Дискотеки", icon: "Music", color: "bg-accent" },
    { name: "Юбилеи", icon: "Gift", color: "bg-primary" },
    { name: "Детские праздники", icon: "Baby", color: "bg-secondary" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-gray-900">Всё для Вас</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
            <a href="#solutions" className="text-gray-700 hover:text-primary transition-colors">Решения</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-tertiary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Создаем незабываемые <span className="text-accent">мероприятия</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Аренда профессионального оборудования для свадеб, вечеринок, дискотек и корпоративных событий
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать оборудование
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold">500+</div>
                <div className="opacity-80">Мероприятий</div>
              </div>
              <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-bold">24/7</div>
                <div className="opacity-80">Поддержка</div>
              </div>
              <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="text-3xl font-bold">5★</div>
                <div className="opacity-80">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 text-6xl opacity-20">🎉</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20">✨</div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Мероприятия любого типа
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {eventTypes.map((event, index) => (
              <div
                key={event.name}
                className="text-center p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={event.icon} size={24} className="text-white" />
                </div>
                <p className="font-medium text-gray-700">{event.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Популярное оборудование
            </h3>
            <p className="text-xl text-gray-600">
              Профессиональная техника для создания идеальной атмосферы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <Card 
                key={category.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                  {category.popular && (
                    <Badge className="absolute top-4 left-4 bg-accent text-black">
                      Популярное
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={category.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-heading">{category.title}</CardTitle>
                      <div className="text-primary font-semibold">{category.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{category.description}</CardDescription>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="Eye" size={20} className="mr-2" />
              Смотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Shield", title: "Гарантия качества", desc: "Все оборудование проходит проверку" },
              { icon: "Truck", title: "Доставка", desc: "Быстрая доставка и установка" },
              { icon: "Users", title: "Опыт", desc: "Более 5 лет на рынке" },
              { icon: "Star", title: "Сервис", desc: "Поддержка 24/7" }
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="text-center animate-fade-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Готовы создать незабываемое мероприятие?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <h5 className="text-xl font-heading font-bold">Всё для Вас</h5>
              </div>
              <p className="text-gray-400">
                Профессиональная аренда оборудования для мероприятий любого масштаба
              </p>
            </div>
            <div>
              <h6 className="font-heading font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Звуковое оборудование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Световое оборудование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Шатры и мебель</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Декор</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-heading font-semibold mb-4">Мероприятия</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Свадьбы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дискотеки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Праздники</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-heading font-semibold mb-4">Контакты</h6>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@vsedlyavas.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Всё для Вас. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;