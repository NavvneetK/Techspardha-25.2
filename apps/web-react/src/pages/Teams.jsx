import React from 'react';
import TeamCard from '../components/Teams/TeamCard';
import '../components/Teams/TeamCard.css'; 
import Shuffle from '../components/Teams/Shuffle'; 

const teamsData = {
  "Technobyte": [
    {
      name: 'Tushar',
      role: 'Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=T',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Anupma',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=A',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Tanisha',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=T',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
     {
      name: 'Ritwik',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=R',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Rahul',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=R',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
  ],
  "Startup Cell": [
    {
      name: 'Kartikey Tewatia',
      role: 'Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=K',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Atul Keshari',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=A',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Sunny Jaiswal',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=S',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
      {
      name: 'Harsh Chauhan',
      role: 'Co-Convener',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=H',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
  ],
  "Microbus": [
    {
      name: 'Alex Johnson',
      role: 'Lead Engineer',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=A',
      socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Brenda Smith',
      role: 'UX Designer',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=B',
       socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
     {
      name: 'Charlie Brown',
      role: 'Project Manager',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=C',
       socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
  ],
  "MECHSOC": [
      {
      name: 'Diana Prince',
      role: 'Mechanical Lead',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=D',
       socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
    {
      name: 'Ethan Hunt',
      role: 'Fabrication Head',
      imageUrl: 'https://placehold.co/200x200/4B5563/FFFFFF?text=E',
       socialLinks: {
        linkedin: '#',
        instagram: '#',
        github: '#',
      },
    },
  ],
};


const TeamPage =() => {
  return (
    <div className="bg-[#15130F] min-h-screen w-full text-white font-sans flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="mb-20 mx-auto relative">
          <h1 className="text-orange-500 mx-auto font-rationale font-extrabold text-4xl sm:text-5xl lg:text-6xl font-black text-[#ff6600] uppercase tracking-[4px] mb-5 [text-shadow:0_0_20px_rgba(255,102,0,0.5)]">
            <div className="mx-auto w-max">
          <Shuffle
            text="TECHSPARDHA TEAMS"
            shuffleDirection="right"
          />
        </div>
          </h1>
          <div className="header-underline mx-auto"></div>
        </div>
        {Object.entries(teamsData).map(([teamName, members]) => (
          <div key={teamName} className="team-section mb-20">
            <div className="text-left mb-10 relative">
              <h2 className="SubTeamHeading font-rationale font-extrabold text-2xl sm:text-3xl text-orange-500 uppercase tracking-wider [text-shadow:0_0_15px_rgba(255,102,0,0.4)]">
                <Shuffle text={teamName} />
              </h2>
              <div className="header-underline mt-2 h-1 w-90 bg-orange-500 rounded"></div>
            </div>
            <div 
              className="flex justify-start gap-4 md:gap-6"
            >
              {members.map((member, index) => (
                <TeamCard key={`${teamName}-${index}`} {...member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default TeamPage;