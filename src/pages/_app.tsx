import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "@/styles/socials.css"
import "@/styles/about.css"
import "@/styles/projects.css"

const theme = createTheme({
    type: 'dark',
    theme: {
        colors: {
            background: "$gray100",
            accents7: "$gray700"
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
