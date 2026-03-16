export default function Petal({ className }: { className?: string }) {
	return (
		<div
			className={`size-3 rounded-[40%_70%/7%_90%] border border-cyan-300 bg-linear-to-b from-cyan-500 to-cyan-200 transition-all duration-500 group-hover:size-3 group-hover:from-blue-600 group-hover:to-blue-300 ${className} `}
		/>
	);
}
