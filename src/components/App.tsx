export const App = () => {
  // 1. Create a native DOM node using JSX
  const counterEl = (
    <div style="font-size: 5rem; font-weight: bold;">100</div>
  ) as HTMLDivElement;

  // 2. Wrap it inside a centered container layout using standard HTML style strings
  const containerEl = (
    <div style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #12141c; color: #ffffff;">
      {counterEl}
    </div>
  ) as HTMLDivElement;

  // 3. Set up the high-precision background worker thread string
  const workerCode = `
    let startTime;
    const targetInterval = 1000;
    let ticks = 0;
    
    self.onmessage = function(e) {
      if (e.data === 'start') {
        startTime = performance.now();
        tick();
      }
    };

    function tick() {
      ticks++;
      self.postMessage('tick');

      if (ticks < 100) {
        const nextExpected = (ticks * targetInterval);
        const drift = (performance.now() - startTime) - nextExpected;
        setTimeout(tick, Math.max(0, targetInterval - drift));
      }
    }
  `;

  // 4. Safely instantiate worker and immediately free Object URL string memory
  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(blob);
  const worker = new Worker(workerUrl);
  URL.revokeObjectURL(workerUrl); 

  let currentCount = 100;

  // 5. Update the real DOM node text directly whenever the worker ticks
  worker.onmessage = () => {
    currentCount--;
    counterEl.textContent = String(currentCount);

    if (currentCount <= 0) {
      worker.terminate();
    }
  };

  // 6. Automatic thread cleanup if the element is removed from the DOM tree
  const observer = new MutationObserver(() => {
    if (!document.body.contains(containerEl)) {
      worker.terminate();
      observer.disconnect();
    }
  });
  
  // Wait for the next macro-task tick to start observing the parent tree attachment
  setTimeout(() => {
    if (containerEl.parentNode) {
      observer.observe(containerEl.parentNode, { childList: true });
    }
  }, 0);

  // 7. Start the timer execution
  worker.postMessage('start');

  // 8. Return the raw native DOM element structure directly to the workbench
  return containerEl;
};
