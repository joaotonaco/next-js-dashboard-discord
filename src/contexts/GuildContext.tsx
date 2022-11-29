import { createContext, useState } from 'react';
import { mockGuilds } from '../mocks/guilds';

interface GuildObject {
  name: string;
  icon: string;
  id: string;
}

interface GuildContextProps {
  guild: GuildObject | undefined;
  setGuild: (id?: string) => boolean;
}

const GuildContext = createContext<GuildContextProps>({
  guild: undefined,
  setGuild: () => true,
});

export function GuildContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guild, setState] = useState<GuildObject | undefined>();

  const setGuild = (id?: string) => {
    const guild = mockGuilds.find((guild) => guild.id === id);
    setState(guild);
    return !!guild;
  };

  return (
    <GuildContext.Provider value={{ guild, setGuild }}>
      {children}
    </GuildContext.Provider>
  );
}

export default GuildContext;
