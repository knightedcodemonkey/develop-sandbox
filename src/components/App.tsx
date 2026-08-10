const App = () => {
  const counterEl = <div style="font-size: 5rem; font-weight: bold;">100</div> as HTMLDivElement;
  const workerCode = `
    let startTime = performance.now();
    let ticks = 0;
    function tick() {
      ticks++;
      self.postMessage(100 - ticks);
      if (ticks < 100) {
        setTimeout(tick, 1000 - ((performance.now() - startTime) - (ticks * 1000)));
      }
    }
    tick();
  `;
  const worker = new Worker(URL.createObjectURL(new Blob([workerCode], { type: 'application/javascript' })));

  worker.onmessage = (e) => {
    counterEl.textContent = String(e.data);
    if (e.data <= 0) worker.terminate();
  };
  
  return <div style="display:flex; justify-content:center; background:#12141c; color:#fff; height:100vh; align-items:center;">{counterEl}</div>;
};
