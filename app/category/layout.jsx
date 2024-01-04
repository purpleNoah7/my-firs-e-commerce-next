import SideBar from "../components/SideBar";

export default function CategoryLayout({ children }) {
  return (
    <>
      <div className="flex flex-row w-11/12">
        <SideBar />
        <div className="flex flex-row">{children}</div>
      </div>
    </>
  );
}
