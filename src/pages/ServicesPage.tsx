import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Wrench',
    title: 'Техническое обслуживание',
    desc: 'Плановое ТО по регламенту производителя. Замена масла, фильтров, тормозных колодок, цепи. Диагностика и настройка.',
    price: 'от 3 000 ₽',
    features: ['Оригинальные запчасти', 'Гарантия на работы 6 мес', 'Мастера с сертификатом'],
  },
  {
    icon: 'Settings',
    title: 'Сезонное хранение',
    desc: 'Бережное хранение вашего мотоцикла в зимний период. Правильная консервация, охраняемый отапливаемый бокс.',
    price: 'от 8 000 ₽/сез',
    features: ['Консервация в подарок', 'Видеонаблюдение 24/7', 'Страховка включена'],
  },
  {
    icon: 'RefreshCcw',
    title: 'Trade-In',
    desc: 'Обменяйте ваш старый мотоцикл на новый. Быстрая оценка за 30 минут, прозрачные условия, доплата — и вы уже на новом байке.',
    price: 'Оценка бесплатно',
    features: ['Любое состояние', 'Доплата до 150 000 ₽', 'Без скрытых условий'],
  },
  {
    icon: 'Shield',
    title: 'Страхование',
    desc: 'Помощь в оформлении ОСАГО и КАСКО. Партнёрство с ведущими страховщиками России. Лучшие условия для мотоциклистов.',
    price: 'от 5 000 ₽/год',
    features: ['ОСАГО + КАСКО', 'Скидка 15% для клиентов', 'Онлайн-оформление'],
  },
  {
    icon: 'Palette',
    title: 'Кастомизация',
    desc: 'Кастомные аэрографические работы, тюнинг выхлопной системы, установка дополнительного оборудования. Ваш байк — ваши правила.',
    price: 'от 15 000 ₽',
    features: ['Эксклюзивный дизайн', 'Только оригинальные детали', 'Гарантия на покраску'],
  },
  {
    icon: 'GraduationCap',
    title: 'Обучение вождению',
    desc: 'Курсы для начинающих и опытных мотоциклистов. Безопасная закрытая площадка, опытные инструкторы, выдача сертификата.',
    price: 'от 10 000 ₽',
    features: ['Собственная площадка', 'Группы 4–6 человек', 'Сертификат по окончании'],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">НАШИ УСЛУГИ</h1>
      <p className="section-subtitle">Всё что нужно мотоциклисту — в одном месте</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="p-6 rounded-lg border transition-all duration-300 hover:border-orange-500/40 group animate-fade-in"
            style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ background: 'rgba(255,122,0,0.15)' }}>
                <Icon name={service.icon as "Wrench"} size={22} style={{ color: '#FF7A00' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-display text-lg font-semibold">{service.title}</div>
                  <div className="font-display font-bold text-sm whitespace-nowrap" style={{ color: '#FF7A00' }}>{service.price}</div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>{service.desc}</p>
                <div className="space-y-1.5">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      <Icon name="Check" size={13} style={{ color: '#10B981' }} />
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:text-white"
                  style={{ color: '#FF7A00' }}
                >
                  Подробнее <Icon name="ArrowRight" size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-8 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.15), hsl(var(--card)))', border: '1px solid rgba(255,122,0,0.3)' }}>
        <h2 className="font-display text-3xl font-bold mb-3">Нужна консультация?</h2>
        <p className="mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>Позвоните или оставьте заявку — наш специалист ответит в течение 15 минут</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:89509831823" className="inline-flex items-center gap-2 px-8 py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.02]" style={{ background: '#FF7A00', color: '#000' }}>
            <Icon name="Phone" size={16} />
            8 (950) 983-18-23
          </a>
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded border font-display font-semibold text-sm uppercase tracking-wide transition-all" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}>
            <Icon name="MessageSquare" size={16} />
            Написать в чат
          </button>
        </div>
      </div>
    </div>
  );
}