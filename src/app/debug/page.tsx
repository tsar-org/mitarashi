"use client";
import { Suspense } from "react";
import { UnitySports } from "../_states/unitySports";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UnitySports />
      </Suspense>
    </>
  );
}
