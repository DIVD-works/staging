export type FooterLinks = {
    href: string,
    name: string,
    label?: string,
};

export type Card = {
    title: string,
    description: string,
    icon: string,
};

export type Team = {
    source: string,
    title: string,
    description: string,
};

export type LegalInfo = {
    title: string,
    description: string,
};

export type LegalBindInfo = {
    tags?: string[]
} & LegalInfo;

export type Projects = {
    location: string, 
    image: string,
} & LegalBindInfo;

export type FAQ = LegalBindInfo;

export type UnifiedContactField<T> = {
    field: T,
    check: boolean,
    noerror: boolean,
    errormessage: string,
};
