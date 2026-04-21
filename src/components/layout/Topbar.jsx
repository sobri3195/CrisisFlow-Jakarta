import { Download, CircleAlert } from 'lucide-react'
import Badge from '../ui/Badge'
import { nowStamp } from '../../utils/format'

export default function Topbar({ scenarios, scenarioId, setScenarioId, activeScenario }) {
  return (
    <header className="glass mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4">
      <div>
        <h2 className="text-lg font-semibold">AI Urban Mobility Resilience Platform</h2>
        <p className="text-xs text-slate-400">Jakarta Command Center</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Badge status={activeScenario.status}>City Status: {activeScenario.status}</Badge>
        <select
          value={scenarioId}
          onChange={(e) => setScenarioId(e.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs"
        >
          {scenarios.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <div className="rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-300">{nowStamp()}</div>
        <button className="flex items-center gap-2 rounded-lg border border-cyan-600/60 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-200 hover:bg-cyan-500/20">
          <Download size={14} /> Export Report
        </button>
      </div>
      <p className="flex items-center gap-2 text-xs text-slate-400"><CircleAlert size={14} /> {activeScenario.impact}</p>
    </header>
  )
}
