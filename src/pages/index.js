
import styled from 'styled-components';
import { Row } from 'antd'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from './../constanst/Apptheme';

export const Body = styled(Row)`
    margin: 0 auto !important;
    color: red;
    align-self: auto;
    font-size:100px;
    max-width : ${props => props.theme.background_size.width_content};
`
function HomePage() {
    return (
        <ThemeProvider theme={theme}>


            <Head>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Body>
                Welcome
        </Body>
        </ThemeProvider>
    )
}
export default HomePage