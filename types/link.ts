import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  views: number;
  icon: IconDefinition;
  description: string;
};
