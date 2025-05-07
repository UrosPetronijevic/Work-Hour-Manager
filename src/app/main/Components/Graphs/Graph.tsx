import Pillar from "../Reusable/Pillar/Pillar";
import Pillar1 from "../Reusable/Pillar/Pillar1";
import { Nums, randomAlgorithm } from "./algorithms";

type GrapProps = {
  graphArr: Nums[];
  pxl: number;
};

export default function Graph({ graphArr, pxl }: GrapProps) {
  const widthPercentage = 100 / graphArr.length;

  return (
    <div className="h-full border border-amber-300 items-end flex">
      <div className="flex justify-between w-full items-end">
        {graphArr.map((num, i) => (
          <div
            key={i}
            className="flex flex-col p-1"
            style={{ width: `${widthPercentage}%` }}
          >
            <span className="self-center">
              {num.bolovanje100 +
                num.bolovanje30 +
                num.bolovanjeNaTeretFonda +
                num.godisnjiOdmor +
                num.placenoOdsustvo +
                num.porodiljskoOdsustvo +
                num.slava}
            </span>
            <Pillar1 key={i} nums={graphArr[i]} pxl={pxl} />

            <span>{num.userName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
