import { VscLoading } from 'react-icons/vsc';
import { GoGear } from 'react-icons/go';

function LoadingGuilds() {
  return (
    <>
      <div className="flex flex-col mx-auto items-start w-full gap-10">
        <div className="px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center gap-2 shadow-md w-full bg-neutral-750 justify-center sm:justify-start font-semibold leading-8 text-[clamp(1.2rem,2vw+0.5rem,1.5rem)]">
          <GoGear size={30} />
          <h1>Configuring</h1>
          <VscLoading className="animate-[spin_0.5s_linear_infinite] w-8 h-8" />
        </div>
      </div>
      <div className="h-fit max-w-md w-3/4 mx-auto flex flex-col items-center justify-center mt-10 gap-6">
        <PulsingItem />
        <PulsingItem large />
        <PulsingItem />
        <PulsingItem large />
        <PulsingItem />
      </div>
    </>
  );
}

function PulsingItem({ large }: { large?: boolean }) {
  return (
    <div
      className={
        'w-full animate-[pulse_0.7s_ease_infinite] ' +
        (large
          ? 'h-14 bg-neutral-800 rounded-xl'
          : 'h-5 bg-neutral-750 rounded-3xl')
      }
    />
  );
}

export default LoadingGuilds;
