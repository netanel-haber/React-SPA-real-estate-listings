const fs = require('fs').promises;
(async () => {
    let finalString = "";
    const file = (await fs.readFile('./streets.txt')).toString();
    let rows = file
        .split('\n')
        .map(street => street
            .split('  ')
            .filter(elem => Boolean(elem))
            .map(elem => elem.trim()));
    Object.entries(rows.reduce((acc, [city, street]) =>
        ({
            ...acc,
            [city]: acc[city] ? [...acc[city], street] : [street]
        }), {})).forEach(([city, streets]) => { finalString += JSON.stringify({ city, streets })+"\n"})
    await fs.writeFile('./streets.json', finalString);
})()
