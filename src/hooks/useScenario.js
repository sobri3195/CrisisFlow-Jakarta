import { useMemo, useState } from 'react'
import { scenarios } from '../data/mockData'

const STORAGE_KEY = 'crisisflow_scenario_id'

export default function useScenario() {
  const [scenarioId, setScenarioId] = useState(() => localStorage.getItem(STORAGE_KEY) || scenarios[0].id)

  const updateScenario = (nextId) => {
    setScenarioId(nextId)
    localStorage.setItem(STORAGE_KEY, nextId)
  }

  const activeScenario = useMemo(() => scenarios.find((s) => s.id === scenarioId) || scenarios[0], [scenarioId])

  return { scenarios, scenarioId, setScenarioId: updateScenario, activeScenario }
}
