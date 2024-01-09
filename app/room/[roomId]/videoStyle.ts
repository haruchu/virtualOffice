export const videoStyle = (memberCount: number) => {
  switch (memberCount) {
    case 1:
      return `display: block; grid-template: 1fr / 1fr;`;
    case 2:
      return `grid-template: 1fr / repeat(2,1fr)`;
    case 3:
      return `grid-template: repeat(2,1fr) / repeat(2,1fr);`;
    case 4:
      return `grid-template: repeat(2,1fr) / repeat(2,1fr);`;
    case 5:
      return `grid-template: repeat(2,1fr) / repeat(3,1fr);`;
    case 6:
      return `grid-template: repeat(2,1fr) / repeat(3,1fr);`;
    case 7:
      return `grid-template: repeat(3,1fr) / repeat(3,1fr);`;
    case 8:
      return `grid-template: repeat(3,1fr) / repeat(3,1fr);`;
    case 9:
      return `grid-template: repeat(3,1fr) / repeat(3,1fr);`;
    default:
      return `grid-template: repeat(4,1fr) / repeat(3,1fr);`;
  }
};
