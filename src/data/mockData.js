export const scenarios = [
  { id: 'normal_peak', name: 'Normal Peak Hour', status: 'elevated', trafficRisk: 61, readiness: 74, affected: ['Sudirman', 'Thamrin'], impact: 'Dense inbound commute with moderate signal pressure.' },
  { id: 'heavy_rain', name: 'Heavy Rain', status: 'critical', trafficRisk: 83, readiness: 58, affected: ['Cawang', 'Kampung Rambutan', 'Grogol'], impact: 'Drainage-sensitive corridors show rapid speed drops and queue spillback.' },
  { id: 'gbk_event', name: 'Major Event (GBK)', status: 'elevated', trafficRisk: 76, readiness: 64, affected: ['Blok M', 'Sudirman', 'Dukuh Atas'], impact: 'Event dispersal pressure increases bus and MRT transfer loading.' },
  { id: 'bus_disruption', name: 'Bus Corridor Disruption', status: 'disrupted', trafficRisk: 72, readiness: 60, affected: ['Harmoni', 'Kota'], impact: 'TransJakarta lane interruption causes high passenger spillover.' },
  { id: 'intersection_failure', name: 'Intersection Failure', status: 'critical', trafficRisk: 79, readiness: 55, affected: ['Thamrin', 'Harmoni'], impact: 'Signal blackout requires manual cycle response and dynamic diversions.' },
  { id: 'emergency_activation', name: 'Emergency Response Activation', status: 'recovering', trafficRisk: 68, readiness: 70, affected: ['Lebak Bulus', 'Cawang'], impact: 'Priority green waves established for emergency corridor continuity.' }
]

export const kpis = [
  { label: 'City Traffic Risk', value: 76, unit: '%', delta: '+8%', tone: 'critical' },
  { label: 'Readiness Score', value: 64, unit: '/100', delta: '-3', tone: 'elevated' },
  { label: 'Active Incidents', value: 14, unit: '', delta: '+2', tone: 'critical' },
  { label: 'Emergency Corridors Open', value: 9, unit: '/11', delta: 'Stable', tone: 'normal' }
]

export const incidents = [
  { id: 'INC-4312', title: 'Illegal parking spillback near Harmoni', location: 'Harmoni', severity: 'elevated', type: 'Parking', eta: '18 min', details: 'Two lanes partially blocked, bus lane occupancy 64%.' },
  { id: 'INC-4318', title: 'Flood-prone bottleneck at Cawang underpass', location: 'Cawang', severity: 'critical', type: 'Weather', eta: '42 min', details: 'Waterlogging reduces capacity and causes weaving conflicts.' },
  { id: 'INC-4324', title: 'MRT feeder queue surge at Dukuh Atas', location: 'Dukuh Atas', severity: 'elevated', type: 'Transit', eta: '25 min', details: 'Pedestrian crossing saturation and feeder bus delay observed.' }
]

export const recommendations = [
  { id: 1, engine: 'CrisisFlow Orchestrator', action: 'Activate adaptive cycle offset for Sudirman–Thamrin corridor by +12 sec.', why: 'Reduces projected queue spillback by 18% in next 30 minutes.' },
  { id: 2, engine: 'Shadow Dispatcher', action: 'Deploy shuttle bridge Harmoni → Kota and raise LRT frequency by 1 train set.', why: 'Absorbs 1,200 displaced passengers from bus corridor disruption.' },
  { id: 3, engine: 'Ghost Congestion Detector', action: 'Flag illegal parking hotspot for tow enforcement in Grogol segment B.', why: 'Persistent curbside occupation predicts micro-bottleneck escalation.' }
]

export const anomalySignals = [
  { corridor: 'Sudirman', category: 'Stop-start shockwaves', spillback: 0.78, risk: 'critical' },
  { corridor: 'Grogol', category: 'Lane weaving anomaly', spillback: 0.62, risk: 'elevated' },
  { corridor: 'Blok M', category: 'Illegal curbside parking', spillback: 0.55, risk: 'elevated' },
  { corridor: 'Kota', category: 'Unusual dwell-time', spillback: 0.41, risk: 'recovering' }
]

export const bottleneckSeries = [
  { time: '06:00', value: 22 }, { time: '07:00', value: 37 }, { time: '08:00', value: 58 },
  { time: '09:00', value: 64 }, { time: '10:00', value: 49 }, { time: '11:00', value: 42 }
]

export const readinessByDistrict = [
  { district: 'Sudirman', readiness: 68, congestionResilience: 70, emergencyAccess: 77, redundancy: 61, recovery: 69, criticality: 84 },
  { district: 'Thamrin', readiness: 63, congestionResilience: 59, emergencyAccess: 71, redundancy: 58, recovery: 66, criticality: 79 },
  { district: 'Grogol', readiness: 57, congestionResilience: 53, emergencyAccess: 62, redundancy: 56, recovery: 58, criticality: 73 },
  { district: 'Blok M', readiness: 71, congestionResilience: 69, emergencyAccess: 75, redundancy: 73, recovery: 70, criticality: 68 },
  { district: 'Harmoni', readiness: 60, congestionResilience: 56, emergencyAccess: 65, redundancy: 59, recovery: 61, criticality: 81 }
]

export const transitStatus = [
  { mode: 'TransJakarta', status: 'disrupted', impact: 'Corridor 1 partial detour', spillover: 'High' },
  { mode: 'MRT', status: 'normal', impact: 'Headway normal', spillover: 'Low' },
  { mode: 'LRT', status: 'recovering', impact: 'Minor station delay at Dukuh Atas', spillover: 'Medium' }
]

export const mapLayers = {
  hotspots: [
    { name: 'Sudirman Node', lat: -6.2146, lng: 106.8227, status: 'critical' },
    { name: 'Harmoni Merge', lat: -6.1664, lng: 106.8201, status: 'elevated' },
    { name: 'Cawang Underpass', lat: -6.2421, lng: 106.865, status: 'critical' }
  ],
  corridors: [
    { name: 'Emergency Corridor Alpha', points: [[-6.2146,106.8227],[-6.1754,106.8272],[-6.1664,106.8201]], status: 'normal' },
    { name: 'Diversion Beta', points: [[-6.2421,106.865],[-6.226,106.84],[-6.208,106.82]], status: 'elevated' }
  ],
  intersections: [
    { name: 'Thamrin-Sudirman', lat: -6.196, lng: 106.823, priority: 1 },
    { name: 'Grogol Gate', lat: -6.159, lng: 106.79, priority: 2 },
    { name: 'Kampung Rambutan Exchange', lat: -6.311, lng: 106.882, priority: 3 }
  ]
}

export const orchestratorActions = [
  { intersection: 'Thamrin-Sudirman', adjustment: 'Green +14 sec northbound', impact: 'Queue reduction 21%' },
  { intersection: 'Harmoni Circle', adjustment: 'Transit phase priority', impact: 'Bus delay -11 min' },
  { intersection: 'Cawang Interchange', adjustment: 'Incident bypass pattern', impact: 'Spillback risk -16%' }
]

export const reportLog = [
  { time: '06:45', type: 'Critical Incident', note: 'Flood alert at Cawang underpass elevated to Level 2.' },
  { time: '07:10', type: 'AI Recommendation', note: 'Initiate dynamic diversion from Thamrin to Kebon Sirih.' },
  { time: '08:00', type: 'Readiness Snapshot', note: 'City readiness dropped from 67 to 64 due to transit disruption.' }
]
