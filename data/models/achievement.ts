export interface Achievement {
  groupName: string;
  icon: string;
  items: Item[];
}

interface Item {
  title: string;
  data: string;
}
