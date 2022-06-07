import axios from 'axios';
import cheerio from 'cheerio';


export class Scraper{
  async scrape(url: string){
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    console.log($)

    const name = $('h1').text().trim();
    console.log(name)
  }
}

async function main(){
  var link = "https://www.google.com/";

  const scraper = new Scraper();
  await scraper.scrape(link);
}


main();
