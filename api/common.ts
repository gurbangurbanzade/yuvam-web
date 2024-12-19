import { api } from "@/api.config";

export const getCommon = async (code?: string) => {
  try {
    const res = await api.get(`common-page/code/${code}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Faq

export const getFaq = async () => {
  try {
    const res = await api.get(`faq`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Contact

export const getContactUs = async () => {
  try {
    const res = await api.get(`contact-us`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Redirect

export const getRedirectUrls = async () => {
  try {
    const res = await api.get(`redirect`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Team

export const getOurTeam = async () => {
  try {
    const res = await api.get(`team-member`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Work Process

export const getWorkProcess = async () => {
  try {
    const res = await api.get(`work-process`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Inspiration

export const getInspiration = async (searchParams?: any, size?: number) => {
  const params = new URLSearchParams();
  params.set("size", `${size}`);
  if (searchParams?.page) {
    params.set("page", searchParams.page);
  }
  try {
    const res = await api.get(
      `inspiration?size=${size || 12}&page=${searchParams?.page || 1}`
    );
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getInspirationBySlug = async (slug: string) => {
  try {
    const res = await api.get(`inspiration/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestInspiration = async (slug:string) => {
  try {
    const res = await api.get(`inspiration/latest/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestInspirationHome = async () => {
  try {
    const res = await api.get(`inspiration/latest/home`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Project

export const getProjects = async (searchParams?: any) => {
  const params = new URLSearchParams();
  if (searchParams?.size) {
    params.set("size", searchParams.size);
  }
  if (searchParams?.page) {
    params.set("page", searchParams.page);
  }
  if (searchParams?.slug) {
    params.set("slug", searchParams.slug);
  }
  try {
    const res = await api.get(`project?${params}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    const res = await api.get(`project/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getProjectSimilarBySlug = async (slug: string) => {
  try {
    const res = await api.get(`project/similar/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Service

export const getServices = async () => {
  try {
    const res = await api.get(`service`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getServiceBySlug = async (slug: string) => {
  try {
    const res = await api.get(`service/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestServices = async () => {
  try {
    const res = await api.get(`service/latest`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Slide

export const getSlide = async () => {
  try {
    const res = await api.get(`slide`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// consultation

export const getTimes = async (
  consultationDate: string,
  workStyleId: number
) => {
  try {
    const res = await api.get(
      `consultation-request/get-times/${consultationDate}/${workStyleId}`
    );
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Meta info

export const getMetaInfo = async (code: string) => {
  try {
    const res = await api.get(`meta/${code}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};


