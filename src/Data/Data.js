class Data {
    constructor() {
        let xmlText = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
            "    <gesmes:Envelope xmlns:gesmes=\"http://www.gesmes.org/xml/2002-08-01\" xmlns=\"http://www.ecb.int/vocabulary/2002-08-01/eurofxref\">" +
            "    <gesmes:subject>Reference rates</gesmes:subject>" +
            "        <gesmes:Sender>" +
            "            <gesmes:name>European Central Bank</gesmes:name>" +
            "        </gesmes:Sender>" +
            "        <Cube>" +
            "        <Cube time='2018-04-17'>" +
            "            <Cube currency='USD' rate='1.2357'/>" +
            "            <Cube currency='JPY' rate='132.35'/>" +
            "            <Cube currency='BGN' rate='1.9558'/>" +
            "            <Cube currency='CZK' rate='25.254'/>" +
            "            <Cube currency='DKK' rate='7.4474'/>" +
            "            <Cube currency='GBP' rate='0.86280'/>" +
            "            <Cube currency='HUF' rate='310.84'/>" +
            "            <Cube currency='PLN' rate='4.1602'/>" +
            "            <Cube currency='RON' rate='4.6468'/>" +
            "            <Cube currency='SEK' rate='10.3913'/>" +
            "            <Cube currency='CHF' rate='1.1908'/>" +
            "            <Cube currency='ISK' rate='122.60'/>" +
            "            <Cube currency='NOK' rate='9.5980'/>" +
            "            <Cube currency='HRK' rate='7.4135'/>" +
            "            <Cube currency='RUB' rate='76.3214'/>" +
            "            <Cube currency='TRY' rate='5.0734'/>" +
            "            <Cube currency='AUD' rate='1.5910'/>" +
            "            <Cube currency='BRL' rate='4.2158'/>" +
            "            <Cube currency='CAD' rate='1.5511'/>" +
            "            <Cube currency='CNY' rate='7.7639'/>" +
            "            <Cube currency='HKD' rate='9.7001'/>" +
            "            <Cube currency='IDR' rate='17021.77'/>" +
            "            <Cube currency='ILS' rate='4.3548'/>" +
            "            <Cube currency='INR' rate='81.1080'/>" +
            "            <Cube currency='KRW' rate='1320.61'/>" +
            "            <Cube currency='MXN' rate='22.2075'/>" +
            "            <Cube currency='MYR' rate='4.8058'/>" +
            "            <Cube currency='NZD' rate='1.6837'/>" +
            "            <Cube currency='PHP' rate='64.594'/>" +
            "            <Cube currency='SGD' rate='1.6192'/>" +
            "            <Cube currency='THB' rate='38.566'/>" +
            "            <Cube currency='ZAR' rate='14.8492'/>" +
            "            </Cube>" +
            "    </Cube>" +
            "    </gesmes:Envelope>";

        let XMLParser = require('react-xml-parser');
        let parser = new XMLParser();
        let jsondata = parser.parseFromString(xmlText);
        let jsonvalue = jsondata.getElementsByTagName('Cube');

        this.json = jsonvalue;
    }
}

const datajson = new Data();

export default datajson;