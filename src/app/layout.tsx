import { ReactNode } from "react"
import "~/styles/globals.css"

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head />
            <body>{children}</body>
        </html>
    )
}
