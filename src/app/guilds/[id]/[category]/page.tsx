'use client';

import CategoryContext from '../../../../contexts/CategoryContext';
import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import ConfigsItems from '../../../../components/Configs';

function ConfigCategory({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { setCategory } = useContext(CategoryContext);

  useEffect(() => {
    setCategory(params.category);
  }, []);

  if (!['channels', 'roles'].includes(params.category)) {
    return (
      <main>
        <Link href={`/guilds/${params.id}`}>Back to Guild</Link>
      </main>
    );
  }

  return (
    <main className="animate-[fade-in_0.3s_ease] mx-7 mt-1 flex flex-col gap-5">
      <ConfigsItems.ConfigItem name="Logs" type="channel" />
      <ConfigsItems.ConfigItem name="Register" type="channel" />
      <ConfigsItems.ConfigItem name="Welcome" type="channel" />
      <ConfigsItems.ConfigItem name="Reaction Role" type="channel" />
    </main>
  );
}

export default ConfigCategory;
