export const defaultColumnProperties = {
    sortable: true,
    editable:true
  };

  export const columns = [
    {
      key: "index",
      name: "ID",
      width:80
    },
    {
      key: "Product",
      name: "Product" 
    },
    {
      key: "quantitySold",
      name: "Quantity Sold",width:130
    },
    {
      key: "unitPrice",
      name: "Price" ,width:80
    },
    {
      key: "unitCost",
      name: "Cost",width:80
    },
    {
      key: "productline",
      name: "Product Line" 
    },
    {
      key: "period",
      name: "Duration(Period)" 
    },
    {
      key: "bunsinessUnit",
      name: "Business Unit" 
    }
    
  ].map(c => ({ ...c, ...defaultColumnProperties }));
  