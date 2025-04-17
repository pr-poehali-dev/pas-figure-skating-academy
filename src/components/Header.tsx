
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-ice-700 text-2xl font-bold">PAS</span>
          <span className="ml-2 text-skate-700 text-lg font-medium">Академия</span>
        </Link>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="p-2"
            aria-label="Меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Десктоп навигация */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className="px-3 py-2 text-sm font-medium hover:text-ice-700 transition-colors"
                  >
                    Главная
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium hover:text-ice-700 transition-colors">
                  Программы
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/programs/main"
                          className="block p-4 space-y-1 rounded-md hover:bg-ice-50 transition-colors"
                        >
                          <div className="text-ice-700 text-lg font-medium">Наши программы</div>
                          <p className="text-sm text-muted-foreground">
                            Подробное описание всех программ обучения
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/programs/beginners"
                          className="block p-4 space-y-1 rounded-md hover:bg-ice-50 transition-colors"
                        >
                          <div className="text-ice-700 font-medium">Начинающим</div>
                          <p className="text-sm text-muted-foreground">
                            Первые шаги на льду
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/programs/advanced"
                          className="block p-4 space-y-1 rounded-md hover:bg-ice-50 transition-colors"
                        >
                          <div className="text-ice-700 font-medium">Продвинутый уровень</div>
                          <p className="text-sm text-muted-foreground">
                            Для тех, кто уже освоил базовые навыки
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/coaches" 
                    className="px-3 py-2 text-sm font-medium hover:text-ice-700 transition-colors"
                  >
                    Тренеры
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/schedule" 
                    className="px-3 py-2 text-sm font-medium hover:text-ice-700 transition-colors"
                  >
                    Расписание
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contacts" 
                    className="px-3 py-2 text-sm font-medium hover:text-ice-700 transition-colors"
                  >
                    Контакты
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Button className="hidden md:block bg-ice-600 hover:bg-ice-700">
          Записаться
        </Button>

        {/* Мобильное меню (выпадающее) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-50">
            <div className="flex flex-col p-4 space-y-3">
              <Link 
                to="/" 
                className="px-3 py-2 text-sm font-medium hover:text-ice-700"
                onClick={toggleMenu}
              >
                Главная
              </Link>
              
              <div className="relative">
                <div 
                  className="px-3 py-2 text-sm font-medium flex items-center justify-between cursor-pointer"
                >
                  Программы <ChevronDown size={16} />
                </div>
                <div className="pl-6 space-y-2 mt-2">
                  <Link 
                    to="/programs/main" 
                    className="block px-3 py-1 text-sm hover:text-ice-700"
                    onClick={toggleMenu}
                  >
                    Все программы
                  </Link>
                  <Link 
                    to="/programs/beginners" 
                    className="block px-3 py-1 text-sm hover:text-ice-700"
                    onClick={toggleMenu}
                  >
                    Начинающим
                  </Link>
                  <Link 
                    to="/programs/advanced" 
                    className="block px-3 py-1 text-sm hover:text-ice-700"
                    onClick={toggleMenu}
                  >
                    Продвинутый уровень
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/coaches" 
                className="px-3 py-2 text-sm font-medium hover:text-ice-700"
                onClick={toggleMenu}
              >
                Тренеры
              </Link>
              
              <Link 
                to="/schedule" 
                className="px-3 py-2 text-sm font-medium hover:text-ice-700"
                onClick={toggleMenu}
              >
                Расписание
              </Link>
              
              <Link 
                to="/contacts" 
                className="px-3 py-2 text-sm font-medium hover:text-ice-700"
                onClick={toggleMenu}
              >
                Контакты
              </Link>
              
              <Button className="w-full mt-4 bg-ice-600 hover:bg-ice-700">
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
