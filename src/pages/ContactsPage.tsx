import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', type: 'question' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', message: '', type: 'question' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">КОНТАКТЫ</h1>
      <p className="section-subtitle">Всегда рады помочь с выбором</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Info */}
        <div>
          <div className="space-y-4 mb-8">
            {[
              { icon: 'MapPin', title: 'Адрес', val: 'г. Ачинск, ул. Дзержинского, 5Ф', sub: 'Приходите в любое время работы' },
              { icon: 'Phone', title: 'Телефон', val: '8 (950) 983-18-23', sub: 'Звоните — ответим сразу' },
              { icon: 'Mail', title: 'Email', val: 'info@extremecenter.ru', sub: 'Отвечаем в течение часа' },
              { icon: 'Clock', title: 'Режим работы', val: 'Пн–Вс: 9:00–21:00', sub: 'Без выходных' },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-4 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,122,0,0.15)' }}>
                  <Icon name={item.icon as "MapPin"} size={18} style={{ color: '#FF7A00' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold mb-0.5" style={{ color: 'hsl(var(--muted-foreground))' }}>{item.title}</div>
                  <div className="font-semibold text-sm">{item.val}</div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div className="p-5 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
            <div className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Мы в соцсетях</div>
            <div className="flex gap-3">
              {['ВКонтакте', 'Telegram', 'YouTube'].map(s => (
                <button key={s} className="px-4 py-2 rounded border text-xs font-semibold transition-all hover:border-orange-500/50 hover:text-white" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 rounded-lg border animate-fade-in" style={{ background: 'rgba(16,185,129,0.1)', borderColor: '#10B981' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(16,185,129,0.2)' }}>
                <Icon name="CheckCircle" size={32} style={{ color: '#10B981' }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Заявка отправлена!</h3>
              <p className="mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>Мы свяжемся с вами в течение 15 минут</p>
              <button onClick={() => setSent(false)} className="px-6 py-2.5 rounded border font-display font-semibold text-sm uppercase tracking-wide" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}>
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
              <h3 className="font-display text-2xl font-semibold mb-6">Написать нам</h3>

              <div className="flex gap-2 mb-5">
                {[
                  { val: 'question', label: 'Вопрос' },
                  { val: 'order', label: 'Заказ' },
                  { val: 'service', label: 'Сервис' },
                ].map(t => (
                  <button
                    key={t.val}
                    type="button"
                    onClick={() => setForm(prev => ({ ...prev, type: t.val }))}
                    className="flex-1 py-2 rounded border text-xs font-semibold uppercase tracking-wide transition-all"
                    style={{
                      background: form.type === t.val ? '#FF7A00' : 'hsl(var(--muted))',
                      color: form.type === t.val ? '#000' : 'hsl(var(--muted-foreground))',
                      borderColor: form.type === t.val ? '#FF7A00' : 'hsl(var(--border))',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="space-y-4 mb-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-2.5 rounded border text-sm outline-none focus:border-orange-500 transition-colors"
                    style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+7 (999) 000-00-00"
                    className="w-full px-4 py-2.5 rounded border text-sm outline-none focus:border-orange-500 transition-colors"
                    style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Сообщение</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Ваш вопрос или пожелание..."
                    className="w-full px-4 py-3 rounded border text-sm outline-none focus:border-orange-500 transition-colors resize-none"
                    style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all hover:scale-[1.01]"
                style={{ background: '#FF7A00', color: '#000' }}
              >
                Отправить заявку
              </button>
              <p className="text-xs text-center mt-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}