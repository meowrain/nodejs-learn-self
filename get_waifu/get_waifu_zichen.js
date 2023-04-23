import axios from "axios";
import fs from "fs";
import path from "path";
async function getWaifu() {
  try {
    const response = await axios.get(
      "https://app.zichen.zone/api/acg.php?json=1"
    );
    const data = response.data;
    const image_url = data.imgurl;
    const image_response = await axios.get(image_url, {
      responseType: "stream",
    });
    const folder_name = "waifu_images";
    const image_path = `./${folder_name}/${path.basename(image_url)}`;
    if (!fs.existsSync(folder_name)) {
        fs.mkdirSync(folder_name);
    }
    image_response.data.pipe(fs.createWriteStream(image_path));
  } catch (err) {
    console.log(err);
  }
}
for(let i = 0;i<100;i++){
    getWaifu();
}
