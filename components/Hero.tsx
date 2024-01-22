const Hero = (props: { icon: any; text: String }) => {
  return (
    <div>
      <div>{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
};

export default Hero;
