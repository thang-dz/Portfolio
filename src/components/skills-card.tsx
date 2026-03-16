export interface Skill {
	name: string;
	icon: string;
}

interface SkillsCardProps {
	skills: Skill[];
}

const SkillsCard = ({ skills }: SkillsCardProps) => {
	return (
		<div className="mt-6 rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
			<div className="flex flex-col space-y-1.5 p-6">
				<div className="text-2xl leading-none font-semibold tracking-tight">
					<h3>Skills</h3>
				</div>
				<div className="p-6 pl-0">
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="inline-flex items-center gap-2 rounded-full bg-neutral-200/70 px-3 py-1 text-xs font-medium text-neutral-700 transition hover:bg-neutral-300/70"
							>
								<img
									src={skill.icon}
									alt={`${skill.name} icon`}
									className="size-4"
								/>
								<h4>{skill.name}</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsCard;
