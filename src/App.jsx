import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import OverviewPage from './pages/OverviewPage'
import CongestionDetectorPage from './pages/CongestionDetectorPage'
import OrchestratorPage from './pages/OrchestratorPage'
import ShadowDispatcherPage from './pages/ShadowDispatcherPage'
import ReadinessScorePage from './pages/ReadinessScorePage'
import ScenarioSimulatorPage from './pages/ScenarioSimulatorPage'
import ReportsPage from './pages/ReportsPage'
import useScenario from './hooks/useScenario'

export default function App() {
  const { scenarios, scenarioId, setScenarioId, activeScenario } = useScenario()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const exportSummary = () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      scenario: activeScenario.name,
      status: activeScenario.status,
      trafficRisk: activeScenario.trafficRisk,
      readiness: activeScenario.readiness,
      affectedCorridors: activeScenario.affected,
      impact: activeScenario.impact
    }

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `crisisflow-${activeScenario.id}-summary.json`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 md:flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-3 sm:p-4 md:p-6">
        <Topbar
          scenarios={scenarios}
          scenarioId={scenarioId}
          setScenarioId={setScenarioId}
          activeScenario={activeScenario}
          onOpenSidebar={() => setSidebarOpen(true)}
          onExportReport={exportSummary}
        />
        <Routes>
          <Route path="/" element={<OverviewPage activeScenario={activeScenario} />} />
          <Route path="/congestion-detector" element={<CongestionDetectorPage />} />
          <Route path="/orchestrator" element={<OrchestratorPage />} />
          <Route path="/shadow-dispatcher" element={<ShadowDispatcherPage />} />
          <Route path="/readiness-score" element={<ReadinessScorePage />} />
          <Route path="/scenario-simulator" element={<ScenarioSimulatorPage activeScenario={activeScenario} scenarios={scenarios} setScenarioId={setScenarioId} />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
