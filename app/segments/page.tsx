import SegmentCard from "@/components/SegmentCard";
import {
  day1Segments,
  culturalEvening,
  day2Segments,
} from "./segmentsData";

export default function SegmentsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Event Segments
      </h1>
      <p className="text-center mb-12">
        Event details are as following (subject to revision by the organizers)
      </p>

      {/* Day 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          🔥 Day 1: Tech Innovation & Knowledge Fest
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {day1Segments.map((segment, index) => (
            <SegmentCard key={index} {...segment} />
          ))}
        </div>

        {/* Cultural Evening */}
        <div className="mt-10">
          <SegmentCard {...culturalEvening} />
        </div>
      </section>

      {/* Day 2 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          🎉 Day 2: Culture, Fun & Connection
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {day2Segments.map((segment, index) => (
            <SegmentCard key={index} {...segment} />
          ))}
        </div>
      </section>

      {/* Footer Hint */}
      <p className="text-center mt-16 text-sm">
        👉 Registration for all segments is available via the “Register” tab in the navigation.
      </p>
    </section>
  );
}
