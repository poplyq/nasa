import React from 'react'
interface PodBoundaryProps {
  error: Error
  resetErrorBoundary(): void
}
export const PodBoundary = ({ error, resetErrorBoundary }: PodBoundaryProps) => {
  return (
    <div>
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
        <button onClick={() => resetErrorBoundary()}>Try again</button>
      </div>
    </div>
  )
}
