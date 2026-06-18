import { useEffect } from 'react'

function LifecycleDemo() {
  useEffect(() => {
    console.log('LifecycleDemo mounted')
    return () => {
      console.log('LifecycleDemo unmounted')
    }
  }, [])

  useEffect(() => {
    console.log('LifecycleDemo updated')
  })

  return (
    <div className="lifecycle-card">
      <h3>Lifecycle Demo</h3>
      <p>Open the browser console to see mount, update, and unmount messages.</p>
    </div>
  )
}

export default LifecycleDemo
