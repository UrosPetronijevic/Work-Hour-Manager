import FormSection1 from "./Sections/FormSection1";
import FormSection2 from "./Sections/FormSection2";
import FormSection3 from "./Sections/FormSection3";

type FormProps = {
  setForm: (value: boolean) => void; // Add the setPopUp function here
};

export default function Form({ setForm }: FormProps) {
  return (
    <form className="w-4/5 bg-white border-amber-300 grid grid-cols-3 p-10 relative">
      <button
        onClick={() => {
          setForm(false);
        }}
        className="absolute top-2 right-4 p-2"
      >
        X
      </button>
      <FormSection1 />
      <FormSection2 />
      <div className="flex flex-col justify-between">
        <FormSection3 />
        <button
          type="submit"
          className="gold-striped-lighter py-2 px-8 w-max self-center rounded-md"
        >
          Zavrsi
        </button>
      </div>
    </form>
  );
}
