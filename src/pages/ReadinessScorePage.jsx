import { useState } from 'react'
import Card from '../components/ui/Card'
import SimpleBarChart from '../components/charts/SimpleBarChart'
import ReadinessRadar from '../components/charts/ReadinessRadar'
import { readinessByDistrict } from '../data/mockData'

export default function ReadinessScorePage() {
  const [selected, setSelected] = useState(readinessByDistrict[0].district)
  const item = readinessByDistrict.find((d) => d.district === selected)

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Card title="Readiness by District/Corridor" subtitle="Urban Mobility Readiness Score">
        <SimpleBarChart data={readinessByDistrict} />
      </Card>
      <Card title="Score Breakdown" subtitle="Congestion resilience, emergency access, redundancy, recovery, criticality">
        <select className="mb-3 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs" value={selected} onChange={(e)=>setSelected(e.target.value)}>
          {readinessByDistrict.map((d) => <option key={d.district} value={d.district}>{d.district}</option>)}
        </select>
        <ReadinessRadar item={item} />
      </Card>
    </div>
  )
}
