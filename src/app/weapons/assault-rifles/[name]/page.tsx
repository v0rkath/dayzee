import asciiToBinary from "@/data/ascii-to-binary";
import Image from "next/image";
import { gunData } from "@/data/weapon-data";
import { notFound } from "next/navigation";
import DamageBlock from "@/components/DamageBlock";

type WeaponPageProps = {
  params: {
    name: string;
  };
};

export default async function SpecificWeapon({ params }: WeaponPageProps) {
  const data = gunData;
  const { name } = await params;

  const gun = data.find((item) => item.name.split(" ").join("-") === name);

  if (!gun) {
    notFound();
  }

  const binaryName = asciiToBinary(name);

  return (
    <div className="p-7 flex flex-col bg-darkest h-screen mx-auto">
      <div className="flex justify-center">
        <h1 className="text-7xl text-stone-400 text-center">{name}</h1>
        <span className="text-dark-sub pt-4 ml-4 text-sm inline-block">
          .AUGSHORT
        </span>
      </div>
      <span className="flex self-center mt-6 text-dark-sub text-xs">
        {binaryName}
      </span>
      <Image
        className="mx-auto mt-14"
        src={`${gun.image}`}
        alt=""
        width="600"
        height="250"
      />
      <div className="flex mt-28 gap-40 mx-auto">
        {gun.damage && <DamageBlock damage={gun.damage}/>}
        <div className="min-w-96 flex flex-col">
          <div className="border-dark-sub border-t border-r border-l p-1 pl-2 text-dark-sub flex justify-between">
            AMMO
            <span className="text-xs my-auto font-light pr-2">
              {asciiToBinary("Ammo")}
            </span>
          </div>
          <div className="border-dark-sub border p-2 text-sm">
            <p className="mb-2">5.56 x 45mm</p>
            <p>5.56 x 45mm tracer</p>
          </div>
          <div className="max-w-16 bg-white h-2 mt-3"></div>
        </div>
      </div>
    </div>
  );
}
