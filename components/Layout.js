function Layout(props) {
  return (
    <div
      style={{ gridTemplateColumns: "68fr 32fr" }}
      className="max-w-4xl mx-auto grid gap-5 m-4 bg-white rounded-md overflow-hidden"
    >
      {props.children}
    </div>
  );
}

export default Layout;
