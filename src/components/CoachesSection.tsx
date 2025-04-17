
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const coaches = [
  {
    id: 1,
    name: "Анна Петрова",
    role: "Старший тренер",
    bio: "Мастер спорта по фигурному катанию. Более 15 лет опыта тренерской работы.",
    image: "/placeholder.svg",
    initials: "АП"
  },
  {
    id: 2,
    name: "Сергей Иванов",
    role: "Тренер по технике",
    bio: "Специалист по прыжкам и вращениям. Разрабатывает индивидуальные программы.",
    image: "/placeholder.svg",
    initials: "СИ"
  },
  {
    id: 3,
    name: "Елена Смирнова",
    role: "Хореограф",
    bio: "Создает уникальные постановки программ. Работала с призерами национальных соревнований.",
    image: "/placeholder.svg",
    initials: "ЕС"
  }
];

const CoachesSection = () => {
  return (
    <section className="py-16 bg-ice-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-skate-800 mb-3">Наши тренеры</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Команда профессионалов, которые помогут вам достичь впечатляющих результатов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <Card key={coach.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-0">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={coach.image} alt={coach.name} />
                  <AvatarFallback className="bg-ice-200 text-ice-700">{coach.initials}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-ice-700">{coach.name}</CardTitle>
                <CardDescription className="font-medium text-skate-600">{coach.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{coach.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button size="lg" className="bg-ice-600 hover:bg-ice-700" asChild>
            <Link to="/coaches">Все тренеры</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
