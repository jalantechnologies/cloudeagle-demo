import * as React from "react";
import { Vendor } from "@components/shared/vendor-comparison/types";

import "@components/shared/vendor-comparison/styles.css";

export const VendorHeaderTitle = ({
  vendor,
}: {
  vendor: Vendor;
}): JSX.Element => {
  return (
    <>
      <div className="vendor-title">{vendor.name}</div>
    </>
  );
};
