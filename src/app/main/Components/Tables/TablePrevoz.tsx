interface Props {
  prevoz: string; // Or 'Prevoz 1' | 'Prevoz 2' | 'Prevoz 3', if you want a more specific type
}

export default function TablePrevoz({ prevoz }: Props) {
  return <div>TablePrevoz: {prevoz}</div>;
}
