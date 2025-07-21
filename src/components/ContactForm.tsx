import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ContactFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function ContactForm({ onClose, isModal = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    subject: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Автоматически закрыть модалку через 3 секунды
    if (isModal && onClose) {
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', message: '', subject: 'general' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <Card className={isModal ? "w-full max-w-md mx-auto" : ""}>
        <CardContent className="p-8 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Check" className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Сообщение отправлено!</h3>
            <p className="text-muted-foreground">
              Спасибо за обращение! Наш менеджер свяжется с вами в течение 30 минут.
            </p>
          </div>
          {isModal && (
            <Button onClick={onClose} variant="outline" className="mt-4">
              Закрыть
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={isModal ? "w-full max-w-md mx-auto" : ""}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageSquare" className="h-5 w-5 text-primary" />
              Обратная связь
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Получите консультацию специалиста
            </p>
          </div>
          {isModal && onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Тема обращения <span className="text-red-500">*</span>
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="general">Общие вопросы</option>
              <option value="equipment">Подбор оборудования</option>
              <option value="delivery">Доставка</option>
              <option value="warranty">Гарантия</option>
              <option value="technical">Техническая поддержка</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Имя <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Телефон <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Сообщение <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Опишите ваш вопрос подробнее..."
              rows={4}
              required
            />
          </div>

          <div className="bg-primary/5 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="Clock" className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-sm">Быстрый ответ</h4>
                <p className="text-xs text-muted-foreground">
                  Наш менеджер ответит в течение 30 минут в рабочее время (9:00-21:00 МСК)
                </p>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon name="Loader2" className="h-4 w-4 mr-2 animate-spin" />
                Отправляем...
              </>
            ) : (
              <>
                <Icon name="Send" className="h-4 w-4 mr-2" />
                Отправить сообщение
              </>
            )}
          </Button>

          <div className="flex items-center gap-4 pt-2 border-t">
            <div className="flex items-center gap-2">
              <Icon name="Phone" className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">@cryptomining</span>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}