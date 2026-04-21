# CrisisFlow Jakarta

**AI Urban Mobility Resilience Platform** prototype built with React + Vite.

## Features
- Dark-mode command center UI with map-centric dashboard
- Six core views: Overview, Congestion Detector, Orchestrator, Shadow Dispatcher, Readiness Score, Scenario Simulator
- Reports page with operational logs and export UI
- Jakarta-focused mock data for incidents, corridors, transit disruptions, and readiness analytics
- Scenario switcher that updates risk/readiness outcomes instantly

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Vercel deployment notes
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required

## Future real-world integration ideas
- ATCS signal telemetry and adaptive cycle APIs
- CCTV computer vision analytics for queue/spillback detection
- GTFS-realtime / ops feeds for TransJakarta, MRT, LRT
- Emergency response system integration for preemption corridors
