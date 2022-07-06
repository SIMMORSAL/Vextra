export interface RichTextModel {
  id: string;
  type: string;
  data: RichTextData;
}

interface RichTextData {
  text: string;
  level?: number;
  textAlign: string;
}
