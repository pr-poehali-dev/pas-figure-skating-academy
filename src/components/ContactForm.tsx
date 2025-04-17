
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl text-ice-700">Запишитесь на занятие</CardTitle>
        <CardDescription>
          Заполните форму, и мы свяжемся с вами для уточнения деталей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input id="name" placeholder="Введите ваше имя" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@mail.ru" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="program">Программа</Label>
            <Select>
              <SelectTrigger id="program">
                <SelectValue placeholder="Выберите программу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Начальный курс</SelectItem>
                <SelectItem value="basic">Базовая подготовка</SelectItem>
                <SelectItem value="advanced">Продвинутый уровень</SelectItem>
                <SelectItem value="individual">Индивидуальные занятия</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Сообщение (необязательно)</Label>
            <Textarea id="message" placeholder="Дополнительная информация..." />
          </div>
          
          <Button type="submit" className="w-full bg-ice-600 hover:bg-ice-700">
            Отправить заявку
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с нашей{" "}
            <a href="/privacy" className="text-ice-600 hover:underline">
              Политикой конфиденциальности
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
