export type FormType = {
  feedingCycle: number;
  lastFeedingTime: Date;
  wateringCycle: number;
  lastWateringTime: Date;
  note: string | null;
};

export type CareDisabledObj = {
  feedingCycle: boolean;
  lastFeedingTime: boolean;
  wateringCycle: boolean;
  lastWateringTime: boolean;
};
