
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Мария К.",
    role: "Мама ученицы, 8 лет",
    text: "Моя дочь занимается в академии уже год, и результаты просто удивительные. Тренеры находят подход к каждому ребенку, а атмосфера на занятиях всегда доброжелательная.",
    image: "/placeholder.svg",
    initials: "МК"
  },
  {
    id: 2,
    name: "Дмитрий С.",
    role: "Ученик, 14 лет",
    text: "Благодаря PAS я смог освоить двойные прыжки и пройти отбор в сборную команду. Тренеры очень внимательные и всегда помогают с трудными элементами.",
    image: "/placeholder.svg",
    initials: "ДС"
  },
  {
    id: 3,
    name: "Елизавета В.",
    role: "Взрослая ученица",
    text: "Начала кататься в 28 лет с нуля. Думала, что уже поздно, но тренеры убедили в обратном. За полгода научилась уверенно держаться на льду и выполнять простые вращения.",
    image: "/placeholder.svg",
    initials: "ЕВ"
  },
  {
    id: 4,
    name: "Андрей П.",
    role: "Отец ученика, 10 лет",
    text: "Сын перешел из другой школы, и разница в подходе просто колоссальная. Здесь каждый ребенок получает необходимое внимание, а результаты не заставляют себя ждать.",
    image: "/placeholder.svg",
    initials: "АП"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-skate-800 mb-3">Отзывы наших учеников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нашей академии те, кто уже занимается с нами
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="space-y-4">
                      <blockquote className="text-muted-foreground italic">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-ice-200 text-ice-700">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
