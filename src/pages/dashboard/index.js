import {useState} from './node_modules/react'
import Head from "./node_modules/next/head";
import callApi from "../../untils/apiCaller";
import {API_DEAL} from '../../constanst/config'
import { FormProvider } from "./node_modules/antd/lib/form/context";
export default function Dashboard() {
    const [title, setTitle] = useState('deal')
    callApi(`${API_DEAL}GDwRANgAZD`,'GET').then(res=>{
        console.log(res.data.data)
    }).catch(err=>{
        console.log(err)
    })
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
        </div>
    )
}