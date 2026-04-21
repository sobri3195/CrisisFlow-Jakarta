import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { transitStatus } from '../data/mockData'

export default function ShadowDispatcherPage() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card title="Disrupted Mode Status" subtitle="Intermodal recovery manager">
        <div className="space-y-2">
          {transitStatus.map((m) => (
            <div key={m.mode} className="rounded-xl border border-slate-700/60 p-3">
              <div className="flex justify-between"><p className="font-medium">{m.mode}</p><Badge status={m.status}/></div>
              <p className="text-xs text-slate-400">{m.impact} • Spillover {m.spillover}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Recovery Timeline" subtitle="Affected and backup routes">
        <ol className="space-y-3 text-sm">
          <li>07:15 — Activate backup shuttle Harmoni → Kota.</li>
          <li>07:30 — Increase MRT feeder circulation at Dukuh Atas.</li>
          <li>08:00 — Rebalance corridor headway to absorb spillover.</li>
          <li>08:20 — Normalization monitoring and staggered rollback.</li>
        </ol>
      </Card>
    </div>
  )
}
