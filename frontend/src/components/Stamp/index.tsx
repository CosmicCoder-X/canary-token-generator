// ===================
// ©AngelaMos | 2026
// index.tsx
// ===================

import styles from './Stamp.module.scss'

type StampProps = {
  label: string
  sublabel?: string
  tone?: 'alarm' | 'ink'
  rotate?: number
}

/**
 * A rubber-stamp ring, meant to sit in the corner slot a SpecimenCard
 * exposes via its `stamp` prop. Renders nothing about *placement* --
 * SpecimenCard owns that -- only the ink-ring visual itself, so it can be
 * reused anywhere a "this specimen is live" moment needs marking.
 */
export function Stamp({
  label,
  sublabel,
  tone = 'alarm',
  rotate = -9,
}: StampProps): React.ReactElement {
  return (
    <div
      className={styles.stamp}
      data-tone={tone}
      style={{ '--stamp-rotate': `${rotate}deg` } as React.CSSProperties}
    >
      <span className={styles.label}>{label}</span>
      {sublabel ? <span className={styles.sublabel}>{sublabel}</span> : null}
    </div>
  )
}
