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
    "01-avendus.png",
    "02-deloitte.png",
    "03-ey.png",
    "04-hdfc.png",
    "05-edelweiss.png",
    "06-kpmg.png",
    "07-axis-bank.png",
    "08-icici.png",
    "09-jm-financial.png",
    "10-jp-morgan.png",
    "11-kotak.png",
    "12-morgan.png",
    "13-motilal-oswal.png",
    "14-pwc.png",
    "15-goldman.png",
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
  const base = filename.replace(/\.[^.]+$/, "").replace(/^\d{2}-/, "");
  return base.replace(/[-]+/g, " ").trim() || "Organisation logo";
}
