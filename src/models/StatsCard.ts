export class StatsCard {
  color: string;
  data: number;
  label: string;
  icon: string;
  constructor(color: string, data: number, label: string, icon: string) {
    this.color = color;
    this.data = data;
    this.label = label;
    this.icon = icon;
  }
}
