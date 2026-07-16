import {
  AboutPageDomain,
  AboutPageResponse,
  AboutPageRaw,
} from "./about.types";

export class AboutMapper {
  static toDomain(response: AboutPageResponse): AboutPageDomain {
    const raw: AboutPageRaw = response.data;

    return {
      id: raw.id,
      documentId: raw.documentId,
      title: raw.title,
      subtitle: raw.subtitle,
      thenexgentitle: raw.thenexgentitle,
      thenexgendescription: raw.thenexgendescription,

      accrediation: {
        title: raw.accrediation.title,
        accrediationlogos: raw.accrediation.accrediationlogos,
      },

      krmugroup: {
        title: raw.krmugroup.title,
        subtitle: raw.krmugroup.subtitle,
        description: raw.krmugroup.description,
        krmbranch: raw.krmugroup.krmbranch,
      },

      halloffame: {
        title: raw.halloffame.title,
        hallfame: raw.halloffame.hallfame.map((item) => ({
          id: item.id,
          title: item.title.trim(),
          description: item.description,
        })),
      },

      visionmission: {
        visiontitle: raw.visionmission.visiontitle,
        missiontitle: raw.visionmission.missiontitle,
        visiondescription: raw.visionmission.visiondescription,
        missiondescription: raw.visionmission.missiondescription,
      },

      internationcollaboration: {
        title: raw.internationcollaboration.title,
        description: raw.internationcollaboration.description,
        intcollabbtn: raw.internationcollaboration.intcollabbtn,
        internationcollablogos:
          raw.internationcollaboration.internationcollablogos,
        image: raw.internationcollaboration.image,
      },

      krmucommittee: {
        title: raw.krmucommittee.title,
        description: raw.krmucommittee.description,
        committeebtn: raw.krmucommittee.committeebtn,
      },
    };
  }
}
