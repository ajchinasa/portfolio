import heroImg from "../../../assets/images/heroimg.jpeg";

const Hero = () => {
  return (
    <section
      className="
        flex flex-col-reverse
        lg:flex-row
        items-center
        lg:items-end
        gap-8
        w-full
      "
    >
      {/* Text */}
      <div
        className="
          w-full
          md:max-w-[65%]
          space-y-4
          bg-[#2a221c]
          rounded-[28px] sm:rounded-[50px]
          p-4 sm:p-6
          text-center md:text-left
        "
      >
        <h4 className="text-[#ff6f00] font-semibold text-xl sm:text-2xl">
          About me
        </h4>
        <p className="text-[#f5f1ec] text-sm sm:text-base leading-relaxed">
          Tech-savvy Customer Experience professional with expertise in frontend
          development, product operations, and user-focused strategy. Skilled at
          bridging technology, customer insights, and product innovation to
          enhance satisfaction and drive growth. Experienced in collaborating
          across teams to design and deliver seamless digital experiences, lead
          engagement initiatives, manage projects, and develop intuitive web
          solutions aligned with business and user needs.
        </p>
      </div>

      {/* Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="
          w-32 h-32
          sm:w-40 sm:h-40
          md:w-44 md:h-44
          object-cover
          rounded-full
          flex-shrink-0
        "
      />
    </section>
  );
};

export default Hero;
