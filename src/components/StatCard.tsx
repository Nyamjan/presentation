type StatCardProps = {
  label: string;
  value: string;
  trend?: string;
};

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-subtle bg-surface p-5 shadow-sm">
      <p className="text-sm font-medium text-muted">{label}</p>
      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {trend ? (
          <span className="text-xs font-semibold text-emerald-600">
            {trend}
          </span>
        ) : null}
      </div>
    </div>
  );
}
