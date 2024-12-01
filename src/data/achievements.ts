import { AchievementCardProps } from "@/interfaces";

import worldSkillsLogo from "@/public/achievements/worldskills-logo.png";
import nsdcLogo from "@/public/achievements/nsdc-logo.jpg";
import dseuLogo from "@/public/achievements/dseu-logo.png";
import nmitLogo from "@/public/achievements/nmit-logo.png";
import nccLogo from "@/public/achievements/ncc-logo.png";
import gfgLogo from "@/public/achievements/gfg-logo.png";

export const achievements: AchievementCardProps[] = [
  {
    title: "WorldSkills Lyon 2024 (ITSSB)",
    logo: worldSkillsLogo,
    issuer: {
      name: "WorldSkills International",
      href: "https://worldskills.org/",
    },
    eventMode: "On-Site",
    eventType: "Individual",
    monthYear: "Sept 2024",
    credentialUrl:
      "https://www.credly.com/badges/7cbfb994-adec-42ba-88fe-99bd70b93abb/linked_in_profile",
    result: "Ranked 14th",
  },
  {
    title: "IndiaSkills 2023-24 (ITSSB)",
    logo: nsdcLogo,
    issuer: {
      name: "NSDC",
      href: "https://nsdcindia.org/",
    },
    eventMode: "On-Site",
    eventType: "Individual",
    monthYear: "May 2024",
    result: "Gold Medal",
  },
  {
    title: "Code Spardha Arc 3",
    logo: dseuLogo,
    issuer: {
      name: "DSEU",
      href: "https://dseuonline.in/",
    },
    eventMode: "Online",
    eventType: "Individual",
    monthYear: "Nov 2023",
    result: "Ranked 1st",
    credentialUrl:
      "https://drive.google.com/file/d/1p99qVqZwtsa1ZEz-dQ24Rf9__yVCHCLR/view",
  },
  {
    title: "NMIT Hacks 2023",
    logo: nmitLogo,
    issuer: {
      name: "NMIT, Bengaluru",
      href: "https://www.nmit.ac.in/",
    },
    eventMode: "Online",
    eventType: "Team",
    monthYear: "Mar 2023",
    result: "Selected for Final Round",
    credentialUrl:
      "https://certificate.givemycertificate.com/c/5b92814e-f0e6-4564-a553-aaa2290cfe56",
  },
  {
    title: "Code Spardha Arc 2",
    logo: dseuLogo,
    issuer: {
      name: "DSEU",
      href: "https://dseuonline.in/",
    },
    eventMode: "Online",
    eventType: "Individual",
    monthYear: "Feb 2023",
    result: "Ranked 1st",
    credentialUrl:
      "https://drive.google.com/file/d/1W8N8tu4Anxbbku7ukARgPtH6tQiGwEw6/view",
  },
  {
    title: "NCC C Certificate (Army)",
    logo: nccLogo,
    issuer: {
      name: "National Cadet Corps",
      href: "https://indiancc.nic.in/",
    },
    isNotEvent: true,
    monthYear: "Sep 2022",
    result: "Beta Grading",
    credentialUrl:
      "https://drive.google.com/file/d/1GMHZ8Q9_TzKLsnaoy3EWX23ZKOkoHVh9/view",
  },
  {
    title: "JuniorSkills 2021 (ITSSB)",
    logo: nsdcLogo,
    issuer: {
      name: "NSDC",
      href: "https://nsdcindia.org/",
    },
    eventMode: "Online",
    eventType: "Individual",
    monthYear: "Apr 2022",
    result: "Bronze Medal",
  },
  {
    title: "Intra College Smart India Hackathon 2022",
    logo: gfgLogo,
    issuer: {
      name: "GeeksForGeeks",
      href: "https://www.geeksforgeeks.org/",
    },
    eventMode: "On-Site",
    eventType: "Team",
    monthYear: "Mar 2022",
    result: "Ranked 2nd",
  },
];
