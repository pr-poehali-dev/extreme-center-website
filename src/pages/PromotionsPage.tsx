import Icon from '@/components/ui/icon';
import { promotions } from '@/data/motoData';

export default function PromotionsPage() {
  const allPromos = [
    ...promotions,
    {
      id: 4,
      title: 'СТРАХОВАНИЕ КАСКО',
      subtitle: 'Скидка 15% при покупке',
      desc: 'При покупке мотоцикла — скидка 15% на страховку',
      badge: '−15%',
      color: '#8B5CF6',
    },
    {
      id: 5,
      title: 'СЕРВИС ТО',
      subtitle: 'Первое ТО бесплатно',
      desc: 'Бесплатное первое ТО через 1000 км для новых покупателей',
      badge: 'FREE',
      color: '#EC4899',
    },
    {
      id: 6,
      title: 'АКСЕССУАРЫ',
      subtitle: 'Скидка 10% на экипировку',
      desc: 'При покупке мотоцикла — скидка 10% на шлемы, куртки, перчатки',
      badge: '−10%',
      color: '#F59E0B',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ</h1>
      <p className="section-subtitle">Актуальные предложения — сезон 2026</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {allPromos.map(promo => {
          const rgb = promo.color === '#FF7A00' ? '255,122,0'
            : promo.color === '#3B82F6' ? '59,130,246'
            : promo.color === '#10B981' ? '16,185,129'
            : promo.color === '#8B5CF6' ? '139,92,246'
            : promo.color === '#EC4899' ? '236,72,153'
            : '245,158,11';

          return (
            <div
              key={promo.id}
              className="relative rounded-lg p-8 border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: `linear-gradient(135deg, rgba(${rgb},0.2), hsl(var(--card)))`,
                borderColor: `rgba(${rgb},0.3)`,
              }}
            >
              <div className="relative z-10">
                <div className="text-5xl font-display font-black mb-3" style={{ color: promo.color }}>{promo.badge}</div>
                <div className="font-display text-2xl font-bold mb-1 text-white">{promo.title}</div>
                <div className="font-semibold mb-2 text-white">{promo.subtitle}</div>
                <div className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{promo.desc}</div>
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded font-display font-semibold text-sm uppercase tracking-wide"
                  style={{ background: promo.color, color: promo.color === '#F59E0B' || promo.color === '#FF7A00' ? '#000' : '#fff' }}
                >
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 font-display font-black opacity-[0.08] text-9xl leading-none" style={{ color: promo.color }}>
                %
              </div>
            </div>
          );
        })}
      </div>

      {/* Banner */}
      <div className="p-8 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.2), hsl(var(--card)))', border: '1px solid rgba(255,122,0,0.3)' }}>
        <div className="font-display text-3xl font-bold mb-2">РАССРОЧКА 0% НА 12 МЕСЯЦЕВ</div>
        <p className="mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Любой мотоцикл в нашем каталоге доступен в рассрочку без переплат.<br />
          Первоначальный взнос от 0%. Одобрение за 15 минут.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {[
            { val: '0%', label: 'Переплата' },
            { val: '15 мин', label: 'Одобрение' },
            { val: 'от 0%', label: 'Первый взнос' },
            { val: '12 мес', label: 'Максимальный срок' },
          ].map(s => (
            <div key={s.val} className="text-center">
              <div className="font-display text-3xl font-bold" style={{ color: '#FF7A00' }}>{s.val}</div>
              <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <button className="px-8 py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.02]" style={{ background: '#FF7A00', color: '#000' }}>
          Оформить рассрочку
        </button>
      </div>
    </div>
  );
}
