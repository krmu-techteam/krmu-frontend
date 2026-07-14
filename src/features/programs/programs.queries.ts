export const PROGRAMS_ENDPOINTS = {
  getSchoolProgrammes: (slug?: string) => {
    let urlcode = "";
    if (slug) {
      urlcode = `filters[programmeslug][$eq]=${slug}&`;
    }
    return `/api/school-programmes?${urlcode}populate[herosection][populate][herobtn][populate]=*&populate[herosection][populate][heroimg][populate]=*&populate[programmeeligibility][populate]=*&populate[programmescope][populate]=*&populate[programmehighlight][populate][programmehighlightcards][populate]=*&populate[specialisation][populate][specialisationcards][populate]=*&populate[admissionprocess][populate][admissionbtn][populate]=*&populate[admissionprocess][populate][admissionprocesscard][populate]=*&populate[admissionprocess][populate][desktopadmissionprocessimg][populate]=*&populate[curriculum][populate][currbtn][populate]=*&populate[curriculum][populate][years][populate][semester][populate][subjects][populate][course_name][populate]=*&populate[curriculum][populate][years][populate][semester][populate][pdfbtns][populate]=*&populate[labsfacilities][populate]=*&populate[beyondclassroom][populate]=*&populate[career][populate]=*&populate[dreamcareer][populate]=*&populate[financialassistance][populate]=*&populate[toc][populate][tocfaq][populate]=*&populate[toc][populate][tocimg][populate]=*&populate[toc][populate][tocbtn][populate]=*&populate[ourlocation][populate]=*&populate[school_category][fields][0]=id&populate[school_category][fields][1]=name&populate[school_category][fields][2]=slug`;
  },
  getPHDProgrammes: (slug?: string) => {
    let urlcode = "";
    if (slug) {
      urlcode = `filters[phdslug][$eq]=${slug}&`;
    }
    return `/api/phd-single-programmes?${urlcode}populate=school_category,criteria`;
  }
};
