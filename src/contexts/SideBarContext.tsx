import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface SideBarContextProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const SideBarContext = createContext<SideBarContextProps>({
  state: false,
  setState() {},
});

export function SideBarContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState(false);

  return (
    <SideBarContext.Provider value={{ state, setState }}>
      {children}
    </SideBarContext.Provider>
  );
}

export default SideBarContext;
