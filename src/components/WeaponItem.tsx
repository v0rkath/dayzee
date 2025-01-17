import { Gun } from "@/data/weapon-data";
import WeaponBoxes from "./WeaponBoxes";
import Image from "next/image";
import AURA1 from "../assets/AUR-A1.png";

type WeaponItemProps = {
  gun: Gun;
};

export default function WeaponItem({ gun }: WeaponItemProps) {
  return (
    <div className="w-full flex border-t-2 border-dark-border">
      <div className="flex flex-col bg-[#12171D] w-1/2 relative overflow-hidden">
        <p className="z-10 text-xs pt-7 px-6 text-dark-sub">NAME</p>
        <h2 className="z-10 text-7xl font-light text-stone-400 px-6">
          {gun.name}
        </h2>
        <div className="z-10 flex w-11/12 h-9 items-center justify-between mt-8 mb-2 px-6 text-xs bg-[#343F45] text-[#12171D] ">
          <p>{gun.ammoType}</p>
          <p>{gun.weight}kg</p>
          <p>{gun.roundsPerMin}</p>
          <p>{gun.type}</p>
        </div>
        <p className="text-[300px] absolute right-0 -bottom-20 opacity-5">
          {gun.western ? "W" : "E"}
        </p>
      </div>

      <div className="bg-[#181D23] w-1/2 flex content-center justify-center relative">
        <WeaponBoxes boxes={gun.size} />
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={AURA1}
          alt=""
          width="300"
          height="250"
        />
      </div>
    </div>
  );
}
