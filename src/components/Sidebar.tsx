import ProfileCard, { type SocialLink } from "@/components/ProfileCard";
import SkillsCard, { type Skill } from "@/components/SkillsCard";

interface SidebarProps {
  socials: SocialLink[];
  skills: Skill[];
}

const Sidebar = ({ socials, skills }: SidebarProps) => {
  return (
    <div className="sm:sticky sm:top-6">
      <aside className="sm:col-span-1">
        <ProfileCard socials={socials} />
        <SkillsCard skills={skills} />
      </aside>
    </div>
  );
};

export default Sidebar;
