import { useMemo, useState } from 'react'
import { scenarios } from '../data/mockData'

export default function useScenario() {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id)
  const activeScenario = useMemo(() => scenarios.find((s) => s.id === scenarioId) || scenarios[0], [scenarioId])
  return { scenarios, scenarioId, setScenarioId, activeScenario }
}
