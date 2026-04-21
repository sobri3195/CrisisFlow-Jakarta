import Card from '../components/ui/Card'

export default function ScenarioSimulatorPage({ activeScenario, scenarios, setScenarioId }) {
  return (
    <div className="space-y-4">
      <Card title="Scenario Simulator" subtitle="Instantly evaluate network outcomes">
        <div className="grid gap-2 md:grid-cols-3">
          {scenarios.map((s) => (
            <button key={s.id} onClick={() => setScenarioId(s.id)} className={`rounded-xl border p-3 text-left ${activeScenario.id===s.id?'border-cyan-400 bg-cyan-500/10':'border-slate-700'}`}>
              <p className="font-medium">{s.name}</p>
              <p className="text-xs text-slate-400">{s.impact}</p>
            </button>
          ))}
        </div>
      </Card>
      <Card title="Simulated Outputs" subtitle="Updated mock decisions from all engines">
        <ul className="space-y-2 text-sm">
          <li>Traffic risk: <strong>{activeScenario.trafficRisk}%</strong></li>
          <li>Readiness score: <strong>{activeScenario.readiness}/100</strong></li>
          <li>Affected corridors: <strong>{activeScenario.affected.join(', ')}</strong></li>
          <li>Transit recovery suggestion: Deploy temporary shuttle and dynamic headway balancing.</li>
          <li>Orchestration decision: Prioritize 3 critical intersections and open diversion corridor.</li>
        </ul>
      </Card>
    </div>
  )
}
