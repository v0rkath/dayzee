type DamageBlockProps = {
  damage: {
    normal: number;
    plateCarrier: number;
    ballisticVest: number;
    policeVest: number;
    chestplate: number;
  };
};

export default function DamageBlock(props: DamageBlockProps) {
  return (
    <div className="w-1/2 max-w-96 min-w-80">
      <p className="flex justify-between border-b border-dark-sub mb-1 text-dark-sub">
        Damage<span className=" text-stone-400">{props.damage.normal}</span>
      </p>
      <p className="flex justify-between border-b border-dark-sub mb-1 text-dark-sub">
        Damage v Chestplate
        <span className="text-stone-400">{props.damage.chestplate}</span>
      </p>
      <p className="flex justify-between border-b border-dark-sub mb-1 text-dark-sub">
        Damage v Police vest
        <span className="text-stone-400">{props.damage.policeVest}</span>
      </p>
      <p className="flex justify-between border-b border-dark-sub mb-1 text-dark-sub">
        Damage v Ballistic vest
        <span className="text-stone-400">{props.damage.ballisticVest}</span>
      </p>
      <p className="flex justify-between border-b border-dark-sub mb-1 text-dark-sub">
        Damage v Plate carrier
        <span className="text-stone-400">{props.damage.plateCarrier}</span>
      </p>
    </div>
  );
}
