import React, { ComponentType } from "react";

type Section = {
  key: string;
  Component: ComponentType<any>;
  propName: string;
};

type Props = {
  sections: readonly Section[];
  data: Record<string, any>;
};

export const SectionsRenderer = ({
  sections,
  data,
}: Props) => {
  return (
    <>
      {sections.map(({ key, Component, propName }) => {
        const sectionData = data[propName];

        if (!sectionData) return null;

        return (
          <Component
            key={key}
            {...{ [propName]: sectionData }}
          />
        );
      })}
    </>
  );
};