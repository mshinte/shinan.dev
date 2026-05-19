import type { WorkFilter } from "./workData";

type WorkTabsProps = {
  activeFilter: WorkFilter;
  filters: Array<{ label: string; value: WorkFilter }>;
  onChange: (filter: WorkFilter) => void;
};

export default function WorkTabs({
  activeFilter,
  filters,
  onChange
}: WorkTabsProps) {
  return (
    <div className="mb-8 inline-flex rounded-full border border-black/10 bg-white/60 p-1">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              isActive ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
            key={filter.value}
            onClick={() => onChange(filter.value)}
            type="button"
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
