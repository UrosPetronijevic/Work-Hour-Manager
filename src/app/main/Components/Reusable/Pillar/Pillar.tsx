//primary: "#F4EEFF", secondary: "#DCD6F7", tertiary: "#A6B1E1", quatro: "#424874", quatroLight: "#6e76ad", // quatroLight: "#7b81b4", bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600

type PillarProps = {
  num: number;
  pxl: number;
};

export default function Pillar({ num, pxl }: PillarProps) {
  return (
    <div
      className="bg-gradient-to-r from-[#424874] to-[#29d3d9] m-[1px] inline-block h-full"
      style={{
        height: `${num * pxl}px`, // Scale height dynamically
      }}
    ></div>
  );
}
