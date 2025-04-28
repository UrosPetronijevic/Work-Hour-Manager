export const handlePositionsGornje = (positions: any, employees: any) => {
  const br1 = positions?.[0].sakljucar;
  const br2 = positions?.[0].zamenik1;
  const br3 = positions?.[0].zamenik2;
  const br4 = positions?.[0].nepredvidjeni1;
  const br5 = positions?.[0].nepredvidjeni2;

  const sakljucar = employees?.find(
    (employee: any) => employee.kadrovskiBroj === br1
  );

  const zamenik1 = employees?.find(
    (employee: any) => employee.kadrovskiBroj === br2
  );

  const zamenik2 = employees?.find(
    (employee: any) => employee.kadrovskiBroj === br3
  );

  const nepredvidjeni1 = employees?.find(
    (employee: any) => employee.kadrovskiBroj === br4
  );

  const nepredvidjeni2 = employees?.find(
    (employee: any) => employee.kadrovskiBroj === br5
  );

  console.log(sakljucar);
  console.log(zamenik1);
  console.log(zamenik2);
  console.log(nepredvidjeni1);
  console.log(nepredvidjeni2);

  const sakljucarArr = [];
};
