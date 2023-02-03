import Base from "@layouts/Baseof";
import Image from "next/image";

export default function ContactUs() {
  return (
    <Base>
      <section>
        <div className="mx-auto mt-20 hidden w-2/3 items-center rounded bg-white shadow-md md:block">
          <div className="mt-16 flex">
            <div className="bg-red w-5/6">
              <div className="w-full  bg-slate-100">
                <div className="p-20">
                  <Image
                    // className="w-full px-4 py-4"
                    // style={{ height: `70vh` }}
                    placeholder="blur"
                    className="rounded-lg border border-t-4"
                    blurDataURL="/images/surenderv.png"
                    width="300"
                    objectFit="contain"
                    height="400"
                    priority
                    style={{ height: "70% !important", width: "100%" }}
                    alt="somethig went wrong"
                    src="/images/surenderv.png"
                  />
                </div>
              </div>
            </div>
            <div className="z-50 my-5 mt-20 w-5/6 -translate-x-14 space-y-4 bg-transparent text-left font-extralight">
              <h4>About CreativexBox, Inc</h4>
              <p>
                My name is surenderv, I am a designer and interface developer
                based in Chennai, India ⛰️👋
              </p>
              <p>
                As a UX/UI designer, I bring a combination of technical
                expertise and creative vision to every project I take on. With a
                passion for creating intuitive and user-centered digital
                experiences, I have a proven track record of delivering
                high-quality designs that meet the needs of both users and
                business stakeholders.
              </p>
              <p>
                My approach to design starts with understanding the target
                audience and their goals, and then using that knowledge to
                inform every aspect of the design process. Whether it's
                conducting user research, creating wireframes and prototypes, or
                iterating on designs based on user feedback, I am always focused
                on creating a seamless and enjoyable user experience.
              </p>
              <p>
                In addition to my design skills, I have a strong technical
                background, with experience in a variety of design tools and
                programming languages. Whether it's working with Sketch, Figma,
                or Adobe Creative Suite, or coding HTML, CSS, and JavaScript, I
                have the skills and knowledge to bring my designs to life.
              </p>
              <p>
                If you're looking for a UX/UI designer who brings both a
                creative eye and a commitment to creating user-centered designs,
                I would be honored to be a part of your team. Let's work
                together to create digital experiences that engage, inspire, and
                deliver results.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto  items-center rounded bg-white p-10 shadow-md md:hidden">
          <div className="mt-4 flex flex-col">
            <div className="bg-red w-full">
              <div className="w-full  bg-slate-100">
                <div className="p-20">
                  <Image
                    // className="w-full px-4 py-4"
                    // style={{ height: `70vh` }}
                    placeholder="blur"
                    className="rounded-lg border border-t-4"
                    blurDataURL="/images/surenderv.png"
                    width="300"
                    objectFit="contain"
                    height="400"
                    priority
                    style={{ height: "70% !important", width: "100%" }}
                    alt="somethig went wrong"
                    src="/images/surenderv.png"
                  />
                </div>
              </div>
            </div>
            <div className="z-50 my-5 mt-20 w-full space-y-4 bg-transparent text-center font-extralight">
              <h4>About CreativexBox, Inc</h4>
              <p>
                My name is surenderv, I am a designer and interface developer
                based in Chennai, India ⛰️👋
              </p>
              <p>
                As a UX/UI designer, I bring a combination of technical
                expertise and creative vision to every project I take on. With a
                passion for creating intuitive and user-centered digital
                experiences, I have a proven track record of delivering
                high-quality designs that meet the needs of both users and
                business stakeholders.
              </p>
              <p>
                My approach to design starts with understanding the target
                audience and their goals, and then using that knowledge to
                inform every aspect of the design process. Whether it's
                conducting user research, creating wireframes and prototypes, or
                iterating on designs based on user feedback, I am always focused
                on creating a seamless and enjoyable user experience.
              </p>
              <p>
                In addition to my design skills, I have a strong technical
                background, with experience in a variety of design tools and
                programming languages. Whether it's working with Sketch, Figma,
                or Adobe Creative Suite, or coding HTML, CSS, and JavaScript, I
                have the skills and knowledge to bring my designs to life.
              </p>
              <p>
                If you're looking for a UX/UI designer who brings both a
                creative eye and a commitment to creating user-centered designs,
                I would be honored to be a part of your team. Let's work
                together to create digital experiences that engage, inspire, and
                deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}
