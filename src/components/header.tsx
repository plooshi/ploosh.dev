import Head from "next/head"

export default function Header() {
    return (
        <Head>
            <title>Ploosh's Website</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link href="https://ploosh.dev" rel="canonical" />
            <meta content="Ploosh" property="og:title" />
            <meta content="Ploosh's Portfolio" property="og:description" />
            <meta content="en_US" property="og:locale" />
            <meta content="https://ploosh.dev/ploosh.png" property="og:image" />
            <meta content="Ploosh's Portfolio" name="Description" />
        </Head>
    )
}