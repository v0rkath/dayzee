type WeaponBoxesProps = {
  boxes: number[];
};

export default function WeaponBoxes({ boxes }: WeaponBoxesProps) {
  const width = boxes[0];
  const height = boxes[1];

  function generateBoxes() {
    const boxArray = [];

    let key = 0;

    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= width; j++) {
        key += 1;
        boxArray.push(<div key={key} className="w-14 plus"></div>);
      }
    }

    return boxArray;
  }

  const boxElements = generateBoxes();

  return (
    <div className={`grid grid-rows-3 grid-flow-col gap-10 mt-4 z-10`}>
      {boxElements}
    </div>
  );
}
