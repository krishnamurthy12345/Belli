const https = require('https');

const url = 'https://docs.google.com/forms/d/e/1FAIpQLSeA8HY89HR02TQvBAW9jOsWp7_37u3-6blKQkgzb1pvV6KrCw/viewform';

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => parseData(data));
});

function parseData(data) {
    const regex = /var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);\n/s;
    const match = data.match(regex);
    if (match) {
        try {
            const formData = JSON.parse(match[1]);
            const fields = formData[1][1];
            fields.forEach(field => {
                const title = field[1];
                const entryId = field[4][0][0];
                console.log(`Title: ${title} -> entry.${entryId}`);
            });
        } catch (e) {
            console.log("Parse error:", e);
        }
    } else {
        console.log("Not found");
    }
}
