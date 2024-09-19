function momsBeregner(beloeb, moms = 25) {
  let totalPris = beloeb + beloeb * (beloeb / 100);
  console.log("beløbet inkl. moms" + totalPris + "kr");
}

momsBeregner(50);
