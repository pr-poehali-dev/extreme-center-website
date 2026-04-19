import { useState } from 'react';
import Icon from '@/components/ui/icon';
import StarRating from '@/components/StarRating';
import { products, reviews, promotions } from '@/data/motoData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (productId: number) => void;
}

export default function HomePage({ onNavigate, onAddToCart }: HomePageProps) {
  const featured = products.slice(0, 3);
  const latestReviews = reviews.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/2281ab3b-872a-4ce2-bb17-7a62bc7901ba/files/6c5e6ae2-b5e8-4aea-be8c-197bbb28eaf5.jpg)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.6) 100%)' }} />

        {/* Decorative line */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: '#FF7A00' }} />

        <div className="relative max-w-7xl mx-auto px-4 py-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest" style={{ borderColor: '#FF7A00', color: '#FF7A00' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#FF7A00' }} />
            Сезон 2026 открыт
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-none mb-4 text-white">
            ЗАРЯДИ<br />
            <span style={{ color: '#FF7A00' }}>АДРЕНАЛИН</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Официальный дилер Honda, Yamaha, BMW и KTM.<br />
            Более 200 моделей в наличии. Доставка по всей России.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => onNavigate('catalog')}
              className="flex items-center gap-2 px-8 py-4 rounded font-display font-semibold text-lg uppercase tracking-wide transition-all duration-200 hover:scale-[1.03]"
              style={{ background: '#FF7A00', color: '#000' }}
            >
              <Icon name="Grid2X2" size={20} />
              Смотреть каталог
            </button>
            <button
              onClick={() => onNavigate('promotions')}
              className="flex items-center gap-2 px-8 py-4 rounded font-display font-semibold text-lg uppercase tracking-wide border transition-all duration-200 hover:border-orange-500/50 hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}
            >
              <Icon name="Tag" size={20} />
              Акции
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { val: '200+', label: 'моделей в наличии' },
              { val: '12 лет', label: 'на рынке' },
              { val: '4.8★', label: 'средний рейтинг' },
              { val: '5000+', label: 'довольных клиентов' },
            ].map(s => (
              <div key={s.val}>
                <div className="font-display text-3xl font-bold" style={{ color: '#FF7A00' }}>{s.val}</div>
                <div className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">АКЦИИ</h2>
              <p className="section-subtitle">Специальные предложения этого сезона</p>
            </div>
            <button onClick={() => onNavigate('promotions')} className="text-sm flex items-center gap-1 transition-colors hover:text-white" style={{ color: '#FF7A00' }}>
              Все акции <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promotions.map(promo => (
              <div
                key={promo.id}
                className="relative rounded-lg p-6 border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, rgba(${promo.color === '#FF7A00' ? '255,122,0' : promo.color === '#3B82F6' ? '59,130,246' : '16,185,129'},0.15), hsl(var(--card)))` }}
              >
                <div className="text-4xl font-display font-black mb-2" style={{ color: promo.color }}>{promo.badge}</div>
                <div className="font-display text-xl font-semibold mb-1">{promo.title}</div>
                <div className="font-semibold mb-2 text-white">{promo.subtitle}</div>
                <div className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{promo.desc}</div>
                <div className="absolute top-4 right-4 opacity-10 font-display text-8xl font-black" style={{ color: promo.color }}>%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 px-4" style={{ background: 'hsl(0,0%,7%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">ПОПУЛЯРНЫЕ МОДЕЛИ</h2>
              <p className="section-subtitle">Самые продаваемые этого сезона</p>
            </div>
            <button onClick={() => onNavigate('catalog')} className="text-sm flex items-center gap-1 transition-colors hover:text-white" style={{ color: '#FF7A00' }}>
              Весь каталог <Icon name="ArrowRight" size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <div key={product.id} className="moto-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  {product.isNew && (
                    <div className="absolute top-3 left-3 text-xs font-display font-semibold px-2 py-1 rounded uppercase tracking-wider z-10" style={{ background: '#FF7A00', color: '#000' }}>Новинка</div>
                  )}
                  {product.isSale && (
                    <div className="absolute top-3 left-3 text-xs font-display font-semibold px-2 py-1 rounded uppercase tracking-wider z-10" style={{ background: '#EF4444', color: '#fff' }}>Скидка</div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.6)' }}>
                      <span className="font-display font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Под заказ</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#FF7A00' }}>{product.brand}</div>
                  <div className="font-display text-xl font-semibold mb-2">{product.name}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} size={14} />
                    <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{product.rating} ({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-display text-2xl font-bold" style={{ color: '#FF7A00' }}>{product.price.toLocaleString('ru-RU')} ₽</span>
                    {product.oldPrice && (
                      <span className="text-sm line-through" style={{ color: 'hsl(var(--muted-foreground))' }}>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                    )}
                  </div>
                  <div className="flex gap-3 text-xs mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    <span>{product.cc} куб</span>
                    <span>·</span>
                    <span>{product.power} л.с.</span>
                    <span>·</span>
                    <span>{product.weight} кг</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="w-full py-2.5 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: product.inStock ? '#FF7A00' : 'hsl(var(--muted))', color: product.inStock ? '#000' : 'hsl(var(--muted-foreground))' }}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'В корзину' : 'Под заказ'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h2>
              <p className="section-subtitle">Реальные отзывы от реальных владельцев</p>
            </div>
            <button onClick={() => onNavigate('reviews')} className="text-sm flex items-center gap-1 transition-colors hover:text-white" style={{ color: '#FF7A00' }}>
              Все отзывы <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-8 mb-8 p-6 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
            <div className="text-center">
              <div className="font-display text-6xl font-black" style={{ color: '#FF7A00' }}>4.8</div>
              <StarRating rating={4.8} size={20} />
              <div className="text-xs mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>243 отзыва</div>
            </div>
            <div className="flex-1">
              {[5, 4, 3, 2, 1].map(star => (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <span className="text-xs w-4 text-right" style={{ color: 'hsl(var(--muted-foreground))' }}>{star}</span>
                  <Icon name="Star" size={12} style={{ color: '#FF7A00', fill: '#FF7A00' }} />
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(var(--border))' }}>
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${[78, 15, 5, 1, 1][5 - star]}%`, background: '#FF7A00' }}
                    />
                  </div>
                  <span className="text-xs w-8" style={{ color: 'hsl(var(--muted-foreground))' }}>{[78, 15, 5, 1, 1][5 - star]}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReviews.map((review, i) => (
              <div key={review.id} className="p-5 rounded-lg border animate-fade-in" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm" style={{ background: '#FF7A00', color: '#000' }}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{review.author}</div>
                    <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{review.date}</div>
                  </div>
                  {review.verified && (
                    <div className="ml-auto flex items-center gap-1 text-xs" style={{ color: '#10B981' }}>
                      <Icon name="BadgeCheck" size={14} />
                      <span className="hidden md:inline">Куплено</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review.rating} size={14} />
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                    {review.model}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {review.text.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <Icon name="ThumbsUp" size={12} />
                  <span>{review.likes} полезных</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded border font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]"
              style={{ borderColor: '#FF7A00', color: '#FF7A00' }}
            >
              Читать все отзывы <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 px-4" style={{ background: 'hsl(0,0%,7%)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">НАШИ УСЛУГИ</h2>
          <p className="section-subtitle text-center">Всё что нужно мотоциклисту — в одном месте</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: 'Wrench', title: 'ТО и ремонт', desc: 'Официальный сервис' },
              { icon: 'CreditCard', title: 'Рассрочка 0%', desc: 'На 12 месяцев' },
              { icon: 'RefreshCcw', title: 'Trade-In', desc: 'Обмен вашего байка' },
              { icon: 'Shield', title: 'Страхование', desc: 'ОСАГО и КАСКО' },
            ].map(s => (
              <div key={s.title} className="p-5 rounded-lg border text-center transition-all duration-300 cursor-pointer hover:border-orange-500/50 group" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-all group-hover:scale-110" style={{ background: 'rgba(255,122,0,0.15)' }}>
                  <Icon name={s.icon as any} size={22} style={{ color: '#FF7A00' }} />
                </div>
                <div className="font-display font-semibold text-sm uppercase tracking-wide mb-1">{s.title}</div>
                <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.15), hsl(var(--background)))' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">ГОТОВ К СЕЗОНУ?</h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Получи консультацию от нашего эксперта. Поможем выбрать идеальный байк под твои задачи и бюджет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contacts')}
              className="px-8 py-4 rounded font-display font-semibold text-lg uppercase tracking-wide transition-all duration-200 hover:scale-[1.03]"
              style={{ background: '#FF7A00', color: '#000' }}
            >
              Получить консультацию
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="px-8 py-4 rounded border font-display font-semibold text-lg uppercase tracking-wide transition-all duration-200 hover:border-orange-500/50"
              style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
            >
              Смотреть каталог
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
