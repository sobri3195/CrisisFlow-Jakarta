import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SimpleLineChart from '../components/charts/SimpleLineChart'
import { anomalySignals, bottleneckSeries } from '../data/mockData'

export default function CongestionDetectorPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <Card title="Early Congestion Signals" subtitle="Ghost Congestion Detector" className="xl:col-span-2">
        <div className="space-y-3">
          {anomalySignals.map((a) => (
            <div key={a.corridor} className="rounded-xl border border-slate-700/60 p-3">
              <div className="flex items-center justify-between"><p>{a.corridor} — {a.category}</p><Badge status={a.risk} /></div>
              <p className="text-xs text-slate-400">Spillback probability: {(a.spillback * 100).toFixed(0)}%</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Engine Notes" subtitle="What it detects and why it matters">
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Detects abnormal stop-start waveforms before visible jams.</li>
          <li>Flags illegal parking zones creating hidden capacity loss.</li>
          <li>Prioritizes micro-bottlenecks with highest spillback propagation.</li>
        </ul>
      </Card>
      <Card title="Micro-bottleneck Escalation" subtitle="Time-series forecast" className="xl:col-span-2">
        <SimpleLineChart data={bottleneckSeries} />
      </Card>
      <Card title="Camera Event Cards" subtitle="Mock CCTV-derived events">
        <div className="space-y-2">
          {[1,2,3].map((n) => <div key={n} className="h-24 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 p-2 text-xs">Camera Node #{n} • Anomaly cluster detected</div>)}
        </div>
      </Card>
    </div>
  )
}
