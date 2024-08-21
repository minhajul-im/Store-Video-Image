type Cld = { children: string };

const Heading = ({ children }: Cld) => {
  return (
    <h2 className="bg-gradient-to-r from-fuchsia-500 to-cyan-600 text-transparent bg-clip-text text-lg font-fontMed py-3">
      {children}
    </h2>
  );
};

export default Heading;
