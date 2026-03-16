export interface WorkExperienceItem {
	id: number;
	role: string;
	company: string;
	period: string;
	summary: string;
	logo: string;
	logoAlt: string;
	calendarIcon: string;
	gallery: Array<{
		src: string;
		alt: string;
	}>;
}

interface WorkExperienceSectionProps {
	items: WorkExperienceItem[];
}

const WorkExperienceSection = ({ items }: WorkExperienceSectionProps) => {
	return (
		<>
			<h3 className="mb-4 text-xl font-bold">Work Experience</h3>
			<div className="mb-6 rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
				<div className="p-6 pt-6">
					<ul className="space-y-8">
						{items.map((item) => (
							<li
								key={item.id}
								className="border-b pb-8 last:border-b-0 last:pb-0"
							>
								<div className="flex items-center space-x-4">
									<div className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 shadow-md">
										<img src={item.logo} alt={item.logoAlt} />
									</div>
									<div>
										<h4 className="font-semibold">{item.role}</h4>
										<h4 className="border-neutral-500 text-sm">
											{item.company}
										</h4>
									</div>
								</div>
								<p className="mt-2 flex items-center text-xs text-neutral-500">
									<img
										src={item.calendarIcon}
										alt="calendar"
										className="mr-1 size-3"
									/>
									{item.period}
								</p>
								<p className="mt-2 text-sm">{item.summary}</p>
								<div className="mt-4 flex w-full space-x-2 overflow-x-auto pb-2">
									{item.gallery.map((image) => (
										<img
											key={image.src}
											src={image.src}
											alt={image.alt}
											className="size-30 rounded-lg"
										/>
									))}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default WorkExperienceSection;
