export const ButtonAppearance = {
  Primary: 'primary',
  Secondary: 'secondary',
  Secondary2: 'secondary2'
};

export type ButtonAppearances =
  (typeof ButtonAppearance)[keyof typeof ButtonAppearance];
