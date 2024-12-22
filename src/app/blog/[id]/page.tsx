import Link from "next/link";
//navigate between pages
//render link component
type Repository = {
  id: number;
  name: string;
  full_name: string;
};

export default async function Page() {
    try {
      //mock API endpoint
        const res = await fetch('https://api.github.com/repos/vercel/next.js');
    //error handling
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
    
        const data: Repository = await res.json();
    //displays data on the page
        return <h1>{data.full_name}</h1>;
      } catch (error) {
        console.error(error);
        return <h1>Error loading repository data</h1>;
      }
    } 
