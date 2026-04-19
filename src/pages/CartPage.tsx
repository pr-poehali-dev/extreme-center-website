import Icon from '@/components/ui/icon';
import { products } from '@/data/motoData';

interface CartPageProps {
  cartItems: number[];
  onRemove: (productId: number) => void;
  onNavigate: (page: string) => void;
}

export default function CartPage({ cartItems, onRemove, onNavigate }: CartPageProps) {
  const itemCounts = cartItems.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const cartProducts = Object.entries(itemCounts).map(([id, count]) => ({
    product: products.find(p => p.id === Number(id))!,
    count,
  })).filter(x => x.product);

  const total = cartProducts.reduce((s, { product, count }) => s + product.price * count, 0);

  if (cartProducts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'hsl(var(--muted))' }}>
          <Icon name="ShoppingCart" size={36} style={{ color: 'hsl(var(--muted-foreground))' }} />
        </div>
        <h1 className="font-display text-3xl font-bold mb-3">Корзина пуста</h1>
        <p className="mb-8" style={{ color: 'hsl(var(--muted-foreground))' }}>Добавьте мотоцикл из каталога</p>
        <button
          onClick={() => onNavigate('catalog')}
          className="px-8 py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.02]"
          style={{ background: '#FF7A00', color: '#000' }}
        >
          Перейти в каталог
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">КОРЗИНА</h1>
      <p className="section-subtitle">{cartProducts.length} позиций</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartProducts.map(({ product, count }) => (
            <div key={product.id} className="p-5 rounded-lg border flex gap-4" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
              <img src={product.image} alt={product.name} className="w-24 h-20 object-cover rounded flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#FF7A00' }}>{product.brand}</div>
                <div className="font-display font-semibold">{product.name}</div>
                <div className="text-xs mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{product.cc} куб · {product.power} л.с.</div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <div className="font-display text-lg font-bold" style={{ color: '#FF7A00' }}>
                  {(product.price * count).toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>×{count}</div>
                <button onClick={() => onRemove(product.id)} className="text-xs flex items-center gap-1 transition-colors hover:text-red-400" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <Icon name="Trash2" size={12} /> Удалить
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="p-6 rounded-lg border sticky top-24" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
            <h3 className="font-display text-xl font-semibold mb-4">Итого</h3>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span style={{ color: 'hsl(var(--muted-foreground))' }}>Товаров</span>
                <span>{cartItems.length} шт.</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'hsl(var(--muted-foreground))' }}>Доставка</span>
                <span style={{ color: '#10B981' }}>Бесплатно</span>
              </div>
              <div className="border-t pt-2 flex justify-between" style={{ borderColor: 'hsl(var(--border))' }}>
                <span className="font-display font-semibold">К оплате</span>
                <span className="font-display font-bold text-xl" style={{ color: '#FF7A00' }}>
                  {total.toLocaleString('ru-RU')} ₽
                </span>
              </div>
            </div>
            <button className="w-full py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.02] mb-3" style={{ background: '#FF7A00', color: '#000' }}>
              Оформить заказ
            </button>
            <button onClick={() => onNavigate('catalog')} className="w-full py-3 rounded border font-display font-semibold text-sm uppercase tracking-wide transition-all" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
              Продолжить покупки
            </button>

            <div className="mt-4 space-y-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              {[
                { icon: 'Shield', text: 'Официальная гарантия производителя' },
                { icon: 'Truck', text: 'Бесплатная доставка по России' },
                { icon: 'CreditCard', text: 'Оплата картой, наличными, кредит' },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2">
                  <Icon name={item.icon as "Shield"} size={13} style={{ color: '#FF7A00' }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
