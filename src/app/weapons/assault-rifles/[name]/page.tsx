"use client";
import Image from "next/image";
import asciiToBinary from "@/utils/ascii-to-binary";
import InfoBox from "@/components/InfoBox";
import DamageBlock from "@/components/DamageBlock";
import dynamic from "next/dynamic";

import { gunData } from "@/data/weapon-data";
import { notFound } from "next/navigation";
import { use, useMemo } from "react";
import { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { findCenter, generateZoomLevel } from "@/utils/map-utils";

type WeaponPageProps = Promise<{ name: string }>;

export default function SpecificWeapon({
  params,
}: {
  params: WeaponPageProps;
}) {
  const GameMap = useMemo(
    () =>
      dynamic(() => import("../../../../components/Map/GameMap"), {
        ssr: false,
        loading: () => <p>Loading...</p>,
      }),
    []
  );
  const data = gunData;
  const param = use(params);

  const gun = data.find(
    (item) => item.name.split(" ").join("-") === param.name
  );

  if (!gun) {
    notFound();
  }

  const binaryName = asciiToBinary(param.name);
  let posix: LatLngExpression = [0.79029, 0.69003];
  let zoom = 0;
  if (gun.markers) {
    // temporary until dataset contains marker data
    posix = findCenter(gun.markers);
    zoom = generateZoomLevel(gun.markers);
  }
  const bounds: LatLngBoundsExpression = [
    [0, 0],
    [2500, 2500],
  ];

  return (
    <div className="p-7 flex flex-col bg-darkest mx-auto max-w-4xl">
      <div className="flex justify-center">
        <h1 className="text-7xl text-stone-400">{param.name}</h1>
        <span className="text-dark-sub pt-4 ml-4 text-sm inline-block">
          .{gun.className}
        </span>
      </div>
      <span className="flex self-center mt-6 text-dark-sub text-xs font-light">
        {binaryName}
      </span>
      <Image
        className="mx-auto mt-14"
        src={`${gun.image}`}
        alt=""
        width="600"
        height="250"
      />
      <div className="flex mt-28 justify-between">
        {gun.damage && <DamageBlock damage={gun.damage} />}
        <InfoBox
          title="Ammo"
          info={gun.ammoType}
          decoration={true}
          decWidth="10"
        />
      </div>
      <div className="mt-16">
        <InfoBox
          title="Attachments"
          info={gun.ammoType}
          decoration={true}
          decWidth="96"
        />
      </div>
      <div className="mt-16">
        <InfoBox
          title="Locations"
          info={gun.locations}
          decoration={true}
          decWidth="44"
        />
      </div>
      <div className="bg-white-700 mx-auto my-5 mt-16 mb-16">
        {gun.markers && (
          <GameMap
            posix={posix}
            zoom={zoom}
            bounds={bounds}
            locations={gun.markers}
          />
        )}
      </div>
    </div>
  );
}
