import Icon from '@/components/ui/icon';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative py-24 px-4 text-center overflow-hidden" style={{ background: 'hsl(0,0%,7%)' }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-5 font-display text-[20rem] font-black select-none pointer-events-none leading-none" style={{ color: '#FF7A00' }}>
          ЭЦ
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="text-xs font-display font-semibold uppercase tracking-widest mb-4" style={{ color: '#FF7A00' }}>С 2014 года</div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-4 leading-tight">О КОМПАНИИ<br /><span style={{ color: '#FF7A00' }}>ЭКСТРИМ ЦЕНТР</span></h1>
          <p className="text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Крупнейший независимый дилер мototехники в России. 12 лет опыта, 5000+ довольных клиентов, официальное представительство 8 мировых брендов.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { val: '12', unit: 'лет', label: 'на рынке' },
            { val: '5000+', unit: '', label: 'клиентов' },
            { val: '200+', unit: '', label: 'моделей' },
            { val: '8', unit: '', label: 'брендов' },
          ].map(s => (
            <div key={s.label} className="p-5 rounded-lg border text-center" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
              <div className="font-display text-4xl font-black" style={{ color: '#FF7A00' }}>{s.val}<span className="text-2xl">{s.unit}</span></div>
              <div className="text-sm mt-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">Наша история</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Экстрим Центр основан в 2014 году командой энтузиастов мотоспорта. Начав с небольшого шоурума в Ачинске, мы выросли до одного из крупнейших магазинов мототехники в регионе.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Сегодня мы — официальный партнёр Honda, Yamaha, BMW Motorrad, KTM, Harley-Davidson, Kawasaki, Suzuki и Ducati. В нашем каталоге более 200 актуальных моделей.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Наша миссия: сделать мир мотоциклов доступным для каждого. Профессиональная консультация, честные цены, надёжный сервис.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { year: '2014', event: 'Открытие первого шоурума в Ачинске' },
              { year: '2016', event: 'Статус официального дилера Honda и Yamaha' },
              { year: '2018', event: 'Расширение: добавили BMW и KTM' },
              { year: '2020', event: 'Запуск онлайн-магазина и доставки по России' },
              { year: '2023', event: 'Партнёрство с Harley-Davidson и Ducati' },
              { year: '2026', event: '5000-й довольный клиент!' },
            ].map(item => (
              <div key={item.year} className="flex gap-4">
                <div className="font-display font-bold text-sm w-12 flex-shrink-0 mt-0.5" style={{ color: '#FF7A00' }}>{item.year}</div>
                <div className="flex-1 text-sm pb-3 border-b" style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <h2 className="font-display text-3xl font-bold mb-6">Команда</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Алексей Смирнов', role: 'Основатель и CEO', avatar: 'А' },
            { name: 'Мария Петрова', role: 'Директор по продажам', avatar: 'М' },
            { name: 'Игорь Козлов', role: 'Главный механик', avatar: 'И' },
            { name: 'Анна Волкова', role: 'Руководитель сервиса', avatar: 'А' },
          ].map(member => (
            <div key={member.name} className="p-5 rounded-lg border text-center" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-display font-bold text-2xl" style={{ background: '#FF7A00', color: '#000' }}>
                {member.avatar}
              </div>
              <div className="font-semibold text-sm mb-1">{member.name}</div>
              <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{member.role}</div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="p-6 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          <h3 className="font-display text-xl font-semibold mb-4">Дилерские сертификаты</h3>
          <div className="flex flex-wrap gap-3">
            {['Honda', 'Yamaha', 'BMW Motorrad', 'KTM', 'Harley-Davidson', 'Kawasaki', 'Suzuki', 'Ducati'].map(brand => (
              <div key={brand} className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold" style={{ borderColor: 'rgba(255,122,0,0.3)', color: '#FF7A00' }}>
                <Icon name="BadgeCheck" size={14} />
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}