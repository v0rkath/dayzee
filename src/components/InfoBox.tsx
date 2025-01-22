import asciiToBinary from "@/utils/ascii-to-binary";

type InfoBoxProps = {
  title: string;
  info: string[];
  decoration?: boolean;
  decWidth?: string;
};

export default function InfoBox({
  title,
  info,
  decoration = false,
  decWidth = "8",
}: InfoBoxProps) {
  const rows = info.map((item, index) => {
    if (index === info.length - 1) {
      return <p key={item}>{item}</p>;
    }

    return (
      <p key={item} className="mb-2">
        {item}
      </p>
    );
  });

  const widthVariations = {
    8: "w-8",
    10: "w-10",
    12: "w-12",
    14: "w-14",
    16: "w-16",
    20: "w-20",
    24: "w-24",
    28: "w-28",
    32: "w-32",
    36: "w-36",
    40: "w-40",
    44: "w-44",
    48: "w-48",
    52: "w-52",
    60: "w-60",
    72: "w-72",
    80: "w-80",
    96: "w-96"
  };

  const binTitle = asciiToBinary(title);

  return (
    <div className="min-w-80 flex flex-col">
      <div className="border-dark-sub border-t border-r border-l p-1 pl-2 text-dark-sub flex justify-between">
        {title}
        <span className="text-xs my-auto font-light pr-2">{binTitle}</span>
      </div>
      <div className="border-dark-sub border p-2 text-sm text-stone-400">
        {rows}
      </div>
      {decoration && (
        <div
          className={`${
            decWidth ? widthVariations[decWidth as keyof object] : null
          } bg-white h-2 mt-3`}
        ></div>
      )}
    </div>
  );
}
