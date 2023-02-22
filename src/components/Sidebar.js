import Link from "./Link";

function Sidebar() {
    console.log("Inside Side bar")
  const links = [
    {
      label: "Dropdown",
      path: "/dropdown",
    },
    { label: "Accordian", path: "/accordion" },
    { label: "Buttons", path: "/button" },
    { label: "Modal", path: "/modal" },
    {label:'Table' , path:'/table'}
  ];

  return (
    <div className="flex flex-col gap-5 ml-10 mr-10  border border-red-300 w-24 p-2">

        <h1>Sidebar</h1>
      {links.map((link) => {
        return <Link to={link.path} key={link.label}>{link.label}</Link>;
      })}
    </div>
  );
}

export default Sidebar;
