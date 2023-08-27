// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createServer, Response } from "miragejs" //Response will be used for error mode

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json", () => {
        return {
            "publishingOffice": "気象庁",
            "reportDatetime": "2023-08-26T16:36:00+09:00",
            "targetArea": "東京都",
            "headlineText": "",
            "text": "[mock]関東甲信地方は、高気圧に覆われています。\n\n　東京地方は、曇りや晴れで、雨や雷雨となっている所があります。\n\n　２６日は、高気圧に覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇り時々晴れで、雨や雷雨となり、夜のはじめ頃にかけて激しく降る所があるでしょう。伊豆諸島でも、雷を伴って激しい雨の降る所がある見込みです。\n\n　２７日は、引き続き高気圧に覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りで朝は晴れますが、雨や雷雨となり、昼前から昼過ぎにかけて激しく降る所があるでしょう。伊豆諸島でも、雷を伴って激しい雨の降る所がある見込みです。\n\n【関東甲信地方】\n　関東甲信地方は、曇りや晴れで雷を伴った激しい雨の降っている所があります。\n\n　２６日は、高気圧に覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りや晴れで、雨や雷雨となり非常に激しく降る所があるでしょう。\n\n　２７日は、引き続き高気圧に覆われますが、湿った空気や上空の寒気の影響を受ける見込みです。このため、曇りや晴れで、雨や雷雨となり激しく降る所があるでしょう。\n\n　関東地方と伊豆諸島の海上では、２６日は波がやや高く、２７日はうねりを伴い波がやや高い見込みです。"
        }
      })
      //ToDo:create error mode
      //this.get("https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json", () => {
      //  return new Response(400, { some: 'header' }, { errors: [ 'name cannot be blank'] });
      //})
    },
  })

  return server
}