function Table({ data, config , keyFn}) {
  const renderedHeaders = config.map((column) => {
    if(column.header){
        return column.header(column.label);
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((dataItem) => {
    const renderedCell = config.map((column) => {
      return <td className="p-2" key={column.label}>{column.render(dataItem)}</td>;
    });
    return <tr key={keyFn(dataItem)} className="border-b">{renderedCell}</tr>;
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
