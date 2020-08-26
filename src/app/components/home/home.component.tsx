import * as React from "react";
import { PageHeader } from "antd";

import { VendorComparisonTable } from "@components/shared/vendor-comparison/vendor-comparison-table";

export const HomeComponent = (): JSX.Element => {
  return (
    <>
      <PageHeader
        className="home-page-header"
        title="Demo"
        subTitle="This is a demo to show dynamic vendor comparison table"
      />
      <VendorComparisonTable />
    </>
  );
};
