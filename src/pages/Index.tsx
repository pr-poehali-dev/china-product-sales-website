import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Премиум чай улун",
      price: "₽890",
      originalPrice: "₽1200",
      image: "/img/e43c62c8-75ad-4eb2-8d65-7fd06e1745c4.jpg",
      badge: "ХИТ",
      rating: 4.8
    },
    {
      id: 2,
      name: "Пузырьковый чай",
      price: "₽450",
      originalPrice: "₽600",
      image: "/img/1e7fcceb-3b0d-4947-824f-3399e8ffab21.jpg",
      badge: "НОВИНКА",
      rating: 4.9
    },
    {
      id: 3,
      name: "Набор специй",
      price: "₽1250",
      originalPrice: "₽1800",
      image: "/img/21dd4ae3-ab90-4d9a-9777-ca5da9b873e0.jpg",
      badge: "АКЦИЯ",
      rating: 4.7
    }
  ];

  const categories = [
    { name: "Чаи и напитки", icon: "Coffee", count: "120+" },
    { name: "Соусы и специи", icon: "Soup", count: "85+" },
    { name: "Лапша и крупы", icon: "Wheat", count: "95+" },
    { name: "Снеки", icon: "Cookie", count: "65+" }
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Отличное качество продуктов! Быстрая доставка и приятные цены."
    },
    {
      name: "Михаил П.",
      rating: 5,
      text: "Заказываю уже третий раз. Все свежее, упаковано аккуратно."
    },
    {
      name: "Елена В.",
      rating: 4,
      text: "Большой ассортимент аутентичных китайских продуктов."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-white to-gray-50">
      {/* Header */}
      <header className="bg-brand-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-heading">OT
</span>
              </div>
              <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">OrientalTea
</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-700 hover:text-brand-red transition-colors font-body">Каталог</a>
              <a href="#promotions" className="text-gray-700 hover:text-brand-red transition-colors font-body">Акции</a>
              <a href="#reviews" className="text-gray-700 hover:text-brand-red transition-colors font-body">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-brand-red transition-colors font-body">Контакты</a>
              <a href="#support" className="text-gray-700 hover:text-brand-red transition-colors font-body">Поддержка</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
                <span className="ml-1">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red via-brand-orange to-yellow-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-heading mb-6 animate-fade-in">
            Аутентичные китайские продукты
          </h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto opacity-90">
            Доставляем свежие продукты и напитки прямо из Китая. Качество, вкус и традиции в каждом товаре.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 font-heading">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Начать покупки
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-red">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white" id="catalog">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-heading text-center mb-12 text-gray-900">Популярные категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-brand-gray/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <h4 className="font-semibold font-heading text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-brand-gray font-body">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-heading text-center mb-12 text-gray-900">Хиты продаж</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border-brand-gray/20">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-brand-red text-white font-body">
                    {product.badge}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                    <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-body ml-1">{product.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold font-heading text-lg mb-2 text-gray-900">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold font-heading text-brand-red">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through font-body">{product.originalPrice}</span>
                    </div>
                    <Button size="sm" className="bg-brand-red hover:bg-red-600">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
              Смотреть все товары
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-white" id="promotions">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-heading text-center mb-12 text-gray-900">Текущие акции</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-brand-red to-pink-500 text-white overflow-hidden">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold font-heading mb-4">Скидка 30% на чаи</h4>
                <p className="font-body mb-6 opacity-90">При покупке от 3000 рублей получите скидку на все виды чая</p>
                <Button className="bg-white text-brand-red hover:bg-gray-100">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-brand-orange to-yellow-400 text-white overflow-hidden">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold font-heading mb-4">Бесплатная доставка</h4>
                <p className="font-body mb-6 opacity-90">Доставим заказ бесплатно при сумме покупки от 2000 рублей</p>
                <Button className="bg-white text-brand-orange hover:bg-gray-100">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50" id="reviews">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-heading text-center mb-12 text-gray-900">Отзывы покупателей</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-brand-gray/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 font-body text-gray-600">{review.name}</span>
                  </div>
                  <p className="text-gray-700 font-body italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-white" id="contacts">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div id="contacts">
              <h3 className="text-3xl font-bold font-heading mb-8 text-gray-900">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading text-gray-900">Телефон</p>
                    <p className="text-brand-gray font-body">+7 (924) 293-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading text-gray-900">Email</p>
                    <p className="text-brand-gray font-body">info@chinamarket.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading text-gray-900">Адрес</p>
                    <p className="text-brand-gray font-body">г.Улан-Удэ ул. Ленина, 27, Улан-Удэ</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="support">
              <h3 className="text-3xl font-bold font-heading mb-8 text-gray-900">Поддержка</h3>
              <div className="space-y-4">
                <Card className="border-brand-gray/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold font-heading mb-2 flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-brand-red" />
                      Часы работы
                    </h4>
                    <p className="text-brand-gray font-body">Ежедневно с 10:00 до 22:00</p>
                  </CardContent>
                </Card>
                <Card className="border-brand-gray/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold font-heading mb-2 flex items-center">
                      <Icon name="Truck" size={20} className="mr-2 text-brand-orange" />
                      Доставка
                    </h4>
                    <p className="text-brand-gray font-body">По городу 
</p>
                  </CardContent>
                </Card>
                <Card className="border-brand-gray/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold font-heading mb-2 flex items-center">
                      <Icon name="Shield" size={20} className="mr-2 text-green-600" />
                      Гарантия качества
                    </h4>
                    <p className="text-brand-gray font-body">100% гарантия свежести продуктов</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-red to-brand-orange rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold font-heading">OT</span>
                </div>
                <h4 className="text-xl font-bold font-heading">OrientalTea</h4>
              </div>
              <p className="text-gray-400 font-body">Лучшие китайские продукты и напитки с доставкой по всей России</p>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li><a href="#" className="hover:text-white transition-colors">Чаи и напитки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Соусы и специи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лапша и крупы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Снеки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-heading mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-brand-red hover:border-brand-red hover:text-white">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                  <Icon name="Facebook" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-body">&copy; 2024 China Market. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;