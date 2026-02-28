import { TypeAnimation } from "react-type-animation";

interface AboutSectionProps {
  text: string;
}

const AboutSection = ({ text }: AboutSectionProps) => {
  return (
    <div className="mb-6 rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="text-2xl leading-none font-semibold tracking-tight">
          <h3>About Me</h3>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="text-neutral-500">
          <div className="relative font-mono whitespace-pre-line">
            <div className="invisible">{text}</div>
            <div className="absolute inset-0 h-full w-full">
              <TypeAnimation
                sequence={[text]}
                speed={80}
                wrapper="span"
                cursor={true}
                repeat={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
