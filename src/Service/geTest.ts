let ecgData: any = []
export async function getTest() {

    const date = new Date()
    const showTime = date.getHours() 
    + ':' + date.getMinutes() 
    + ":" + date.getSeconds() + '.' + date.getMilliseconds();

    const dataTemp = new EcgDataTest(Math.random() * 20, showTime)

    ecgData.push(dataTemp)
    
    console.log(ecgData)

    return ecgData;
}

// setInterval(() => { getTest() }, 1000)

export class EcgDataTest {
    x: string;
    y: number;
    constructor(ecgData: number, time: string) {
        this.y = ecgData
        this.x = time
    }
}