import { statusClass } from '../../utils/format'

export default function Badge({ status, children }) {
  return <span className={statusClass(status)}>{children || status}</span>
}
