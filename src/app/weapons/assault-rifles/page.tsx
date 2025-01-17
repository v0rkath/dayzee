import { gunData } from "@/data/weapon-data";
import { Metadata } from "next";

import WeaponItem from "@/components/WeaponItem";

export const metadata: Metadata = {
  title: "Assault Rifles | DayZee.io",
  description: "",
};

export default function AssaultRifles() {
  const weaponItems = gunData.map((gun) => (
    <WeaponItem key={gun.name} gun={gun} />
  ));

  return <div className="mt-1">{weaponItems}</div>;
}
