import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { mapLayers } from '../../data/mockData'

const marker = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

const colors = { normal: '#34d399', elevated: '#f59e0b', critical: '#f43f5e', disrupted: '#ef4444', recovering: '#22d3ee' }

export default function JakartaMap() {
  return (
    <div className="h-[420px] overflow-hidden rounded-xl border border-slate-700/50">
      <MapContainer center={[-6.2088, 106.8456]} zoom={12} scrollWheelZoom className="h-full w-full">
        <TileLayer attribution='&copy; OpenStreetMap contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {mapLayers.hotspots.map((h) => (
          <CircleMarker key={h.name} center={[h.lat, h.lng]} radius={10} pathOptions={{ color: colors[h.status], fillOpacity: 0.4 }}>
            <Popup>{h.name} ({h.status})</Popup>
          </CircleMarker>
        ))}
        {mapLayers.corridors.map((c) => (
          <Polyline key={c.name} positions={c.points} pathOptions={{ color: colors[c.status], weight: 5, opacity: 0.8 }}>
            <Popup>{c.name}</Popup>
          </Polyline>
        ))}
        {mapLayers.intersections.map((n) => (
          <Marker key={n.name} position={[n.lat, n.lng]} icon={marker}>
            <Popup>Priority {n.priority}: {n.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
