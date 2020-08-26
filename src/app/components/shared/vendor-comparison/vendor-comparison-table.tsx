import * as React from "react";
import * as _ from "lodash";
import { Table } from "antd";

import { VendorHeaderTitle } from "@components/shared/vendor-comparison/vendor-header-title";
import { Vendor } from "@components/shared/vendor-comparison/types";
import {
  BoxVendor,
  DropboxVendor,
  GdriveVendor,
  SalesforceVendor,
} from "@components/shared/vendor-comparison/data";

const allVendors = [BoxVendor, DropboxVendor, GdriveVendor, SalesforceVendor];

export const VendorComparisonTable = (): JSX.Element => {
  const [vendors, setVendors] = React.useState([] as Vendor[]);
  const [columns, setColumns] = React.useState([] as any[]);
  const [rows, setRows] = React.useState([] as any[]);

  const setRowsFromVendors = (vendorList: Vendor[]): void => {
    const row = {} as any;
    _.each(vendorList, (vendor: Vendor): void => {
      row[vendor.name] = vendor;
    });
    setRows([row]);
  };

  const setColumnsFromVendors = (vendorList: Vendor[]): void => {
    const newColumns = [] as any[];
    _.each(vendorList, (vendor: Vendor): void => {
      newColumns.push({
        title: <VendorHeaderTitle vendor={vendor} />,
        dataIndex: vendor.name,
        key: vendor.name,
      });
    });
    setColumns(newColumns);
  };

  React.useEffect((): void => {
    setVendors(allVendors);
    setRowsFromVendors(allVendors);
    setColumnsFromVendors(allVendors);
  }, []);

  return (
    <Table bordered pagination={false} columns={columns} dataSource={rows} />
  );
};
