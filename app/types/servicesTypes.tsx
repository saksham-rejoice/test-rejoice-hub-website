

export type Service = {
    service_name: string;
    slug: string;
    service_hero_banner?: {
      description?: string;
      title?: string;
      banner_image?: {
        data?: { attributes?: { url: string } };
      };
    };
    service_image?: {
      data?: { attributes?: { url: string } };
    };
    sr_no?: number;
  }
  
export type ServiceResponse = {
    data: {
      service: {
        data: { attributes: Service }[];
      };
    };
  };