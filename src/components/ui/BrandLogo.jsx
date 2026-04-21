export default function BrandLogo({ compact = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/favicon.svg" alt="CrisisFlow Logo" className="h-9 w-9 rounded-lg border border-cyan-400/40 bg-slate-900 p-1" />
      {!compact && <img src="/logo.svg" alt="CrisisFlow Jakarta" className="h-9 w-auto" />}
    </div>
  )
}
