import { useMemo, useState } from 'react'
import Card from '../components/ui/Card'
import { reportLog } from '../data/mockData'

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}

export default function ReportsPage() {
  const [typeFilter, setTypeFilter] = useState('All')
  const types = ['All', ...new Set(reportLog.map((item) => item.type))]

  const filteredReports = useMemo(() => {
    if (typeFilter === 'All') return reportLog
    return reportLog.filter((item) => item.type === typeFilter)
  }, [typeFilter])

  const exportCsv = () => {
    const header = 'time,type,note'
    const rows = filteredReports.map((r) => `"${r.time}","${r.type}","${r.note.replaceAll('"', '""')}"`)
    downloadFile([header, ...rows].join('\n'), 'crisisflow-reports.csv', 'text/csv;charset=utf-8')
  }

  const exportPdfMock = () => {
    const content = [
      'CrisisFlow Jakarta - Daily Operational Summary',
      `Generated: ${new Date().toISOString()}`,
      `Filter: ${typeFilter}`,
      '',
      ...filteredReports.map((r) => `[${r.time}] ${r.type}: ${r.note}`)
    ].join('\n')

    downloadFile(content, 'crisisflow-summary.txt', 'text/plain;charset=utf-8')
  }

  return (
    <div className="space-y-4">
      <Card title="Daily Operational Summary" subtitle="AI command center reporting">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <label className="text-xs text-slate-400">Filter type:</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs"
          >
            {types.map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          {filteredReports.map((r, idx) => (
            <div key={`${r.time}-${idx}`} className="rounded-xl border border-slate-700/60 p-3">
              <p className="text-xs text-cyan-300">{r.time} • {r.type}</p>
              <p className="text-sm">{r.note}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Export" subtitle="Operational export controls">
        <div className="flex flex-wrap gap-2">
          <button onClick={exportPdfMock} className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800">Export Summary TXT</button>
          <button onClick={exportCsv} className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800">Export CSV</button>
        </div>
      </Card>
    </div>
  )
}
