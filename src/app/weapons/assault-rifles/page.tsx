import WeaponItem from "@/components/WeaponItem";
import { gunData } from "@/data/weapon-data";

export default function AssaultRifles() {
  const weaponItems = gunData.map((gun) => (
    <WeaponItem key={gun.name} gun={gun} />
  ));

  return <div className="mt-1">{weaponItems}</div>;
}
