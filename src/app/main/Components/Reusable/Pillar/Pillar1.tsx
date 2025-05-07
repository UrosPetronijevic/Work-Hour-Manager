type Nums = {
  godisnjiOdmor: number;
  placenoOdsustvo: number;
  bolovanje30: number;
  bolovanje100: number;
  bolovanjeNaTeretFonda: number;
  porodiljskoOdsustvo: number;
  slava: number;
};

type Pillar1Props = {
  nums: Nums;
  pxl: number;
};

export default function Pillar1({ nums, pxl }: Pillar1Props) {
  console.log(nums.godisnjiOdmor);
  console.log(nums.placenoOdsustvo);
  console.log(nums.bolovanje30);
  console.log(nums.bolovanje100);
  console.log(nums.bolovanjeNaTeretFonda);
  console.log(nums.porodiljskoOdsustvo);
  console.log(nums.slava);
  console.log("----------------------------------------------------------");

  return (
    <div className="flex flex-col text-center">
      <div
        style={{ height: `${nums.godisnjiOdmor * pxl}px` }}
        className="bg-amber-300"
      >
        {/* {nums.godisnjiOdmor !== 0 ? nums.godisnjiOdmor : ""} */}
      </div>
      <div
        style={{ height: `${nums.placenoOdsustvo * pxl}px` }}
        className="bg-slate-300"
      >
        {/* {nums.placenoOdsustvo !== 0 ? nums.placenoOdsustvo : ""} */}
      </div>
      <div
        style={{ height: `${nums.bolovanje30 * pxl}px` }}
        className="bg-red-300"
      >
        {/* {nums.bolovanje30 !== 0 ? nums.bolovanje30 : ""} */}
      </div>
      <div
        style={{ height: `${nums.bolovanje100 * pxl}px` }}
        className="bg-blue-300"
      >
        {/* {nums.bolovanje100 !== 0 ? nums.bolovanje100 : ""} */}
      </div>
      <div
        style={{ height: `${nums.bolovanjeNaTeretFonda * pxl}px` }}
        className="bg-pink-300"
      >
        {/* {nums.bolovanjeNaTeretFonda !== 0 ? nums.bolovanjeNaTeretFonda : ""} */}
      </div>
      <div
        style={{ height: `${nums.porodiljskoOdsustvo * pxl}px` }}
        className="bg-purple-300"
      >
        {/* {nums.porodiljskoOdsustvo !== 0 ? nums.porodiljskoOdsustvo : ""} */}
      </div>
      <div style={{ height: `${nums.slava * pxl}px` }} className="bg-green-300">
        {/* {nums.slava !== 0 ? nums.slava : ""} */}
      </div>
    </div>
  );
}
