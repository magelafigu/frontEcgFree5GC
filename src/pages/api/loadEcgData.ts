import axios from "axios";
import fs from "fs"
import type { NextApiRequest, NextApiResponse } from "next";

const url =
  "http://127.0.0.1:5000/sendData";

type ResponseData = {
  ecgData: string;
  time: string;
};

// export default async function loadEcgData(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData[]>
// ) {
//   const { data } = await axios.get(url);
//   res.status(200).send(data);
// }

export default async function ecgDataToShow(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData[]>
) {
  const data = await fs.readFileSync('data/dataJson.json')

  const dataToPrepare = JSON.parse(data.toString())

  const result = prepareDataToSend(dataToPrepare)

  res.status(200).send(result)
}

let initial = 1
let final = 1250
function prepareDataToSend(data: any) {

  const result = []
  const resultTemp: any = []

  data.map((d: any) => resultTemp.push(d))

  for (let i = initial; i <= final; i++) {
    const dataTemp = resultTemp.find((d: { position: number; }) => {
      return d.position === i
    })
    result.push(dataTemp)
  }

  initial = initial + 50
  final = final + 50

  return result
}