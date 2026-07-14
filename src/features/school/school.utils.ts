
export const splitTitleByFor = (title: string) => {
    const splitIndex = title.toLowerCase().indexOf("for");
    const hasSplit = splitIndex !== -1;
    return {
        boldText: hasSplit ? title.substring(0, splitIndex) : title,
        normalText: hasSplit ? title.substring(splitIndex) : "",
    }
}
