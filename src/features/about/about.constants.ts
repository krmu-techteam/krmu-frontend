export const ABOUT_COMPONENT_KEYS = {
  ACCREDIATION: "accrediation",
  KRM_GROUP: "krmugroup",
  HALL_OF_FAME: "halloffame",
  VISION_MISSION: "visionmission",
  INTERNATIONAL_COLLABORATION: "internationcollaboration",
  KRMU_COMMITTEE: "krmucommittee",
} as const;

export type AboutComponentKey =
  (typeof ABOUT_COMPONENT_KEYS)[keyof typeof ABOUT_COMPONENT_KEYS];
