import { gunData } from "@/data/weapon-data";
import { notFound } from "next/navigation";

import WeaponDisplay from "@/components/WeaponDisplay";

interface PageProps {
    params : {
        name: string;
    }
}

export function generateMetadata(props: PageProps) {
    const { params } = props;
    return { title: params.name }
}

export default function SpecificWeapon(props: PageProps) {
    const { params } = props;

  const data = gunData;

  const gun = data.find(
    (item) => item.name.split(" ").join("-") === params.name
  );

  if (!gun) {
    notFound();
  }

  return <WeaponDisplay gun={gun} />;
}
