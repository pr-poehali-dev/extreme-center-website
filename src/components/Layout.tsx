import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
}

const NAV_LINKS = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'promotions', label: 'Акции' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'delivery', label: 'Доставка' },
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Layout({ children, activePage, onNavigate, cartCount }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(var(--background))' }}>
      {/* Top bar */}
      <div className="border-b" style={{ borderColor: 'hsl(var(--border))', background: 'hsl(0,0%,4%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
            <span className="flex items-center gap-1">
              <Icon name="Phone" size={12} /> 8 (950) 983-18-23
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Icon name="Clock" size={12} /> Пн–Вс 9:00–21:00
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Icon name="MapPin" size={12} /> г. Ачинск, ул. Дзержинского, 5Ф
            </span>
          </div>
          <div className="text-xs" style={{ color: '#FF7A00' }}>
            🔥 Сезон открыт — скидки до 20%
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b" style={{ borderColor: 'hsl(var(--border))', background: 'rgba(15,15,15,0.95)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded flex items-center justify-center font-display font-bold text-sm" style={{ background: '#FF7A00', color: '#000' }}>
              ЭЦ
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-wide leading-none" style={{ color: 'hsl(var(--foreground))' }}>
                ЭКСТРИМ<span style={{ color: '#FF7A00' }}> ЦЕНТР</span>
              </div>
              <div className="text-[10px] leading-none" style={{ color: 'hsl(var(--muted-foreground))' }}>магазин мототехники</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="nav-link text-sm transition-colors duration-200"
                style={{ color: activePage === link.id ? '#FF7A00' : 'hsl(var(--muted-foreground))' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 text-sm transition-colors" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <Icon name="Search" size={18} />
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className="relative flex items-center gap-2 px-4 py-2 rounded font-display text-sm font-semibold uppercase tracking-wide transition-all duration-200"
              style={{ background: '#FF7A00', color: '#000' }}
            >
              <Icon name="ShoppingCart" size={16} />
              <span className="hidden md:inline">Корзина</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ background: '#EF4444', color: '#fff' }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Burger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" style={{ color: 'hsl(var(--foreground))' }}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t" style={{ borderColor: 'hsl(var(--border))', background: 'hsl(0,0%,7%)' }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                  className="text-left py-3 px-3 rounded text-sm font-medium transition-colors"
                  style={{
                    color: activePage === link.id ? '#FF7A00' : 'hsl(var(--foreground))',
                    background: activePage === link.id ? 'rgba(255,122,0,0.1)' : 'transparent',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t mt-16" style={{ borderColor: 'hsl(var(--border))', background: 'hsl(0,0%,4%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              ЭКСТРИМ<span style={{ color: '#FF7A00' }}> ЦЕНТР</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Крупнейший магазин мототехники в России. Официальный дилер Honda, Yamaha, BMW, KTM.
            </p>
            <div className="flex gap-3">
              {['instagram', 'youtube', 'telegram'].map(s => (
                <div key={s} className="w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer hover:border-orange-500/50" style={{ borderColor: 'hsl(var(--border))' }}>
                  <Icon name="ExternalLink" size={14} style={{ color: 'hsl(var(--muted-foreground))' }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Каталог</div>
            {['Спортивные', 'Круизеры', 'Эндуро', 'Скутеры', 'Туристические'].map(c => (
              <button key={c} onClick={() => onNavigate('catalog')} className="block text-sm mb-2 transition-colors text-left hover:text-white" style={{ color: 'hsl(var(--muted-foreground))' }}>{c}</button>
            ))}
          </div>
          <div>
            <div className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Информация</div>
            {['О компании', 'Доставка', 'Оплата', 'Гарантия', 'Контакты'].map(l => (
              <button key={l} className="block text-sm mb-2 transition-colors text-left hover:text-white" style={{ color: 'hsl(var(--muted-foreground))' }}>{l}</button>
            ))}
          </div>
          <div>
            <div className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Контакты</div>
            <div className="space-y-2 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <div className="flex items-center gap-2"><Icon name="Phone" size={14} /> 8 (950) 983-18-23</div>
              <div className="flex items-center gap-2"><Icon name="Mail" size={14} /> Kaposhkomatvey@gmail.com</div>
              <div className="flex items-center gap-2"><Icon name="MapPin" size={14} /> г. Ачинск, ул. Дзержинского, 5Ф</div>
              <div className="flex items-center gap-2"><Icon name="Clock" size={14} /> Пн–Вс 9:00–21:00</div>
            </div>
          </div>
        </div>
        <div className="border-t max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
          <span>© 2026 Экстрим Центр. Все права защищены.</span>
          <span>ИНН 7701234567 · ОГРН 1234567890123</span>
        </div>
      </footer>
    </div>
  );
}