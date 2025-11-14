export type CareFormType = {
  feedingCycle: number;
  lastFeedingTimeHour: number;
  lastFeedingTimeMinute: number;
  wateringCycle: number;
  lastWateringTimeHour: number;
  lastWateringTimeMinute: number;
  note: string | null;
};

export type PetInfo = {
  imgUrl?: string;
  name: string;
  age: string;
  weight: string;
  gender: string;
};
