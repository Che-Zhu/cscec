import './globals.css'
import { Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'China Construction Third Engineering Bureau Group Co., Ltd.',
  description: 
    `
    China Construction Third Engineering Bureau Group offers infrastructure construction services. 
    The Company constructs roads, bridges, tunnels, railways, and other infrastructure projects.
    China Construction Third Engineering Bureau Group also operates real estate development, investment, and other businesses.
    `,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
