import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "Математика",
      tests: 156,
      icon: "Calculator",
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "Физика",
      tests: 89,
      icon: "Atom",
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Химия",
      tests: 124,
      icon: "Flask",
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Биология",
      tests: 93,
      icon: "Microscope",
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "История",
      tests: 67,
      icon: "Clock",
      color: "bg-amber-100 text-amber-800",
    },
    {
      name: "Литература",
      tests: 45,
      icon: "BookOpen",
      color: "bg-rose-100 text-rose-800",
    },
  ];

  const stats = [
    { label: "Всего тестов", value: "1,247", change: "+12%" },
    { label: "Активных пользователей", value: "8,459", change: "+8%" },
    { label: "Успешных попыток", value: "92%", change: "+2%" },
    { label: "Средний балл", value: "78.5", change: "+1.2%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="/img/02a4f415-bd7b-40ac-a4e0-abec63d6a249.jpg"
                alt="EduTest Logo"
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-2xl text-gray-900 px-0 mx-1 font-extrabold text-left">
                Автоматизация бизнеса
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Категории
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Рейтинги
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Статистика
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Помощь
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primary font-medium"
              >
                База знаний
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Повышение квалификации
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Платформа для общего образования и тестов сотрудников компании АБ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Начать тестирование
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить возможности
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-3">
                  <CardTitle className="text-3xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className="text-green-700 bg-green-100"
                  >
                    {stat.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Категории тестов
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Широкий выбор предметов и дисциплин для полноценного
              образовательного процесса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                    <Icon
                      name={category.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <CardDescription>
                      {category.tests} тестов доступно
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge className={category.color}>
                      Популярная категория
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Преимущества платформы
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Icon name="Trophy" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Рейтинговая система
              </h4>
              <p className="text-gray-600">
                Отслеживайте прогресс и соревнуйтесь с другими учащимися
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Icon name="BarChart" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Детальная статистика
              </h4>
              <p className="text-gray-600">
                Анализируйте результаты и выявляйте слабые места
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Icon name="HelpCircle" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">
                Получите помощь в любое время через базу знаний
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} className="text-primary" />
                <span className="text-xl font-bold">EduTest</span>
              </div>
              <p className="text-gray-400">
                Современная платформа для образовательного тестирования
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Продукт</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Тесты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Результаты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Статистика
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    База знаний
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Рейтинги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Топ учащихся
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Лучшие результаты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Достижения
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduTest. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
