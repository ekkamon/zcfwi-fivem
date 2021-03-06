export declare interface Item {
  name: string;
  label: string;
  count: number;
  type: string;
  rare: number;
  canUsable: boolean;
  canGive: boolean;
  canRemove: boolean;
  canHotkey: boolean;
}

interface Job {
  name: string;
  label: string;
  grade: number;
  gradeName: string;
  gradeLabel: string;
  gradeSalary: number;
  skinMale: object;
  skinFemale: object;
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
  tintIndex?: number;
}

interface Loadout {
  [key: string]: Weapon;
}

interface Profile {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: string;
  height: number;
}

interface Coords {
  x: number;
  y: number;
  z: number;
  heading: number;
}

export declare interface PlayerType {
  isLoaded?: boolean;
  source: number;
  group: string;
  job: Job;
  inventory: Inventory;
  accounts: Accounts;
  loadout: Loadout;
  profile: Profile;
  coords: Coords;
  setAccountMoney: (account: string, money: number) => void;
  getInventoryItem: (name: string) => Item;
  setInventoryItemCount: (name: string, count: number) => void;
  setWeapon: (name: string, label: string, ammo: number) => void;
  setWeaponAmmo: (name: string, ammo: number) => void;
  removeWeapon: (name: string) => void;
}
