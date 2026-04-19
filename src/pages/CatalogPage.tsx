import { useState } from 'react';
import Icon from '@/components/ui/icon';
import StarRating from '@/components/StarRating';
import { products, CATEGORIES, Product } from '@/data/motoData';

interface CatalogPageProps {
  onAddToCart: (productId: number) => void;
  onOpenReviews?: (product: Product) => void;
}

export default function CatalogPage({ onAddToCart, onOpenReviews }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [sortBy, setSortBy] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = products
    .filter(p => activeCategory === 'Все' || p.category === activeCategory)
    .filter(p =>
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">КАТАЛОГ МОТОТЕХНИКИ</h1>
      <p className="section-subtitle mb-8">Более 200 моделей в наличии и под заказ</p>

      {/* Filters bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'hsl(var(--muted-foreground))' }} />
          <input
            type="text"
            placeholder="Поиск по бренду или модели..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded border text-sm outline-none focus:border-orange-500 transition-colors"
            style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
          />
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded border text-sm outline-none cursor-pointer"
          style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
        >
          <option value="rating">По рейтингу</option>
          <option value="reviews">По отзывам</option>
          <option value="price-asc">Цена ↑</option>
          <option value="price-desc">Цена ↓</option>
        </select>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 rounded font-display font-semibold text-xs uppercase tracking-wide transition-all duration-200"
            style={{
              background: activeCategory === cat ? '#FF7A00' : 'hsl(var(--card))',
              color: activeCategory === cat ? '#000' : 'hsl(var(--muted-foreground))',
              border: `1px solid ${activeCategory === cat ? '#FF7A00' : 'hsl(var(--border))'}`,
            }}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-sm self-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
          {filtered.length} позиций
        </span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" style={{ color: 'hsl(var(--muted-foreground))' }}>
          <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-display text-xl">Ничего не найдено</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <div key={product.id} className="moto-card animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="relative h-52 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                {product.isNew && (
                  <div className="absolute top-3 left-3 text-xs font-display font-semibold px-2 py-1 rounded uppercase tracking-wider" style={{ background: '#FF7A00', color: '#000' }}>Новинка</div>
                )}
                {product.isSale && (
                  <div className="absolute top-3 left-3 text-xs font-display font-semibold px-2 py-1 rounded uppercase tracking-wider" style={{ background: '#EF4444', color: '#fff' }}>Скидка</div>
                )}
                <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded" style={{ background: 'rgba(0,0,0,0.7)', color: product.inStock ? '#10B981' : 'hsl(var(--muted-foreground))' }}>
                  {product.inStock ? '● В наличии' : '○ Под заказ'}
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: '#FF7A00' }}>{product.brand}</div>
                <div className="font-display text-xl font-semibold mb-1">{product.name}</div>
                <div className="text-xs mb-3 line-clamp-2 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>{product.description}</div>

                <div className="flex items-center gap-2 mb-3 cursor-pointer group" onClick={() => onOpenReviews?.(product)}>
                  <StarRating rating={product.rating} size={14} />
                  <span className="text-xs group-hover:text-white transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {product.rating} · {product.reviewCount} отзывов
                  </span>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Объём', val: `${product.cc} куб` },
                    { label: 'Мощность', val: `${product.power} л.с.` },
                    { label: 'Масса', val: `${product.weight} кг` },
                  ].map(spec => (
                    <div key={spec.label} className="text-center py-1.5 rounded" style={{ background: 'hsl(var(--muted))' }}>
                      <div className="text-xs font-semibold">{spec.val}</div>
                      <div className="text-[10px]" style={{ color: 'hsl(var(--muted-foreground))' }}>{spec.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-2xl font-bold" style={{ color: '#FF7A00' }}>{product.price.toLocaleString('ru-RU')} ₽</span>
                  {product.oldPrice && (
                    <span className="text-sm line-through" style={{ color: 'hsl(var(--muted-foreground))' }}>{product.oldPrice.toLocaleString('ru-RU')} ₽</span>
                  )}
                  {product.oldPrice && (
                    <span className="text-xs px-1.5 py-0.5 rounded font-semibold" style={{ background: '#EF4444', color: '#fff' }}>
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onAddToCart(product.id)}
                    className="flex-1 py-2.5 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: product.inStock ? '#FF7A00' : 'hsl(var(--muted))',
                      color: product.inStock ? '#000' : 'hsl(var(--muted-foreground))',
                    }}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'В корзину' : 'Под заказ'}
                  </button>
                  <button
                    className="w-10 h-10 rounded border flex items-center justify-center transition-colors hover:border-orange-500/50"
                    style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}
                  >
                    <Icon name="Heart" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
