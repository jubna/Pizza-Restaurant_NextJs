import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        // console.log({initialProps})
        console.log(initialProps)
        initialProps.path = ctx.pathname
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,500;1,300;1,700&display=swap" rel="stylesheet" />
                        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" rel="stylesheet" />

                </Head>
                <body>

                    <div className="page">
                        <div className="wrapper">
                            <Main />
                        </div>
                    </div>
                    <NextScript />
                    {/* <Script src="https://kit.fontawesome.com/61cf1a298d.js" crossOrigin="anonymous"></Script> */}
                </body>
            </Html>
        )
    }
}

export default MyDocument