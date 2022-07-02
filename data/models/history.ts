export interface History {
  groupName: string;
  icon: string;
  items: Item[];
}

interface Item {
  title: string;
  date: string;
  description?: string;
}
