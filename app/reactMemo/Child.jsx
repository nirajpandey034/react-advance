'use client';
import React, { useEffect, useRef } from 'react';

function Child() {
  const times = useRef(0);

  useEffect(() => {
    times.current += 1;
  }, []);
  return <div>Child has been rendered {times.current} times.</div>;
}

export default React.memo(Child);
