import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  views: number;
  icon: IconDefinition;
  description: string;
}
