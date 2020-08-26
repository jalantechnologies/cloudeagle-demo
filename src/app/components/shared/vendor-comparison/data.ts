import { Vendor } from "@components/shared/vendor-comparison/types";

export const BoxVendor: Vendor = {
  name: "Box",
  logo: "box.png",
  score: 6.1,
  maxScore: 10,
  description: "Box is a modern content management",
  fundingHistory: [
    {
      amount: 5000,
      date: new Date(2020, 5, 1),
    },
    {
      amount: 1200,
      date: new Date(2020, 3, 1),
    },
  ],
  pricingUrl: "www.box.com/pricing",
  numFeatures: 5,
  numCaseStudies: 4,
};

export const DropboxVendor: Vendor = {
  name: "Dropbox",
  logo: "dropbox.png",
  score: 6,
  maxScore: 10,
  description: "Dropbox is a cloud based management",
  fundingHistory: [
    {
      amount: 2000,
      date: new Date(2020, 3, 1),
    },
    {
      amount: 1000,
      date: new Date(2020, 1, 1),
    },
  ],
  pricingUrl: "www.dropbox.com/pricing",
  numFeatures: 5,
  numCaseStudies: 4,
};

export const GdriveVendor: Vendor = {
  name: "Google Drive",
  logo: "gdrive.png",
  score: 4.5,
  maxScore: 10,
  description: "Store, sync and share file easily",
  fundingHistory: [
    {
      amount: 2500,
      date: new Date(2020, 4, 1),
    },
    {
      amount: 1500,
      date: new Date(2020, 2, 1),
    },
  ],
  pricingUrl: "www.drive.google.com/pricing",
  numFeatures: 6,
  numCaseStudies: 6,
};

export const SalesforceVendor: Vendor = {
  name: "Salesforce",
  logo: "salesforce.png",
  score: 6.2,
  maxScore: 10,
  description: "Salesforce is a cloud based file storage",
  fundingHistory: [
    {
      amount: 2500,
      date: new Date(2020, 4, 1),
    },
    {
      amount: 1500,
      date: new Date(2020, 2, 1),
    },
  ],
  pricingUrl: "www.salesforce.com/pricing",
  numFeatures: 6,
  numCaseStudies: 1,
};
