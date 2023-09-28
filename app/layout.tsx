import Navbar from '@/components/Navbar'
import '@/scss/style.scss'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link href='https://fonts.googleapis.com/css?family=Revalia' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Noto Sans' rel='stylesheet'></link>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
