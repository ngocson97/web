
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import callApi from '../../untils/apiCaller';
import { API_GET_DEAL_DETAIL_REP } from '../../constanst/config';
import Head from 'next/head';
import axios from 'axios'
function Deal({ data }) {
    return (
        <div>
            <Head>
                <title>{data.name}</title>
                <meta property="og:description" content={data.description} />
            </Head>
            Deal detail page
        </div>
    )
}
Deal.getInitialProps = async (ctx) => {
    console.log(ctx)
    const data = await axios.get(`https://elastichire.com/${API_GET_DEAL_DETAIL_REP}${ctx.query.detail}`, {
        headers: {
            'Content-Type': "application/json",
            'client_id': 'client_id_id_client',
            'client_secret': 'client_secret_secret_client'
        }
    }).then(res => {
        return res.data.data
    })
    return {
        data: data
    }
}

export default Deal