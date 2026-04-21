import Card from '../components/ui/Card'
import { orchestratorActions, scenarios } from '../data/mockData'

export default function OrchestratorPage() {
  return (
    <div className="space-y-4">
      <Card title="Network-Level Response Actions" subtitle="CrisisFlow Orchestrator recommendations">
        <div className="grid gap-3 md:grid-cols-3">
          {orchestratorActions.map((a) => (
            <div key={a.intersection} className="rounded-xl border border-slate-700/60 p-3">
              <p className="font-medium">{a.intersection}</p>
              <p className="text-sm text-cyan-300">{a.adjustment}</p>
              <p className="text-xs text-slate-400">{a.impact}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Scenario Simulation Cards" subtitle="Estimated network impact under event conditions">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {scenarios.map((s) => (
            <article key={s.id} className="rounded-xl border border-slate-700/60 p-3">
              <p className="text-sm font-medium">{s.name}</p>
              <p className="text-xs text-slate-400">Risk {s.trafficRisk}% • Readiness {s.readiness}</p>
            </article>
          ))}
        </div>
      </Card>
    </div>
  )
}
