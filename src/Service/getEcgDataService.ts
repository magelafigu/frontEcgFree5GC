import axios from 'axios'

export async function getEcgDataService() {
    
    let ecgData: any = []
    const response = await axios.get('http://localhost:3000/api/loadEcgData')

    // const ecgDataTemp = response.data.map((d: any) => {
    //     return new EcgData(d.ecgData, d.time)
    // })

    for (let i = 0; i < response.data.length; i++) {
        ecgData.push(response.data[i].y);
    }

    // console.log(ecgData)

    return ecgData;
}

// setInterval(() => {getEcgDataService()}, 1000)

// export function sendData() {
//     return ecgData;
// }

// class EcgData {
//     x: string;
//     y: number;
//     constructor(ecgData: number, time: string) {
//         this.y = ecgData
//         this.x = time
//     }
// }