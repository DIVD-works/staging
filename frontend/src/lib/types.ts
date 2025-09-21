export type SEO<T> = {
  title: T;
  description: T;
};

export type IconSet<T> = { icon: T };
export type Cards<T> = SEO<T> & IconSet<T>;
export type TechnologyIcons<T> = IconSet<T> & { style: T };
export type Team<T> = { source: T } & SEO<T>;
export type Tags<T> = { tags?: T[] };
export type Projects<T> = { location: T; image: T } & SEO<T> & Tags<T>;
export type FAQ<T> = SEO<T>;
export type Conduct<T> = SEO<T>;
export type TOS<T> = SEO<T> & Tags<T>;
export type Privacy<T> = SEO<T> & Tags<T>;
