import https from 'https';
import fs from 'fs';

const fileUrl = 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000';
const filename = 'image.jpg';

https.get(fileUrl, res => {
    const writeStream = fs.createWriteStream(filename);
    res.pipe(writeStream);
    writeStream.on('finish', () => {
        console.log('Download complete.');
        writeStream.close();
    });
});