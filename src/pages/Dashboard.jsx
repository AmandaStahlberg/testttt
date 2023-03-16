import React from "react";
import Goals from "../components/goals/Goals";
import TimeAndDate from "../components/timeAndDate/TimeAndDate";
import keycloak from "../keycloak";

export default function Dashboard() {
  return (
    <div className="h-screen">
      <header className="">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          {keycloak.tokenParsed && (
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome, &nbsp;
              {keycloak.tokenParsed.name}
            </h1>
          )}
        </div>
      </header>
      <main className="h-3/4">
        <div className="grid grid-cols-3 gap-6 h-full">
          <div className="col-span-2 bg-white shadow-md border border-stone-100 text-center p-4">
            Training programs
          </div>
          <div className="col-span-1 grid grid-rows-3 gap-6">
            <div className="grid row-span-1 bg-white shadow-md border border-stone-100 place-content-center">
              <TimeAndDate />
            </div>
            <div className="row-span-2 bg-white shadow-md border border-stone-100 text-center p-4">
              <Goals />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
