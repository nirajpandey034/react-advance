'use client';
import './globals.css';
import './i18n.js'; // Import the i18n setup
import { Providers } from './store/ReduxContextProviders.js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
