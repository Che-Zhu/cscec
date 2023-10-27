import './globals.css'
import {Poppins} from 'next/font/google'

import Navbar from './components/navbar'
import Footer from './components/footer'

const poppins = Poppins({
  weight: ['400', '700',],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

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
      <body className={`${poppins.className} selection:bg-secondary-lighter max-w-screen-2xl`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
