import { NavLink } from 'react-router-dom'
import { Activity, AlertTriangle, Gauge, GitBranch, Map, Radar, FileText } from 'lucide-react'

const items = [
  ['/', 'Overview', Map],
  ['/congestion-detector', 'Congestion Detector', Activity],
  ['/orchestrator', 'Orchestrator', GitBranch],
  ['/shadow-dispatcher', 'Shadow Dispatcher', AlertTriangle],
  ['/readiness-score', 'Readiness Score', Gauge],
  ['/scenario-simulator', 'Scenario Simulator', Radar],
  ['/reports', 'Reports', FileText]
]

export default function Sidebar() {
  return (
    <aside className="glass sticky top-0 h-screen w-72 rounded-none border-r border-slate-800/80 p-4">
      <h1 className="mb-1 text-xl font-bold">CrisisFlow Jakarta</h1>
      <p className="mb-6 text-xs text-cyan-300">Predict, Orchestrate, Recover</p>
      <nav className="space-y-1">
        {items.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                isActive ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300 hover:bg-slate-800/70'
              }`
            }
          >
            <Icon size={16} /> {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
