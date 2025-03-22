'use client';
import './globals.css';
import './i18n.js'; // Import the i18n setup

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
