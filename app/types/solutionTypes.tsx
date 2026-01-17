export interface SolutionsResponse {
    data: {
        solution: {
            data: {
                attributes: {
                    mainTitle: string;
                    shortDescription: string;
                    slug: string;
                };
            }[];
        };
    };
}

export interface SolutionsDetail {
    data: {
        solution: {
            data: {
                attributes: {
                    mainTitle: string;
                    shortDescription: string;
                    slug: string;
                };
            }[];
            bannerImage: {
                data: {
                    attributes: {
                        url: string;
                    };
                };
            };
            featuresTitle: string;
            allFeatures: {
                title: string;
                shortDescription: string;
            }[]
        };
    };
}