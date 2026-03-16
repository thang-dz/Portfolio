import vectorIcon from "@/assets/icons/vector.svg";
import Button from "./button";

export interface SocialLink {
	name: string;
	href: string;
	icon: string;
	label: string;
}

interface ProfileCardProps {
	socials: SocialLink[];
}

const ProfileCard = ({ socials }: ProfileCardProps) => {
	return (
		<div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
			<div className="p-6 pt-6">
				<div className="flex flex-col items-start gap-2">
					<div className="flex w-full flex-row items-center gap-4 sm:items-start md:flex-col">
						<img
							src="/user.webp"
							alt="avatar"
							className="aspect-square size-12 rounded-full border-2 border-gray-200 object-cover sm:size-70"
						/>
						<div className="flex flex-col items-start justify-center">
							<div className="flex items-center md:mt-4">
								<h1 className="text-xl font-bold md:text-2xl">Vu Manh Thang</h1>
								<div>
									<img src={vectorIcon} alt="tick" />
								</div>
							</div>
							<h2 className="text-sm text-neutral-500 md:text-base">
								Intern Fullstack
							</h2>
						</div>
					</div>
					<p className="mt-2 text-start text-sm text-neutral-500 italic">
						"My passion is sleeping soundly"
					</p>
					<a
						target="_blank"
						className="mt-4 w-full font-semibold"
						href="https://calendly.com/vumanhthang711/30min"
						rel="noopener noreferrer"
					>
						<Button>
							<div className="font-semibold">CONTACT ME</div>
						</Button>
					</a>
					<div className="mt-4 flex w-full flex-col space-y-2 border-t border-neutral-500 pt-4">
						{socials.map((social) => (
							<a
								key={social.name}
								target="_blank"
								href={social.href}
								rel="noopener noreferrer"
								className="group flex cursor-pointer items-center gap-2"
							>
								<img
									className="size-4"
									src={social.icon}
									alt={`${social.name} icon`}
								/>
								<p className="text-sm text-neutral-500 transition-colors duration-200 ease-linear group-hover:text-black">
									{social.label}
								</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
