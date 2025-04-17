
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    id: 1,
    title: "Начальный курс",
    description: "Для тех, кто делает первые шаги на льду. Обучение базовым элементам катания и равновесию.",
    ageGroup: "5-12 лет",
    duration: "3 месяца",
    link: "/programs/beginners",
    icon: "🧊"
  },
  {
    id: 2,
    title: "Базовая подготовка",
    description: "Развитие базовых навыков, изучение простых прыжков и вращений, основы хореографии.",
    ageGroup: "7-15 лет",
    duration: "6 месяцев",
    link: "/programs/basic",
    icon: "⛸️"
  },
  {
    id: 3,
    title: "Продвинутый уровень",
    description: "Для опытных фигуристов. Сложные элементы, многооборотные прыжки, каскады и спирали.",
    ageGroup: "от 10 лет",
    duration: "Индивидуально",
    link: "/programs/advanced",
    icon: "🏆"
  }
];

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-skate-800 mb-3">Программы обучения</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящую программу в зависимости от возраста и уровня подготовки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{program.icon}</div>
                <CardTitle className="text-xl text-ice-700">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Возраст:</span>
                    <span className="text-sm font-medium">{program.ageGroup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Длительность:</span>
                    <span className="text-sm font-medium">{program.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={program.link}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" className="bg-ice-600 hover:bg-ice-700" asChild>
            <Link to="/programs/main">Все программы</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
