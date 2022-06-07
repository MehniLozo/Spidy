import axios from 'axios';
import cheerio from 'cheerio';
import {args} from './ArgsCLI';

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
  const scraper = new Scraper();
  if(args.link.length>0)
    await scraper.scrape(args.link);
  else
    console.log("Provide a link buddy")

}


main();
