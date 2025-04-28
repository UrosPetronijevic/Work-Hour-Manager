export default function Profile() {
  return (
    <div className="absolute w-full min-h-screen bg-slate-700 flex flex-col">
      <div className="flex gold-striped-lighter text-2xl justify-between p-4">
        <div className="flex gap-4">
          <span>{"<-"}</span>
          <p>Mesec</p>
          <span>{"->"}</span>
        </div>
        <span> ime prezime br</span>
        <div>padajuci meni</div>
      </div>

      <div className="flex p-4 justify-between text-white">
        <div>calendar</div>
        <div>odsustva</div>
      </div>

      <div className="grid grid-cols-3 place-items-center text-white">
        <div className="flex flex-col">
          <span>datum rodjenja</span>
          <span>radni staz</span>
          <span>deca paketici jmbg</span>
        </div>

        <div className="flex flex-col">
          <span>pozicija u pripravnosti</span>
          <span>radno mesto</span>
          <span>narodna banka</span>
        </div>

        <div className="flex flex-col">
          <span>ukupan godisnji odnor</span>
          <span>ostatak godisnjeg odmora</span>
        </div>
      </div>
    </div>
  );
}
