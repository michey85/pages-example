import { Country } from '@/types/Country';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export default async function getCountry(name: string) {
  const res = await fetch(BASE_URL+name);
  const data = await res.json();

  return data[0] as Country;
}