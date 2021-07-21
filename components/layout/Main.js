import Breadcrumb from "./Breadcrumb";

export default function Main({ children }) {
  return (
    <main className="gds-app-layout__main">
      <Breadcrumb />
      {children}
    </main>
  );
}
