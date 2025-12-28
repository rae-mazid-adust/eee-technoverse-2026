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
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-sm mb-2 font-semibold">{category}</div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {time && <p className="text-sm mb-2">🕒 {time}</p>}

      <p className="text-sm mb-4">{description}</p>

      <div className="text-sm space-y-1">
        {participants && <p>🎯 {participants}</p>}
        {teamSize && <p>👥 {teamSize}</p>}
        {awards && <p>🏅 {awards}</p>}
      </div>
    </div>
  );
}
