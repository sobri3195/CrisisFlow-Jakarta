import Card from '../components/ui/Card'
import { reportLog } from '../data/mockData'

export default function ReportsPage() {
  return (
    <div className="space-y-4">
      <Card title="Daily Operational Summary" subtitle="AI command center reporting">
        <div className="space-y-2">
          {reportLog.map((r, idx) => (
            <div key={idx} className="rounded-xl border border-slate-700/60 p-3">
              <p className="text-xs text-cyan-300">{r.time} • {r.type}</p>
              <p className="text-sm">{r.note}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Export" subtitle="Mock export controls">
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800">Export PDF</button>
          <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800">Export CSV</button>
        </div>
      </Card>
    </div>
  )
}
