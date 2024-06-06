export interface ImageSource {
  src: string;
  currentItem: boolean;
  direction: 'in' | 'outLeft' | 'outRight';
}

export interface IMoto {
  name: string;
  titlu: string;
  imageSources: ImageSource[];
  pret: string;
  descriere: string;
  articleBody: string;
}
