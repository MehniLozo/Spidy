import { parse } from 'ts-command-line-args';

interface ICopyArgs{
  link:string;
}


export const args = parse<ICopyArgs>({
  link:String
})
