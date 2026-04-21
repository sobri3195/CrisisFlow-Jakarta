import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Tooltip } from 'recharts'

export default function ReadinessRadar({ item }) {
  const data = [
    ['Resilience', item.congestionResilience],
    ['Emergency', item.emergencyAccess],
    ['Redundancy', item.redundancy],
    ['Recovery', item.recovery],
    ['Criticality', item.criticality]
  ].map(([metric, score]) => ({ metric, score }))

  return (
    <div className="h-64">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="metric" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis tick={{ fill: '#64748b', fontSize: 10 }} />
          <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155' }} />
          <Radar dataKey="score" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.35} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
