export default function Card({ title, subtitle, right, children, className = '' }) {
  return (
    <section className={`glass rounded-2xl p-4 ${className}`}>
      {(title || right) && (
        <header className="mb-3 flex items-start justify-between gap-2">
          <div>
            {title && <h3 className="text-sm font-semibold tracking-wide text-slate-100">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
          </div>
          {right}
        </header>
      )}
      {children}
    </section>
  )
}
