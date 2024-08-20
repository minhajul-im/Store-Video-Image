type Cld = { children: string };

const Heading = ({ children }: Cld) => {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-fontBold text-wrap tracking-wide pb-2 mx-4">
      {children}
    </h1>
  );
};

const Navbar = () => {
  return (
    <nav className="container text-center p-4">
      <Heading>Store your videos and images, get URL!</Heading>
      <Heading>You can share anywhere!</Heading>
    </nav>
  );
};

export default Navbar;
