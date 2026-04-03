/**
 * Filenames under public/landingpage/bsc-finance-2026/<folder>/ for each tab.
 * Order matches content.organisationsSection.tabs (Core, Quant, Actuarial).
 */
export const ORGANISATION_TAB_FOLDERS = [
  "core-finance",
  "quantitative-finance",
  "actuarial-science",
] as const;

export const organisationLogosByTab: readonly string[][] = [
  [
    "3oeg9ebm.jpg",
    "deloitte.png",
    "ey.png",
    "hdfc.png",
    "images-1.png",
    "images-2.png",
    "images-0.png",
    "isec.png",
    "jmfin.png",
    "jp-morgan.jpeg",
    "kotak-mahindra.png",
    "morgan-stanley.png",
    "motilal.png",
    "pwc.png",
    "whatsapp-1.jpeg",
  ],
  [
    "bajaj-allianz.png",
    "citadel.jpg",
    "de-shaw.png",
    "fund-005158.jpg",
    "images-1.png",
    "images-3.png",
    "images-4.png",
    "logos-1.jpg",
    "millennium.jpg",
    "optiver.png",
    "tower-research.png",
    "whatsapp-1.jpeg",
    "whatsapp-2.jpeg",
    "whatsapp-3.jpeg",
    "whatsapp-4.jpeg",
    "worldquant.jpg",
  ],
  [
    "bajaj-allianz.png",
    "deloitte.png",
    "download.png",
    "ey.png",
    "hdfc-life.png",
    "icici-prudential.jpeg",
    "images-5.png",
    "milliman.png",
    "munich-re.png",
    "perview-2.png",
    "sbi-life.png",
    "star-health.png",
    "tata-aia.png",
    "tower-research.png",
    "whatsapp-1.jpeg",
    "whatsapp-2.jpeg",
    "wtw.png",
  ],
];

export function organisationLogoSrc(folder: string, filename: string): string {
  return `/landingpage/bsc-finance-2026/${folder}/${filename}`;
}

export function logoAltFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  return base.replace(/[-]+/g, " ").trim() || "Organisation logo";
}
