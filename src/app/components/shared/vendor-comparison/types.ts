export interface Funding {
  amount: number;
  date: Date;
}

export interface Vendor {
  name: string;
  logo: string;
  score: number;
  maxScore: number;
  description: string;
  fundingHistory: Funding[];
  pricingUrl: string;
  numFeatures: number;
  numCaseStudies: number;
}
