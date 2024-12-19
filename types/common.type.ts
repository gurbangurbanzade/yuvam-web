export interface ICommon {
  name: "string";
  title: "string";
  description: "string";
  content: "string";
  contentImage: "string";
  code: "string";
}
export interface IFaq {
  id: number;
  question: string;
  answer: string;
}
export interface ISocialMedia {
  id: number;
  name: string;
  icon: string;
  path: string;
}
export interface IContactUs {
  name: string;
  title: string;
  description: string;
  phoneNumber: string;
  email: string;
  address: string;
  addressMapUrl: string;
  contactUsSocialMedias: ISocialMedia[];
}
export interface IOurTeam {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
  position: string;
  description: string;
}
export interface IWorkProcess {
  name: string;
  title: string;
  content: string;
  rn: string;
}
export interface IInspiration {
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  backlink: string;
  publishedDate: string;
  cover: string;
  slug: string;
  viewCount: number;
  content: string;
}

export interface IProject {
  name: string;
  cover: string;
  slug: string;
  serviceName: string;
}
export interface IFile {
  id: number;
  filePath: string;
  rn?: number;
}
export interface IProjectDetail {
  name: string;
  cover: string;
  content: string;
  slug: string;
  serviceName: string;
  files: IFile[];
}

export interface IServiceDetail {
  title: string;
  infoCover: string;
  content: string;
  slug: string;
  files: IFile[];
}
export interface IService {
  title: string;
  galleryCover: string;
  slug: string;
}

export interface ISlide {
  title: string;
  cover: string;
}
