export class ResistorColor {
  private colors: string[];
  private corpus: string[];
  constructor(colors: string[], corpus: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']) {
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
   }
    this.colors = colors.slice(0, 2);
    this.corpus = corpus;
  }
  
  value = (): number => {
    return Number(this.colors.map((i) => this.corpus.indexOf(i)).join(''));
}
}
