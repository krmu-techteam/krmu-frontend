import React, { ComponentType } from "react";

type Section = {
  key: string;
  Component: ComponentType<any>;
  propName: string;
  dataKey?: string;
};

type Props = {
  sections: readonly Section[];
  data: any;
  extraProps?: Record<string, any>;
};

export const SectionsRenderer = ({
  sections,
  data,
  extraProps = {},
}: Props) => {
  return (
    <>
      {sections.map(({ key, Component, propName, dataKey }) => {
        const keyToUse = dataKey || propName;
        let sectionData = data?.[keyToUse];

        // Fallback: If sectionData is not found, inspect the structure of data
        if (sectionData === undefined || sectionData === null) {
          if (Array.isArray(data)) {
            sectionData = data;
          } else if (data && typeof data === "object") {
            const keys = Object.keys(data);
            if (keys.length === 1) {
              sectionData = data[keys[0]];
            } else {
              sectionData = data;
            }
          }
        }

        if (!sectionData) return null;

        return (
          <Component
            key={key}
            {...{ [propName]: sectionData }}
            {...extraProps}
          />
        );
      })}
    </>
  );
};

