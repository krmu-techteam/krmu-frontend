export interface PersonSchemaProps {
  name: string;
  jobTitle?: string;
  email?: string;
  image?: string;
  description?: string;

  worksFor?: {
    type?: "Organization" | "CollegeOrUniversity";
    name: string;
    url?: string;
  };

  alumniOf?: {
    type?: "Organization" | "CollegeOrUniversity";
    name: string;
    url?: string;
  };

  sameAs?: string[];
}

export const createPersonSchema = (people: PersonSchemaProps[]) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": people.map((person) => ({
      "@type": "Person",

      name: person.name,

      ...(person.jobTitle && {
        jobTitle: person.jobTitle,
      }),

      ...(person.email && {
        email: person.email,
      }),

      ...(person.image && {
        image: person.image,
      }),

      ...(person.description && {
        description: person.description,
      }),

      ...(person.worksFor && {
        worksFor: {
          "@type": person.worksFor.type ?? "Organization",
          name: person.worksFor.name,
          ...(person.worksFor.url && {
            url: person.worksFor.url,
          }),
        },
      }),

      ...(person.alumniOf && {
        alumniOf: {
          "@type": person.alumniOf.type ?? "CollegeOrUniversity",
          name: person.alumniOf.name,
          ...(person.alumniOf.url && {
            url: person.alumniOf.url,
          }),
        },
      }),

      ...(person.sameAs?.length && {
        sameAs: person.sameAs,
      }),
    })),
  });
};
