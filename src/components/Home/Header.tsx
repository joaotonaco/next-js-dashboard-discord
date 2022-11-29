import SyncStationGray from '../../../public/syncstation-gray.png';
import LogoBorder from './LogoBorder';
import Image from 'next/image';

function HomeHeader() {
  return (
    <header className="flex flex-col-reverse items-center justify-center gap-x-20 gap-y-3 md:flex-row">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-5xl md:text-6xl text-transparent bg-syncstation bg-double bg-clip-text animate-[bg-pan_3s_linear_infinite]">
          Sync Station
        </h1>
        <p className="text-sm text-center md:text-base text-bold text-neutral-300">
          A modern multi-purpose Discord bot
        </p>
      </div>

      <div className="relative flex justify-center">
        <LogoBorder className=" blur-lg" />
        <LogoBorder className=" blur-md" />
        <LogoBorder className=" blur-sm" />
        <LogoBorder />
        <Image
          src={SyncStationGray}
          alt="Sync Station Logo Gray"
          className="min-w-[5rem] w-[15vw] md:w-32 pointer-events-none"
        />
      </div>
    </header>
  );
}

export default HomeHeader;
