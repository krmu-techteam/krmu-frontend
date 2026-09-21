import {
    HERO_CONFIGS,
    HeroConfig,
} from "@/features/programs/programs.constants";

export type { HeroConfig };
export const heroConfigs: Record<string, HeroConfig> = HERO_CONFIGS;
