import { VscLoading } from 'react-icons/vsc';
import { GoGear } from 'react-icons/go';

function LoadingGuilds() {
  return (
    <>
      <div className="flex flex-col mx-auto items-start w-full gap-10">
        <div className="px-10 py-5 flex items-center gap-2 shadow-md w-full bg-neutral-750">
          <GoGear size={30} />
          <h1 className="font-semibold text-2xl flex gap-2 items-center">
            Configuring <VscLoading className="animate-spin" size={30} />
          </h1>
        </div>
      </div>
      <div className="h-fit max-w-md mx-auto flex flex-col items-center justify-center mt-10 gap-6">
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
        (large ? 'h-14 bg-neutral-800 rounded-xl' : 'h-5 bg-neutral-750 rounded-3xl')
      }
    />
  );
}

export default LoadingGuilds;
