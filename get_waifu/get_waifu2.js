import axios from "axios";
import fs from 'fs';
import path from 'path';
async function getWaifu() {
    try {
        const img_response = await axios.get('https://t.mwm.moe/pc?postId=1',{
            responseType: 'stream'
        });
        const image_path = `./waifu_images/${path.basename(img_response.request.path)}`;
        if (!fs.existsSync('./waifu_images')) {
            fs.mkdirSync('./waifu_images');
        }
        img_response.data.pipe(fs.createWriteStream(image_path));
        console.log("图片已保存到本地" + image_path);
    }
    catch(err){
        console.error(err);
    }
}

setInterval(getWaifu, 2000);
