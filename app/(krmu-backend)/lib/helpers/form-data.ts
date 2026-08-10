function isFile(value: unknown): value is File {
  return (
    typeof File !== "undefined" &&
    value instanceof File
  );
}

function isBlob(value: unknown): value is Blob {
  return (
    typeof Blob !== "undefined" &&
    value instanceof Blob
  );
}

function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

function appendToFormData(
  formData: FormData,
  value: unknown,
  key: string
) {
  if (value === undefined || value === null) {
    return;
  }

  if (isFile(value) || isBlob(value)) {
    formData.append(key, value);
    return;
  }

  if (isDate(value)) {
    formData.append(key, value.toISOString());
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      appendToFormData(
        formData,
        item,
        `${key}[${index}]`
      );
    });

    return;
  }

  if (
    typeof value === "object" &&
    value !== null
  ) {
    Object.entries(value).forEach(
      ([childKey, childValue]) => {
        appendToFormData(
          formData,
          childValue,
          `${key}[${childKey}]`
        );
      }
    );

    return;
  }

  formData.append(key, String(value));
}

export function toFormData(
  data: Record<string, unknown>
): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    appendToFormData(formData, value, key);
  });

  return formData;
}