export type Blog = {
    readTime: string;
    blogTitle: string;
    autherImage: { data: { attributes: { url: string } } };
    autherName: string;
    blogDescription: string;
    authorDescription: string;
    blogTitleImage: { data: { attributes: { url: string } } };
    authorDetails: { id: string; Name: string; autherPosition: string; authorDescription: string };
    slug: string;
    blogCreatedAt: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    shortDescription: string;
    blogDetail_Image: { data: { attributes: { url: string } } };
    blogs_categories: { data: { attributes: { name: string } }[] };
    FAQ: { answer: string; question: string }[];
    autherPosition: string;
    blogViews: number;
    
    
  };


 export type ImageData = {
    data?: {
        attributes?: {
            url: string;
        };
    };
}

export type BlogAttributes = {
    blogTitle: string;
    blogDescription: string;
    blogCreatedAt: string;
    updatedAt: string;
    blogViews: number;
    autherName: string;
    autherPosition: string;
    blogTitleImage?: ImageData;
    blogDetail_Image?: ImageData;
    autherImage?: ImageData;
}

export type BlogFaqType = {
    faq_details?: { answer: string; question: string; id: string }[];
  };