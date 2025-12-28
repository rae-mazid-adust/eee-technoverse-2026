type SegmentCardProps = {
  title: string;
  time?: string;
  description: string;
  participants?: string;
  teamSize?: string;
  awards?: string;
  category: string;
};

export default function SegmentCard({
  title,
  time,
  description,
  participants,
  teamSize,
  awards,
  category,
}: SegmentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg">
      
      {/* Category */}
      <div className="text-sm font-semibold text-slate-600 mb-2">
        {category}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">
        {title}
      </h3>

      {/* Time */}
      {time && (
        <p className="text-sm text-slate-600 mb-2">
          🕒 {time}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-slate-700 mb-4">
        {description}
      </p>

      {/* Meta Info */}
      <div className="text-sm text-slate-700 space-y-1">
        {participants && <p>🎯 {participants}</p>}
        {teamSize && <p>👥 {teamSize}</p>}
        {awards && <p>🏅 {awards}</p>}
      </div>
    </div>
  );
}
