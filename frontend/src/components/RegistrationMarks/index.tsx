// ===================
// ©AngelaMos | 2026
// index.tsx
// ===================

import styles from './RegistrationMarks.module.scss'

/**
 * Print-production registration marks pinned to the four corners of the
 * viewport. Purely decorative -- reinforces the "specimen sheet run through
 * a press" identity that the rest of the UI (hairlines, paper grain,
 * halftone dots) already commits to. Fixed to the viewport rather than the
 * page so it reads as a frame around the whole sheet, not a page element.
 */
export function RegistrationMarks(): React.ReactElement {
  return (
    <div className={styles.marks} aria-hidden="true">
      <span className={`${styles.mark} ${styles.tl}`} />
      <span className={`${styles.mark} ${styles.tr}`} />
      <span className={`${styles.mark} ${styles.bl}`} />
      <span className={`${styles.mark} ${styles.br}`} />
    </div>
  )
}
