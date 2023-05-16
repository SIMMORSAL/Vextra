export interface History {
  groupTitle: string;
  icon: string;
  items: Item[];
}

interface Item {
  title: string;
  afterTitle?: string;
  date?: string;
  description?: string;
}
