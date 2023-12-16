// UI
import { dm_sans } from './ui/fonts';

// Styles
import '@ui/global.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dm_sans?.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
