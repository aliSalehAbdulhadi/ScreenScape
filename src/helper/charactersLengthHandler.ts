export const charactersLengthHandler = (characters: string, length: number) => {
  return characters?.length <= length
    ? characters
    : characters.slice(0, length) + '...';
};
