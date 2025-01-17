import asciiToBinary from "@/data/ascii-to-binary";
import { gunData } from "@/data/weapon-data";
import { notFound } from "next/navigation";

type WeaponPageProps = {
  params: {
    name: string;
  };
};

export default async function SpecificWeapon({ params }: WeaponPageProps) {
  const data = gunData;
  const param = await params;

  const gun = data.find((item) => item.name === param.name);
  // Error: Route "/weapons/assault-rifles/[name]" used `params.name`.
  // `params` should be awaited before using its properties.
  // Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis

  if (!gun) {
    notFound();
  }

  const binaryName = asciiToBinary(gun.name);

  return (
    <div className="p-7">
      <div className="flex justify-center">
        <h1 className="text-7xl text-stone-400 text-center">{gun.name}</h1>
        <span className="text-dark-sub pt-4 ml-4 text-sm">.AUGSHORT</span>
      </div>
      <span>{binaryName}</span>
    </div>
  );
}
