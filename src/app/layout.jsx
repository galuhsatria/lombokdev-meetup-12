import React from 'react';
import './globals.css';
export const metadata = {
  title: 'Lombok Dev | Home',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
