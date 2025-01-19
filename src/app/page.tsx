"use client";

import { useDiscordSDK } from "./_logic/useDiscordSDK";
import { Suspense, useEffect } from "react";
import { UnitySports } from "./_states/unitySports";

export default function Page() {
  const discordId = "1329832055307243635";

  const { setupDiscordSDK } = useDiscordSDK(discordId);

  useEffect(() => {
    setupDiscordSDK();
  }, [setupDiscordSDK]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UnitySports />
      </Suspense>
    </>
  );
}
