import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ContactForm from '@/components/ContactForm';
import ContactModal from '@/components/ContactModal';

export default function Index() {
  const [calcData, setCalcData] = useState({
    hashrate: '',
    power: '',
    electricity: '',
    price: ''
  });

  const equipment = [
    {
      name: 'Antminer S19j Pro+',
      hashrate: '122 TH/s',
      power: '3355W',
      price: '₽189,000',
      image: '/img/87127361-f426-4984-8f6e-e05c97f5dae5.jpg',
      popular: true
    },
    {
      name: 'Antminer S21 Hyd',
      hashrate: '335 TH/s',
      power: '5360W', 
      price: '₽850,000',
      image: '/img/87127361-f426-4984-8f6e-e05c97f5dae5.jpg',
      popular: false
    },
    {
      name: 'WhatsMiner M63S+',
      hashrate: '390 TH/s',
      power: '7026W',
      price: '₽920,000',
      image: '/img/87127361-f426-4984-8f6e-e05c97f5dae5.jpg',
      popular: false
    },
    {
      name: 'Antminer S19k Pro',
      hashrate: '115 TH/s',
      power: '2760W',
      price: '₽165,000',
      image: '/img/87127361-f426-4984-8f6e-e05c97f5dae5.jpg',
      popular: true
    }
  ];

  const calculateProfit = () => {
    const btcPrice = 60000; // USD
    const usdToRub = 100;
    const difficulty = 79350000000000;
    const blockReward = 6.25;
    
    const hashrateNum = parseFloat(calcData.hashrate) * 1e12;
    const powerNum = parseFloat(calcData.power);
    const electricityNum = parseFloat(calcData.electricity);
    
    if (!hashrateNum || !powerNum || !electricityNum) return 0;
    
    const dailyBTC = (hashrateNum * 86400 * blockReward) / difficulty;
    const dailyRevenue = dailyBTC * btcPrice * usdToRub;
    const dailyCost = (powerNum / 1000) * 24 * electricityNum;
    
    return Math.round(dailyRevenue - dailyCost);
  };

  const profit = calculateProfit();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-secondary/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-white">CryptoMining Pro</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-white hover:text-primary transition-colors">Каталог</a>
              <a href="#calculator" className="text-white hover:text-primary transition-colors">Калькулятор</a>
              <a href="#about" className="text-white hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="text-white hover:text-primary transition-colors">Доставка</a>
              <a href="#reviews" className="text-white hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            🔥 Прямые поставки из Китая
          </Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-emerald-700">
            Майнинг оборудование по оптовым ценам
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Официальный дилер Antminer, WhatsMiner и других топовых производителей. 
            Гарантия качества, быстрая доставка, техническая поддержка 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="ShoppingBag" className="h-5 w-5 mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Calculator" className="h-5 w-5 mr-2" />
              Калькулятор прибыли
            </Button>
            <ContactModal />
          </div>
          <div className="mt-16 relative">
            <img 
              src="/img/32db7e4b-85b7-4af1-9fb9-bdb3eb155829.jpg" 
              alt="Mining farm" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Truck" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">Прямо со складов в Китае за 7-14 дней</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Shield" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">Официальная гарантия производителя</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="DollarSign" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Оптовые цены</h3>
                <p className="text-sm text-muted-foreground">Минимальная наценка, максимум выгоды</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Headphones" className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-muted-foreground">Техническая помощь в любое время</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные модели</h2>
            <p className="text-muted-foreground text-lg">Лучшие ASIC-майнеры для криптовалют в 2024 году</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  {item.popular && (
                    <Badge className="absolute top-3 left-3 z-10 bg-primary">
                      🔥 Хит продаж
                    </Badge>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Хешрейт:</span>
                      <span className="font-medium">{item.hashrate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Мощность:</span>
                      <span className="font-medium">{item.power}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Калькулятор прибыльности</h2>
            <p className="text-muted-foreground text-lg">Рассчитайте потенциальную прибыль от майнинга</p>
          </div>
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Хешрейт (TH/s)</label>
                  <Input
                    type="number"
                    placeholder="100"
                    value={calcData.hashrate}
                    onChange={(e) => setCalcData({...calcData, hashrate: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Энергопотребление (W)</label>
                  <Input
                    type="number"
                    placeholder="3250"
                    value={calcData.power}
                    onChange={(e) => setCalcData({...calcData, power: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Стоимость электричества (₽/кВт⋅ч)</label>
                  <Input
                    type="number"
                    placeholder="4.5"
                    value={calcData.electricity}
                    onChange={(e) => setCalcData({...calcData, electricity: e.target.value})}
                  />
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">Результат расчёта</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Дневная прибыль:</span>
                    <span className="font-semibold text-lg">
                      {profit > 0 ? `₽${profit.toLocaleString()}` : '₽0'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Месячная прибыль:</span>
                    <span className="font-semibold text-lg">
                      {profit > 0 ? `₽${(profit * 30).toLocaleString()}` : '₽0'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Годовая прибыль:</span>
                    <span className="font-semibold text-xl text-primary">
                      {profit > 0 ? `₽${(profit * 365).toLocaleString()}` : '₽0'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-6">
                  <Button className="flex-1">
                    <Icon name="TrendingUp" className="h-4 w-4 mr-2" />
                    Подобрать
                  </Button>
                  <ContactModal />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">О компании</h2>
          <p className="text-lg text-muted-foreground mb-8">
            CryptoMining Pro — ведущий поставщик майнинг оборудования в России с 2018 года. 
            Мы работаем напрямую с производителями в Китае, что позволяет предлагать самые выгодные цены на рынке.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">поставленных майнеров</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-muted-foreground">положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-muted-foreground text-lg">
              Наши эксперты помогут подобрать оптимальное решение для ваших задач
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <ContactForm />
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Быстрый ответ</h3>
                    <p className="text-sm text-muted-foreground">Ответим в течение 30 минут</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Наши специалисты работают 7 дней в неделю с 9:00 до 21:00 по московскому времени
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Персональная консультация</h3>
                    <p className="text-sm text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Поможем рассчитать прибыльность, выберем оборудование и организуем доставку
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Headphones" className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Техническая поддержка</h3>
                    <p className="text-sm text-muted-foreground">Помощь на всех этапах</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  От настройки оборудования до решения технических вопросов
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличный сервис! Быстрая доставка, качественное оборудование. 
                  Майнеры пришли в идеальном состоянии и сразу заработали."
                </p>
                <div className="font-medium">Игорь М.</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">CryptoMining Pro</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональные решения для криптомайнинга
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ASIC майнеры</li>
                <li>GPU фермы</li>
                <li>Аксессуары</li>
                <li>Запчасти</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Доставка и оплата</li>
                <li>Гарантия</li>
                <li>FAQ</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@cryptomining.pro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                  <span>Telegram: @cryptomining</span>
                </div>
                <div className="mt-4">
                  <ContactModal />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 CryptoMining Pro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}