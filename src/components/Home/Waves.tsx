function HomeWaves() {
  return (
    <>
      <div className="bg-neutral-900 top-0 left-0 h-2/5 w-screen absolute -z-10" />

      <div className="animate-[wave_10s_ease_infinite] absolute top-2/5 left-0 w-[200%] overflow-hidden leading-[0] -z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[133px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-neutral-900"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default HomeWaves;
