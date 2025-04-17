
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-ice-100 to-ice-50 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-ice-200 opacity-50" />
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-ice-300 opacity-30" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-skate-800 leading-tight">
              Академия фигурного катания <span className="text-ice-700">PAS</span>
            </h1>
            <p className="text-lg text-skate-600 max-w-md">
              Раскройте свой потенциал на льду вместе с Professional Academy Successful. 
              Мы обучаем фигурному катанию всех возрастов и уровней подготовки.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-ice-600 hover:bg-ice-700">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-ice-600 text-ice-700 hover:bg-ice-50">
                <Link to="/programs/main">Узнать больше</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>✓ Профессиональные тренеры</span>
              <span>•</span>
              <span>✓ Индивидуальный подход</span>
              <span>•</span>
              <span>✓ Современное оборудование</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Фигурное катание в академии PAS" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-skate-800 font-medium">Более 500</div>
              <div className="text-sm text-muted-foreground">учеников</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
