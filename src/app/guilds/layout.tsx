'use client';

import { SideBarContextProvider } from '../../contexts/SideBarContext';
import { GuildContextProvider } from '../../contexts/GuildContext';
import GuildsItems from '../../components/Guilds';

const getArea = (gridArea: string) => ({
  gridArea,
});

function GuildsLayout({ children }: { children: React.ReactNode }) {
  return (
    <GuildContextProvider>
      <SideBarContextProvider>
        <div className="guilds-page_grid">
          <div style={getArea('sidebar')} className="z-50 fixed sm:block">
            <GuildsItems.SideBar />
          </div>

          <nav style={getArea('navbar')} className="overflow-x-hidden">
            <GuildsItems.NavBar />
          </nav>

          <main style={getArea('guild')}>{children}</main>
        </div>
      </SideBarContextProvider>
    </GuildContextProvider>
  );
}

export default GuildsLayout;
