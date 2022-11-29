import { FaDiscord, FaQuestionCircle } from 'react-icons/fa';
import HomeItems from '../components/Home';
import Link from 'next/link';

function Home() {
  return (
    <div className="w-screen h-full flex flex-1 flex-col justify-center text-center gap-y-[20vh] select-none box-border overflow-hidden relative">
      <HomeItems.Waves />

      <HomeItems.Header />

      <section className="flex flex-col items-center w-full text-sm font-bold gap-6">
        <Link href="/guilds" style={{ WebkitTapHighlightColor: 'transparent' }}>
          <HomeItems.Button
            name="Login with Discord"
            color="blurple"
            large={true}
            icon={<FaDiscord size={30} />}
          />
        </Link>

        <Link href="" style={{ WebkitTapHighlightColor: 'transparent' }}>
          <HomeItems.Button
            name="Support Server"
            color="plurple"
            icon={<FaQuestionCircle size={25} />}
          />
        </Link>
      </section>

      <footer>
        <div className="flex flex-1 justify-center gap-3 text-sm">
          <HomeItems.QuickLink text="Privacy" />
          <HomeItems.QuickLink text="Terms" />
          <HomeItems.QuickLink text="Contact" />
        </div>

        <p className="text-sm text-neutral-500 pt-1">
          © SyncLab - All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Home;
