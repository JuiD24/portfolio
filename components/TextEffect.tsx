import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Developer',
        1000,
        'Java Developer',
        1000,
        'BackEnd Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;