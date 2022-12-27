import React from 'react';

function GuildLoading() {
  return (
    <div className="h-fit max-w-md w-3/4 mx-auto flex flex-col items-center justify-center mt-10 gap-6">
      <PulsingItem />
      <PulsingItem large />
      <PulsingItem />
      <PulsingItem large />
      <PulsingItem />
    </div>
  );
}

export default GuildLoading;

function PulsingItem({ large }: { large?: boolean }) {
  return (
    <div
      className={
        'w-full animate-[pulse_0.7s_ease_infinite] ' +
        (large
          ? 'h-14 bg-neutral-800 rounded-xl'
          : 'h-5 bg-neutral-750 rounded-xl')
      }
    />
  );
}
