
import React from 'react';
import type { TeamMember } from '../types';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-light shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="absolute top-0 left-0 w-full h-2/5 bg-secondary transform -skew-y-6 origin-top-left z-0 transition-all duration-300 group-hover:bg-accent"></div>
      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <img 
            className="h-32 w-32 rounded-full object-cover ring-4 ring-light shadow-xl transition-all duration-300 group-hover:ring-accent" 
            src={member.photo} 
            alt={member.name} 
          />
        </div>
        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
        <p className="text-accent font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{member.role}</p>
        <p className="text-muted text-sm mb-6 px-4">{member.bio}</p>

        <div className="w-full border-t border-slate-200 pt-4">
          <div className="flex flex-col space-y-3 text-sm text-muted">
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center justify-center hover:text-accent transition-colors">
                <MailIcon className="h-5 w-5 mr-2" />
                <span>{member.email}</span>
              </a>
            )}
            {member.phone && (
              <a href={`tel:${member.phone}`} className="flex items-center justify-center hover:text-accent transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-4 flex space-x-4">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <LinkedInIcon className="h-6 w-6" />
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;