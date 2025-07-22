import BlurText from "../../components/ui/blurtext/blurtext";
import TrueFocus from "../../components/ui/truefocus/truefocus";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Welcome() {
  return (
      <div className="relative w-full h-screen">

        <div className="absolute inset-0 z-1 flex flex-col items-center justify-center text-white text-center">
              <BlurText
              text="Welcome to My Portfolio Website"
              delay={30}
              animateBy="letters"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-base mb-3"
              />
              <BlurText
              text="Gandhi Satria Mukti"
              delay={50}
              animateBy="letters"
              direction="bottom"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl md:text-6xl font-bold mb-10"
              />
              <TrueFocus
                sentence="Full-Stack Programmer | Graphic Designer"
                borderColor="#6b21a8"
                glowColor="rgba(0, 0, 255, 0.6)"
                blurAmount={2}
              />
        </div>
      </div>
  );
}

export default Welcome;
