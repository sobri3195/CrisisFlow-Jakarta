import Card from './Card'
import Badge from './Badge'

export default function KpiCard({ item }) {
  return (
    <Card className="transition hover:-translate-y-0.5">
      <p className="text-xs text-slate-400">{item.label}</p>
      <p className="mt-2 text-3xl font-semibold">{item.value}<span className="ml-1 text-base text-slate-400">{item.unit}</span></p>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs text-slate-400">{item.delta}</p>
        <Badge status={item.tone} />
      </div>
    </Card>
  )
}
