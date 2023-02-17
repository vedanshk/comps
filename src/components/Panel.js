import classNames from "classnames";
function Panel({ children, ...rest }) {
  const classes = classNames(
    "border rounded p-3 shadow bg-white w-full" , rest.className
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
}

export default Panel;
