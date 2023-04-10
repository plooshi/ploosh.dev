import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "@/styles/socials.css"
import "@/styles/about.css"
import "@/styles/projects.css"
import "@/styles/background.css"

const theme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: "$gray700",
            accents7: "$gray900",
            primary: "$white400"
        }
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider theme={theme}>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}