import React from 'react';

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div>냥</div>
      </React.Suspense>
    </>
  );
}

export default App;
