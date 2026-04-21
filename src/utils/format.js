export const statusClass = (status) => `status-${status} border px-2 py-1 rounded-full text-xs font-medium`

export const nowStamp = () =>
  new Date().toLocaleString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  })
