import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface CategoryContextProps {
  category: string | undefined;
  setCategory: Dispatch<SetStateAction<string | undefined>>;
}

const CategoryContext = createContext<CategoryContextProps>({
  category: undefined,
  setCategory() {},
});

export function CategoryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [category, setCategory] = useState<string | undefined>(undefined);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
