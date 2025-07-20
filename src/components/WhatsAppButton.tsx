import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WhatsAppButton = () => {
  const phoneNumber = "+79991234567";
  const message = encodeURIComponent("Здравствуйте! Интересует аренда оборудования для мероприятия.");

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg animate-pulse"
        size="icon"
        title="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;