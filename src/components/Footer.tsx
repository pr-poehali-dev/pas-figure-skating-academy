
import { Link } from "react-router-dom";
import { Facebook, Instagram, Video, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-skate-800 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Колонка 1: О нас */}
          <div>
            <h3 className="text-xl font-bold mb-4">PAS Академия</h3>
            <p className="text-skate-200 mb-4">
              Professional Academy Successful - академия фигурного катания для детей и взрослых любого уровня подготовки.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <Video size={18} />
              </Button>
            </div>
          </div>
          
          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-skate-200 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/programs/main" className="text-skate-200 hover:text-white transition-colors">
                  Программы
                </Link>
              </li>
              <li>
                <Link to="/coaches" className="text-skate-200 hover:text-white transition-colors">
                  Тренеры
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-skate-200 hover:text-white transition-colors">
                  Расписание
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-skate-200 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-ice-400" />
                <span className="text-skate-200">+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-ice-400" />
                <span className="text-skate-200">info@pas-academy.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-ice-400" />
                <span className="text-skate-200">
                  г. Москва, ул. Ледовая, д. 123
                </span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Подписка */}
          <div>
            <h3 className="text-xl font-bold mb-4">Подписаться на новости</h3>
            <p className="text-skate-200 mb-4">
              Получайте новости и специальные предложения
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-skate-700 border-skate-600 text-white placeholder:text-skate-400"
              />
              <Button className="bg-ice-600 hover:bg-ice-700">
                ОК
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-skate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-skate-300 text-sm">
            &copy; {new Date().getFullYear()} PAS Academy. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-skate-300 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-skate-300 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
