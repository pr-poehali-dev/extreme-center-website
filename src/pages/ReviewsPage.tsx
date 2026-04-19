import { useState } from 'react';
import Icon from '@/components/ui/icon';
import StarRating from '@/components/StarRating';
import { reviews, products } from '@/data/motoData';

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState(0);
  const [sortBy, setSortBy] = useState<'date' | 'rating' | 'likes'>('date');
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ author: '', model: '', rating: 0, text: '' });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [localReviews, setLocalReviews] = useState(reviews);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const filtered = localReviews
    .filter(r => filterRating === 0 || r.rating === filterRating)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'likes') return b.likes - a.likes;
      return b.id - a.id;
    });

  const avgRating = (localReviews.reduce((s, r) => s + r.rating, 0) / localReviews.length).toFixed(1);

  const handleSubmit = () => {
    if (!newReview.author || !newReview.text || newReview.rating === 0) return;
    const review = {
      id: localReviews.length + 1,
      author: newReview.author,
      rating: newReview.rating,
      date: 'Только что',
      text: newReview.text,
      verified: false,
      model: newReview.model || 'Не указано',
      avatar: newReview.author[0].toUpperCase(),
      likes: 0,
    };
    setLocalReviews(prev => [review, ...prev]);
    setSubmitted(true);
    setShowForm(false);
    setNewReview({ author: '', model: '', rating: 0, text: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLike = (id: number) => {
    if (likedIds.includes(id)) return;
    setLikedIds(prev => [...prev, id]);
    setLocalReviews(prev => prev.map(r => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="section-title mb-1">ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h1>
      <p className="section-subtitle">Реальные отзывы от реальных владельцев</p>

      {submitted && (
        <div className="mb-6 p-4 rounded-lg flex items-center gap-3 animate-fade-in" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid #10B981' }}>
          <Icon name="CheckCircle" size={20} style={{ color: '#10B981' }} />
          <span className="font-semibold text-sm">Ваш отзыв опубликован! Спасибо.</span>
        </div>
      )}

      {/* Summary block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Big rating */}
        <div className="p-6 rounded-lg border flex flex-col items-center justify-center" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          <div className="font-display text-7xl font-black mb-2" style={{ color: '#FF7A00' }}>{avgRating}</div>
          <StarRating rating={parseFloat(avgRating)} size={24} />
          <div className="text-sm mt-2" style={{ color: 'hsl(var(--muted-foreground))' }}>{localReviews.length} отзывов</div>
        </div>

        {/* Bar chart */}
        <div className="p-6 rounded-lg border" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          {[5, 4, 3, 2, 1].map(star => {
            const count = localReviews.filter(r => r.rating === star).length;
            const pct = Math.round((count / localReviews.length) * 100);
            return (
              <button
                key={star}
                className="flex items-center gap-3 mb-3 w-full group"
                onClick={() => setFilterRating(filterRating === star ? 0 : star)}
              >
                <span className="text-xs w-3 text-right" style={{ color: 'hsl(var(--muted-foreground))' }}>{star}</span>
                <Icon name="Star" size={12} style={{ color: '#FF7A00', fill: '#FF7A00' }} />
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'hsl(var(--muted))' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, background: filterRating === star ? '#FF7A00' : '#FF7A0080' }}
                  />
                </div>
                <span className="text-xs w-10 text-right" style={{ color: 'hsl(var(--muted-foreground))' }}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Write review CTA */}
        <div className="p-6 rounded-lg border flex flex-col items-center justify-center gap-4 text-center" style={{ background: 'linear-gradient(135deg, rgba(255,122,0,0.1), hsl(var(--card)))', borderColor: 'rgba(255,122,0,0.3)' }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,122,0,0.2)' }}>
            <Icon name="PenLine" size={26} style={{ color: '#FF7A00' }} />
          </div>
          <div>
            <div className="font-display font-semibold mb-1">Купили у нас?</div>
            <div className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>Поделитесь впечатлениями — помогите другим</div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-2.5 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]"
            style={{ background: '#FF7A00', color: '#000' }}
          >
            Написать отзыв
          </button>
        </div>
      </div>

      {/* Review form */}
      {showForm && (
        <div className="mb-8 p-6 rounded-lg border animate-fade-in" style={{ background: 'hsl(var(--card))', borderColor: 'rgba(255,122,0,0.3)' }}>
          <h3 className="font-display text-xl font-semibold mb-5">Ваш отзыв</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Ваше имя *</label>
              <input
                type="text"
                value={newReview.author}
                onChange={e => setNewReview(prev => ({ ...prev, author: e.target.value }))}
                placeholder="Иван Иванов"
                className="w-full px-4 py-2.5 rounded border text-sm outline-none focus:border-orange-500 transition-colors"
                style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Модель мотоцикла</label>
              <select
                value={newReview.model}
                onChange={e => setNewReview(prev => ({ ...prev, model: e.target.value }))}
                className="w-full px-4 py-2.5 rounded border text-sm outline-none cursor-pointer"
                style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
              >
                <option value="">Выберите модель</option>
                {products.map(p => (
                  <option key={p.id} value={`${p.brand} ${p.name}`}>{p.brand} {p.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>Ваша оценка *</label>
            <div className="flex items-center gap-3">
              <StarRating
                rating={newReview.rating}
                size={32}
                interactive
                hoverRating={hoverRating}
                onChange={r => setNewReview(prev => ({ ...prev, rating: r }))}
                onHover={setHoverRating}
                onLeave={() => setHoverRating(0)}
              />
              {newReview.rating > 0 && (
                <span className="font-display font-bold text-xl" style={{ color: '#FF7A00' }}>
                  {['', 'Плохо', 'Так себе', 'Нормально', 'Хорошо', 'Отлично!'][newReview.rating]}
                </span>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'hsl(var(--muted-foreground))' }}>Текст отзыва *</label>
            <textarea
              rows={4}
              value={newReview.text}
              onChange={e => setNewReview(prev => ({ ...prev, text: e.target.value }))}
              placeholder="Расскажите о своём опыте покупки и эксплуатации..."
              className="w-full px-4 py-3 rounded border text-sm outline-none focus:border-orange-500 transition-colors resize-none"
              style={{ background: 'hsl(var(--muted))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
            />
            <div className="text-xs mt-1 text-right" style={{ color: 'hsl(var(--muted-foreground))' }}>{newReview.text.length} символов</div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02]"
              style={{ background: '#FF7A00', color: '#000' }}
            >
              Опубликовать отзыв
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 rounded border font-display font-semibold text-sm uppercase tracking-wide transition-all duration-200"
              style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}
            >
              Отмена
            </button>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex gap-2">
          {(['date', 'rating', 'likes'] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className="px-4 py-1.5 rounded border text-xs font-semibold uppercase tracking-wide transition-all"
              style={{
                background: sortBy === s ? '#FF7A00' : 'hsl(var(--card))',
                color: sortBy === s ? '#000' : 'hsl(var(--muted-foreground))',
                borderColor: sortBy === s ? '#FF7A00' : 'hsl(var(--border))',
              }}
            >
              {s === 'date' ? 'Новые' : s === 'rating' ? 'По оценке' : 'Полезные'}
            </button>
          ))}
        </div>
        {filterRating > 0 && (
          <button onClick={() => setFilterRating(0)} className="flex items-center gap-1 px-3 py-1.5 rounded text-xs transition-colors" style={{ background: 'rgba(255,122,0,0.15)', color: '#FF7A00' }}>
            <Icon name="X" size={12} /> {filterRating} звезды
          </button>
        )}
        <span className="ml-auto text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{filtered.length} отзывов</span>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {filtered.map((review, i) => (
          <div key={review.id} className="p-6 rounded-lg border animate-fade-in" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', animationDelay: `${i * 0.05}s` }}>
            <div className="flex flex-wrap items-start gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0" style={{ background: '#FF7A00', color: '#000' }}>
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.author}</div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{review.date}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <StarRating rating={review.rating} size={16} />
                <span className="text-xs px-2 py-0.5 rounded self-start" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                  {review.model}
                </span>
              </div>

              {review.verified && (
                <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                  <Icon name="BadgeCheck" size={14} />
                  Подтверждённая покупка
                </div>
              )}
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>{review.text}</p>

            <div className="flex items-center gap-4 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
              <button
                onClick={() => handleLike(review.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border transition-all hover:border-orange-500/50"
                style={{
                  borderColor: likedIds.includes(review.id) ? '#FF7A00' : 'hsl(var(--border))',
                  color: likedIds.includes(review.id) ? '#FF7A00' : 'hsl(var(--muted-foreground))',
                }}
              >
                <Icon name="ThumbsUp" size={12} />
                Полезно ({review.likes})
              </button>
              <button className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <Icon name="MessageSquare" size={12} />
                Ответить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
