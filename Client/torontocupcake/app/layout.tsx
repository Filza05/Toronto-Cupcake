import Footer from "@/components/Shared/Footer"
import Navbar from "@/components/Shared/Navbar"
import '../app/globals.css'
import DateSection from "@/components/Shared/DateSection"

export const metadata = {
  title: 'Toronto Cupcake',
  description: 'Toronto Cupcakes improved Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFD0D0]">
          <Navbar />
          <DateSection />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
