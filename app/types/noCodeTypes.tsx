export type RatingChart = {
  comment: string;
  rating: number;
    };
  
 export type UseCase = {
    name: string;
  }
  
  export type NoCodeTool = {
    toolName: string;
    shortDescription: string;
    info: string;
    useCases?: string | UseCase[];
    tool_overall_rating: number;
    tool_overall_rating_description: string;
    ease_of_use: number | string;
    tool_url: string;
    logo?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
    toolImages?: {
      data?: Array<{
        attributes?: {
          url: string;
        };
      }>;
    };
    ratingChart?: RatingChart[];
    no_code_tool_categories?: {
      data?: Array<{
        id: string;
        attributes?: {
          name: string;
        };
      }>;
    };
    similar_tools?: {
      data?: Array<{
        attributes?: {
          toolName: string;
          shortDescription: string;
          slug: string;
          logo?: {
            data?: {
              attributes?: {
                url: string;
              };
            };
          };
        };
      }>;
    };
  }

export type LoaderData = {
  tool: NoCodeTool;
};
