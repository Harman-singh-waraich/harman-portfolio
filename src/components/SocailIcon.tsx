export const SocailIcon = ({ platform }: { platform: string }) => {
  const SOCIAL_LINKS: { [key: string]: string } = {
    Github: "https://github.com/Harman-singh-waraich",
    LinkedIn: "https://www.linkedin.com/in/turban-coder/",
    Discord: "https://discord.com/users/705450070161621004",
    Twitter: "https://twitter.com/Harmeet68057757",
    Email: "mailto:waraichharman68@gmail.com",
  };
  return (
    <a
      href={`${SOCIAL_LINKS[platform]}`}
      target="_blank"
      className="cursor-pointer  transition-all duration-500 hover:scale-125"
    >
      <img
        src={`/images/${platform}.svg`}
        className=" w-7 md:w-8 px-1 md:px-0"
      />
    </a>
  );
};
