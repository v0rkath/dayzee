

export type Gun = {
  name: string;
  ammoType: string;
  weight: number;
  roundsPerMin: string;
  type: string;
  western: boolean;
  size: number[];
  image?: string;
};

// name: "",
// ammoType: "",
// weight: ,
// roundsPerMin: "",
// type: "Assault Rifle",
// western: ,

export const gunData: Gun[] = [
  {
    name: "LAR",
    ammoType: ".308 Winchester",
    weight: 4,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
  },
  {
    name: "AUR A1",
    ammoType: "5.56 x 45mm",
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [6, 3],
    image: "../assets/AUR-A1.png",
  },
  {
    name: "AUR AX",
    ammoType: "5.56 x 45mm",
    weight: 4,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
  },
  {
    name: "KA-101",
    ammoType: "5.56 x 45mm",
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
  },
  {
    name: "KA-74",
    ammoType: "5.45 x 39mm",
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
  },
  {
    name: "KAS-74U",
    ammoType: "5.45 x 39mm",
    weight: 2,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
  },
  {
    name: "KA-M",
    ammoType: "7.62 x 39mm",
    weight: 3,
    roundsPerMin: "600 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
  },
  {
    name: "LE-MAS",
    ammoType: "5.56 x 45mm",
    weight: 4,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [6, 3],
  },
  {
    name: "M16-A2",
    ammoType: "5.56 x 45mm",
    weight: 4,
    roundsPerMin: "550 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [9, 3],
  },
  {
    name: "M4-A1",
    ammoType: "5.56 x 45mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: true,
    size: [8, 3],
  },
  {
    name: "SVAL",
    ammoType: "9 x 39mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [8, 3],
  },
  {
    name: "Vikhr",
    ammoType: "9 x 39mm",
    weight: 2,
    roundsPerMin: "900 rounds/min",
    type: "Assault Rifle",
    western: false,
    size: [6, 3],
  },
];
