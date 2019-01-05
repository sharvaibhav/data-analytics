export const defaultColumnProperties = {
    sortable: true,
    width: 120,
    editable:true
  };

  export const columns = [
    {
      key: "index",
      name: "ID"
    },
    {
      key: "quantitySold",
      name: "Quantity Sold", editable: true 
    },
    {
      key: "unitPrice",
      name: "Price", editable: true 
    },
    {
      key: "unitCost",
      name: "Cost", editable: true 
    },
    {
      key: "productline",
      name: "Product Line", editable: true 
    },
    {
      key: "period",
      name: "Duration(Period)", editable: true 
    },
    {
      key: "bunsinessUnit",
      name: "Business Unit", editable: true 
    },
    {
      key: "Product",
      name: "Product", editable: true 
    }
  ].map(c => ({ ...c, ...defaultColumnProperties }));
  