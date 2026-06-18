import { useEffect } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    console.log('LifecycleDemo mounted');
    return () => {
      console.log('LifecycleDemo unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('LifecycleDemo updated');
  });

  return (
    <div className="lifecycle-card">
      <h3>Lifecycle Demo</h3>
      <p>Open the console to see lifecycle messages: mount, update, unmount.</p>
    </div>
  );
}

export default LifecycleDemo;
