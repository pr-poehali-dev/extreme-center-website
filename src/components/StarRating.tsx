interface StarRatingProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onChange?: (r: number) => void;
  hoverRating?: number;
  onHover?: (r: number) => void;
  onLeave?: () => void;
}

export default function StarRating({ rating, size = 16, interactive, onChange, hoverRating, onHover, onLeave }: StarRatingProps) {
  const display = hoverRating ?? rating;

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(star => {
        const filled = star <= display;
        const halfFilled = !filled && star - 0.5 <= display;
        return (
          <svg
            key={star}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={filled ? '#FF7A00' : halfFilled ? 'url(#half)' : 'none'}
            stroke={filled || halfFilled ? '#FF7A00' : '#444'}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={interactive ? 'cursor-pointer transition-transform hover:scale-110' : ''}
            onClick={() => interactive && onChange?.(star)}
            onMouseEnter={() => interactive && onHover?.(star)}
            onMouseLeave={() => interactive && onLeave?.()}
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#FF7A00" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      })}
    </div>
  );
}
