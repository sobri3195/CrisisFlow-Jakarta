import Card from '../components/ui/Card'
import KpiCard from '../components/ui/KpiCard'
import Badge from '../components/ui/Badge'
import JakartaMap from '../components/map/JakartaMap'
import { incidents, kpis, recommendations, transitStatus } from '../data/mockData'

export default function OverviewPage({ activeScenario }) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{kpis.map((k) => <KpiCard key={k.label} item={k} />)}</div>
      <div className="grid gap-4 xl:grid-cols-3">
        <Card title="Live Operations Map" subtitle="Hotspots, emergency corridors, priority intersections" className="xl:col-span-2">
          <JakartaMap />
        </Card>
        <Card title="AI Recommendations" subtitle="Command suggestions from integrated engines">
          <div className="space-y-3">
            {recommendations.map((r) => (
              <div key={r.id} className="rounded-xl border border-slate-700/50 bg-slate-900/70 p-3">
                <p className="text-xs text-cyan-300">{r.engine}</p>
                <p className="text-sm font-medium">{r.action}</p>
                <p className="text-xs text-slate-400">{r.why}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Current Incidents" subtitle="Critical and elevated events">
          <div className="space-y-2">
            {incidents.map((i) => (
              <div key={i.id} className="rounded-xl border border-slate-700/50 p-3">
                <div className="mb-1 flex items-center justify-between"><p className="text-sm font-medium">{i.title}</p><Badge status={i.severity} /></div>
                <p className="text-xs text-slate-400">{i.location} • ETA {i.eta}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Transit Disruption Summary" subtitle={`Scenario: ${activeScenario.name}`}>
          <div className="space-y-2">
            {transitStatus.map((t) => (
              <div key={t.mode} className="flex items-center justify-between rounded-xl border border-slate-700/50 p-3">
                <div><p className="text-sm">{t.mode}</p><p className="text-xs text-slate-400">{t.impact}</p></div>
                <Badge status={t.status}>{t.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
