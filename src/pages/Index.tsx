
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import CoachesSection from "@/components/CoachesSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <ProgramsSection />
        <CoachesSection />
        <Testimonials />
        
        {/* Секция с контактной формой */}
        <section className="py-16 bg-gradient-to-r from-ice-50 to-ice-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-skate-800 mb-4">
                  Начните свой путь в фигурном катании прямо сейчас
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Присоединяйтесь к нашей академии и откройте для себя увлекательный мир фигурного катания. Мы предлагаем программы для любого возраста и уровня подготовки.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 text-3xl">🏆</div>
                    <div>
                      <h3 className="font-medium text-ice-700">Опытные тренеры</h3>
                      <p className="text-muted-foreground">
                        Наши тренеры имеют высокую квалификацию и богатый опыт работы
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-3xl">🧊</div>
                    <div>
                      <h3 className="font-medium text-ice-700">Современные ледовые арены</h3>
                      <p className="text-muted-foreground">
                        Занятия проходят на качественном льду с современным оборудованием
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-3xl">⛸️</div>
                    <div>
                      <h3 className="font-medium text-ice-700">Индивидуальный подход</h3>
                      <p className="text-muted-foreground">
                        Мы учитываем особенности и цели каждого ученика
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
