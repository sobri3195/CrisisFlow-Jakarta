import { NavLink } from 'react-router-dom'
import { Activity, AlertTriangle, Gauge, GitBranch, Map, Radar, FileText, X } from 'lucide-react'
import BrandLogo from '../ui/BrandLogo'

const items = [
  ['/', 'Overview', Map],
  ['/congestion-detector', 'Congestion Detector', Activity],
  ['/orchestrator', 'Orchestrator', GitBranch],
  ['/shadow-dispatcher', 'Shadow Dispatcher', AlertTriangle],
  ['/readiness-score', 'Readiness Score', Gauge],
  ['/scenario-simulator', 'Scenario Simulator', Radar],
  ['/reports', 'Reports', FileText]
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`glass fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-800/80 p-4 transition-transform duration-200 md:sticky md:top-0 md:h-screen md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-6 flex items-start justify-between">
          <div>
            <BrandLogo />
            <p className="mt-2 text-xs text-cyan-300">Predict, Orchestrate, Recover</p>
          </div>
          <button onClick={onClose} className="rounded-lg border border-slate-700 p-2 text-slate-300 md:hidden" aria-label="Close menu">
            <X size={16} />
          </button>
        </div>
        <nav className="space-y-1">
          {items.map(([to, label, Icon]) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
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
      {isOpen && <button onClick={onClose} aria-label="Close sidebar overlay" className="fixed inset-0 z-30 bg-black/60 md:hidden" />}
    </>
  )
}
