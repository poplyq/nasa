import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, ms: number): T {
  const [newValue, setNewValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setNewValue(value), ms)
    return () => {
      clearTimeout(timer)
    }
  }, [value, ms])

  return newValue
}
