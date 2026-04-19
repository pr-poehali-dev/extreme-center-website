import Icon from '@/components/ui/icon';

export default function DeliveryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">ДОСТАВКА И ОПЛАТА</h1>
      <p className="section-subtitle">Доставляем мototехнику по всей России</p>

      {/* Delivery options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {[
          {
            icon: 'Truck',
            title: 'Транспортная компания',
            price: 'Бесплатно',
            desc: 'От 250 000 ₽',
            detail: 'Деловые Линии, ПЭК, СДЭК. Срок: 3–10 дней.',
            color: '#10B981',
          },
          {
            icon: 'MapPin',
            title: 'Доставка по городу',
            price: 'от 5 000 ₽',
            desc: 'г. Ачинск, ул. Дзержинского, 5Ф',
            detail: 'Доставка по Ачинску и окрестностям. Срок 1–2 дня.',
            color: '#3B82F6',
          },
        ].map(opt => (
          <div key={opt.title} className="p-6 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: `${opt.color}22` }}>
              <Icon name={opt.icon as "Truck"} size={22} style={{ color: opt.color }} />
            </div>
            <div className="font-display text-lg font-semibold mb-1">{opt.title}</div>
            <div className="text-2xl font-display font-bold mb-1" style={{ color: opt.color }}>{opt.price}</div>
            <div className="text-sm font-semibold mb-2">{opt.desc}</div>
            <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{opt.detail}</div>
          </div>
        ))}
      </div>

      {/* Payment */}
      <h2 className="section-title mb-6">СПОСОБЫ ОПЛАТЫ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: 'CreditCard', title: 'Карта онлайн', desc: 'Visa, Mastercard, МИР' },
          { icon: 'Banknote', title: 'Наличные', desc: 'При самовывозе или доставке' },
          { icon: 'Percent', title: 'Рассрочка', desc: '0% на 12 месяцев' },
          { icon: 'Building2', title: 'Кредит', desc: 'От 0,1% в месяц' },
        ].map(pay => (
          <div key={pay.title} className="p-5 rounded-lg border text-center" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(255,122,0,0.15)' }}>
              <Icon name={pay.icon as "CreditCard"} size={22} style={{ color: '#FF7A00' }} />
            </div>
            <div className="font-display font-semibold text-sm mb-1">{pay.title}</div>
            <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{pay.desc}</div>
          </div>
        ))}
      </div>

      {/* Conditions */}
      <div className="p-6 rounded-lg border mb-8" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
        <h3 className="font-display text-xl font-semibold mb-4">Условия доставки</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Мотоцикл тщательно упаковывается перед отправкой',
            'Бесплатная доставка при покупке от 250 000 ₽',
            'Страхование груза при транспортировке',
            'Отслеживание в режиме реального времени',
            'Сборка мотоцикла специалистом при доставке',
            'Возврат в течение 14 дней при надлежащем качестве',
          ].map(cond => (
            <div key={cond} className="flex items-center gap-3">
              <Icon name="Check" size={16} style={{ color: '#10B981', flexShrink: 0 }} />
              <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{cond}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}