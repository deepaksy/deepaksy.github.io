import { FaGithub, FaLinkedin, FaMedium, FaTwitter,FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";

const profileData = {
  name: "Deepak suryawanshi",
  avatar: "./profile.webp",
  backgroundImage: "./img.webp",
  about:
    "A Tech enthusiast and a computer science undergraduate. I love to explore things and listening to music. Looking forward to work with passionate developers",

  meta: {
    title: "Deepak's Portfolio",
    url: "https://suvansh-rana.github.io",
    tags: [
      "developer",
      "portfolio",
      "profile",
      "web-developer",
      "python",
      "react.js",
      "django",
      "python",
      "firebase",
      "flutter",
      "engineer",
    ],
  },

  links: [
    {
      icon: <FaGithub size="28px" />,
      link: "https://github.com/deepaksy",
    },
    {
      icon: <FaLinkedin size="28px" />,
      link: "https://www.linkedin.com/in/deepak-suryawanshi-740546198/",
    },
    {
      icon: <FaTwitter size="28px" />,
      link: "https://twitter.com/@blazing_deepak",
    },
    {
      icon: <FaFacebook size="28px" />,
      link: "https://github.com/deepaksy",
    },
    {
      icon: <FaInstagram size="28px"/>,
      link: "https://www.instagram.com/_deepak28/",
    },
    {
      icon: <FaYoutube size="28px"/>,
      link: "https://www.youtube.com/channel/UClbT0IelMmmczzU7ozkNNcQ",
    }
  ],
};

export default profileData;
