import Form from "./Form";

type FormPageProps = {
  setForm: (value: boolean) => void; // Add the setPopUp function here
};

export default function FormPage({ setForm }: FormPageProps) {
  return (
    <div className="absolute w-screen min-h-screen bg-black/50 backdrop-blur-[14px] flex justify-center items-center">
      <Form setForm={setForm} />
    </div>
  );
}
