import Dashboard from '@/components/ContextComponents/Dashboard';
import React from 'react';
import { ThemeProvider } from '@/components/ContextComponents';

export default function page() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
