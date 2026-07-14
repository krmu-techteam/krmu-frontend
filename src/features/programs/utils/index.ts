
export function getTruncatedText(text: string, expanded: boolean, limit: number = 50) {
  const cleanText = text || "";
  const isLong = cleanText.length > limit;
  const displayTitle = expanded ? cleanText : cleanText.slice(0, limit);
  
  return { isLong, displayTitle };
}
export function parseCommaSeparatedUrls(inputString?: string, defaultUrls: string[] = []): string[] {
  if (!inputString) return defaultUrls;
  const parsed = inputString.split(',').map(url => url.trim()).filter(url => url !== "");
  return parsed.length > 0 ? parsed : defaultUrls;
}

export function getTranslateXMultiplier(width: number): number {
  if (width < 640) return 75;
  if (width < 1024) return 120;
  if (width < 1530) return 180;
  return 240;
}

export function getCircularOffset(index: number, activeIndex: number, total: number): number {
  let offset = index - activeIndex;
  if (offset < -total / 2) offset += total;
  if (offset > total / 2) offset -= total;
  return offset;
}

export interface Card3DStyle {
  transform: string;
  zIndex: number;
  opacity: number;
}

export function calculate3DCardStyles(offset: number, multiplier: number): Card3DStyle {
  const absOffset = Math.abs(offset);
  const translateX = offset * multiplier;
  const translateZ = -absOffset * 120;
  const rotateY = offset * -25;
  const scale = 1 - absOffset * 0.15;
  const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.35;
  const zIndex = 10 - absOffset;

  return {
    transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex,
    opacity,
  };
}

