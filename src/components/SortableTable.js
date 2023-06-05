import useSort from '../hooks/useSort'
import Table from "./Table";



function SortableTable(props) {
  const {config , data} =  props;
  const{sortOrder , sortBy , sortedData , setSortColumn } =  useSort(data , config);


  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th onClick={() => setSortColumn(column.label)}>{column.label}</th>
        ),
      };
    }

    return column;
  });




  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
