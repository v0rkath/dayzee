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
  const {name} = await params;

  const gun = data.find((item) => item.name.split(" ").join("-") === name);

  if (!gun) {
    notFound();
  }

//   const binaryName = asciiToBinary(name);
//   console.log(binaryName)

  return (
    <div className="p-7 flex flex-col bg-darkest h-screen">
      <div className="flex justify-center">
        <h1 className="text-7xl text-stone-400 text-center">{name}</h1>
        <span className="text-dark-sub pt-4 ml-4 text-sm">.AUGSHORT</span>
      </div>
      <span className="flex self-center mt-6 text-dark-sub text-xs">0101010</span>
    </div>
  );
}
