export type THEME = { theme: boolean };

const Sun = ({ theme }: THEME) => {
  return (
    <svg
      className={theme ? "#ffffff" : "#22262a"}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="24px"
      width="24px"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143 65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zm-368 0h92v44H26zm312.029 135.14 31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"></path>
    </svg>
  );
};

export default Sun;
