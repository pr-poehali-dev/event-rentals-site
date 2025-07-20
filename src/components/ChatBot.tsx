import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import { useLanguage } from "@/hooks/useLanguage";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chat.welcome'),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses = {
    ru: {
      greeting: ["Здравствуйте! Как дела?", "Добро пожаловать! Чем могу помочь?"],
      equipment: ["У нас есть звуковое, световое оборудование, шатры и мебель. Что вас интересует?"],
      price: ["Цены зависят от типа оборудования и срока аренды. Звуковое - от 2500₽/день, световое - от 1800₽/день"],
      delivery: ["Мы доставляем и устанавливаем оборудование. Доставка по Москве бесплатная при заказе от 10000₽"],
      contact: ["Звоните: +7 (999) 123-45-67 или пишите: info@vsedlyavas.ru"],
      default: ["Интересный вопрос! Лучше обратиться к нашему менеджеру по телефону +7 (999) 123-45-67"]
    },
    en: {
      greeting: ["Hello! How are you?", "Welcome! How can I help?"],
      equipment: ["We have sound, lighting equipment, tents and furniture. What interests you?"],
      price: ["Prices depend on equipment type and rental period. Sound - from 2500₽/day, lighting - from 1800₽/day"],
      delivery: ["We deliver and install equipment. Free delivery in Moscow for orders over 10000₽"],
      contact: ["Call: +7 (999) 123-45-67 or email: info@vsedlyavas.ru"],
      default: ["Interesting question! Better contact our manager at +7 (999) 123-45-67"]
    },
    fr: {
      greeting: ["Bonjour! Comment allez-vous?", "Bienvenue! Comment puis-je aider?"],
      equipment: ["Nous avons du matériel sonore, d'éclairage, des tentes et du mobilier. Qu'est-ce qui vous intéresse?"],
      price: ["Les prix dépendent du type d'équipement et de la durée de location. Son - à partir de 2500₽/jour"],
      delivery: ["Nous livrons et installons l'équipement. Livraison gratuite à Moscou pour commandes > 10000₽"],
      contact: ["Appelez: +7 (999) 123-45-67 ou écrivez: info@vsedlyavas.ru"],
      default: ["Question intéressante! Mieux vaut contacter notre manager au +7 (999) 123-45-67"]
    },
    he: {
      greeting: ["שלום! איך הולך?", "ברוכים הבאים! איך אני יכול לעזור?"],
      equipment: ["יש לנו ציוד קול, תאורה, אוהלים ורהיטים. מה מעניין אותך?"],
      price: ["המחירים תלויים בסוג הציוד ותקופת השכירות. קול - החל מ-2500₽/יום"],
      delivery: ["אנחנו מספקים ומתקינים ציוד. משלוח חינם במוסקבה להזמנות מעל 10000₽"],
      contact: ["התקשר: +7 (999) 123-45-67 או כתוב: info@vsedlyavas.ru"],
      default: ["שאלה מעניינת! עדיף לפנות למנהל שלנו בטלפון +7 (999) 123-45-67"]
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    const responses = botResponses[language];
    
    if (message.includes('привет') || message.includes('hello') || message.includes('bonjour') || message.includes('שלום')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    }
    if (message.includes('оборудование') || message.includes('equipment') || message.includes('équipement') || message.includes('ציוד')) {
      return responses.equipment[0];
    }
    if (message.includes('цена') || message.includes('price') || message.includes('prix') || message.includes('מחיר')) {
      return responses.price[0];
    }
    if (message.includes('доставка') || message.includes('delivery') || message.includes('livraison') || message.includes('משלוח')) {
      return responses.delivery[0];
    }
    if (message.includes('контакт') || message.includes('contact') || message.includes('צור קשר')) {
      return responses.contact[0];
    }
    
    return responses.default[0];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg"
          size="icon"
        >
          <Icon name={isOpen ? "X" : "MessageCircle"} size={24} className="text-white" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-xl">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-3 bg-secondary text-white">
              <CardTitle className="text-lg">{t('chat.title')}</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <Icon name="X" size={16} />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-4">
              <ScrollArea className="flex-1 mb-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg text-sm ${
                          message.isBot
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-primary text-white'
                        }`}
                        style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chat.placeholder')}
                  className="flex-1"
                  style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-primary">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;