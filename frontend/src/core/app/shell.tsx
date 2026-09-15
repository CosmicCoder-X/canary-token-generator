// ===================
// ©AngelaMos | 2026
// shell.tsx
// ===================

import { Suspense } from 'react'
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

function ShellErrorFallback({ error }: FallbackProps): React.ReactElement {
  // `error` is `unknown` here -- a thrown value is never guaranteed to be an
  // Error instance -- so it's normalized by hand rather than assuming
  // `.message` exists (and rather than depending on react-error-boundary's
  // own `getErrorMessage` helper, which isn't present in the version this
  // project's lockfile actually pins).
  const message = error instanceof Error ? error.message : String(error)
  return <pre>{message}</pre>
}

export function Shell(): React.ReactElement {
  return (
    <ErrorBoundary FallbackComponent={ShellErrorFallback}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}
