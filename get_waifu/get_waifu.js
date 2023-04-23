import axios from "axios";
import fs from 'fs'
async function getWaifu(){
    try {
        const response =await axios.get('https://api.waifu.im/search/?included_tags=waifu');
        const data =response.data;
        const image_url = data.images[0].url;
        const image_name = data.images[0].image_id + ".jpg";
        const folder_name = 'waifu_images';
        const image_response = await axios.get(image_url, {responseType: 'stream'});
        if (!fs.existsSync(folder_name)) {
            fs.mkdirSync(folder_name);
        }
        const image_path = `./${folder_name}/${image_name}`;
        const image_writer = fs.createWriteStream(image_path);
        image_response.data.pipe(image_writer);
        console.log(`图片${image_name}已保存到本地`);
    } catch (error) {
        console.error(error);

    }
}
for(let i = 0;i<10;i++){
    getWaifu()
}