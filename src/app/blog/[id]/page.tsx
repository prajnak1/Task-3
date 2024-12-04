import Link from "next/link";
//navigate between pages
//render link component
type Repository = {
  id: number;
  name: string;
  full_name: string;
};
//error handling
export default async function Page() {
    try {
        const res = await fetch('https://api.github.com/repos/vercel/next.js');
    
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
    
        const data: Repository = await res.json();
    
        return <h1>{data.full_name}</h1>;
      } catch (error) {
        console.error(error);
        return <h1>Error loading repository data</h1>;
      }
    } 