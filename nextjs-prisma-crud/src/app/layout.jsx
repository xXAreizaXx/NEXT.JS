// Styles
import './globals.css'

// Metadata
export const metadata = {
  title: 'NextJS CRUD Prisma',
  description: 'NextJS CRUD Prisma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
