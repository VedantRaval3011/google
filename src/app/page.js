import Header from "@/components/home/Header";
import Search from "@/components/home/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className='flex flex-col items-center mt-24'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
        />
        <Search />
      </div>
    </div>
  );
}
