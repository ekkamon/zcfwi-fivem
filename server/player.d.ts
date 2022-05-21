interface Item {
  name: string;
  label: string;
  count?: number;
  type: string;
  rare: number;
  canUsable: boolean;
  canGive: boolean;
  canRemove: boolean;
  canHotkey: boolean;
}

interface PlayerJob {
  name: string;
  label: string;
  grade: number;
  gradeName: string;
  gradeLabel: string;
  gradeSalary: number;
  skinMale: {};
  skinFemale: {};
}

interface Inventory {
  [key: string]: Item;
}

interface Accounts {
  [key: string]: number;
}

interface Weapon {
  name: string;
  label: string;
  ammo: number;
  tintIndex?: WeaponTints;
}

interface WeaponTints {
  [key: number]: string;
}

interface Loadout {
  [key: string]: Weapon;
}

interface Coords {
  x: number;
  y: number;
  z: number;
  heading: number;
}

interface Profile {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  height: number;
}

export declare interface Player {
  source: number;
  identifier: string;
  group: string;
  job: PlayerJob;
  inventory: Inventory;
  accounts: Accounts;
  loadout: Loadout;
  skin: any;
  name: string;
  profile: Profile;
  coords: Coords;
  trigger: (eventName: string, ...params: any) => void;
  updateCoords: (coords: Coords) => void;
  getAccountMoney: (account: string) => number;
  addAccountMoney: (account: string, count: number) => void;
  removeAccountMoney: (account: string, count: number) => void;
  getInventoryItem: (name: string) => void;
  addInventoryItem: (name: string, count: number) => void;
  removeInventoryItem: (name: string, count: number) => void;
  getWeapon: (name: string) => void;
  addWeapon: (name: string, ammo: number) => void;
  addWeaponAmmo: (name: string, ammo: number) => void;
  removeWeapon: (name: string) => void;
  destroy: () => void;
  save: () => Promise<void>;
}
