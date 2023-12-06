import { getTest } from "@/Service/geTest";
import { getEcgDataService } from "@/Service/getEcgDataService";
import Monitoramento from "@/components/Monitoramento";
import Pagina from "@/components/Template/Pagina";
import { JSX, useEffect, useState } from "react";
import { clearInterval } from "timers";

export default function PaginaMonitoramento() {

    const [data, setData] = useState([])
    const [x, setX] = useState([])
    const [y, sety] = useState([])

    useEffect(() => {
        const timer = setInterval(() => { 
            getEcgDataService().then(d => setData(d))
         }, 1000); return () => { clearInterval(timer) }
    }, [])

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         getEcgDataService()
    //             .then(data => setData(data))
    //             .catch(err => alert(err.response ? err.response.data : err.message))
    //     }, 1000); return () => { clearInterval(timer) }
    // }, [])

    // useEffect(() => {
    //     getEcgDataService()
    //         .then(async data => await setData(data))
    //         .catch(err => alert(err.response ? err.response.data : err.message))
    // }, [])

    return (
        <Pagina>
            <Monitoramento data={data}></Monitoramento>
        </Pagina>
    )
}
