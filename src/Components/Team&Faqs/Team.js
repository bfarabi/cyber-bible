import React from "react";
import './Team.css';
import TeamLogo from "../../Assets/Asset 58n.png";
import Single from "../../Assets/Asset 61.png";
import FaqLogo from "../../Assets/Asset 64n.png";

const Team = () => {
  const FaqData = [
    {
      ask: "What is CyberBibles NFT?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
      id: "headingOne",
      dataTarget: "#collapseOne",
      ariaExpanded: "true",
      ariaControls: "collapseOne",
      class:"!visible hidden"
    },
    {
      ask: "How much are CyberBibles?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
        id: "headingTwo",
        dataTarget: "#collapseTwo",
        ariaExpanded: "false",
        ariaControls: "collapseTwo",
        class:"!visible hidden",
    },
    {
      ask: "How do I participate in the Presale?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
        id: "headingThree",
        dataTarget: "#collapseThree",
        ariaExpanded: "false",
        ariaControls: "collapseThree",
        class:"!visible hidden",
    },
    {
      ask: "How do I join the whitelist?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
        id: "headingFour",
        dataTarget: "#collapseFour",
        ariaExpanded: "false",
        ariaControls: "collapseFour",
        class:"!visible hidden",
    },
    {
      ask: "How many NFTs can I mint?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
        id: "headingFive",
        dataTarget: "#collapseFive",
        ariaExpanded: "false",
        ariaControls: "collapseFive",
        class:"!visible hidden",
    },
    {
      ask: "How will the funds be used?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, hic?",
        id: "headingSix",
        dataTarget: "#collapseSix",
        ariaExpanded: "false",
        ariaControls: "collapseSix",
        class:"!visible hidden",
    },
  ];

  return (
    <div className="container team-container relative">
      <img className="mx-auto" src={TeamLogo} alt="" />
      <div className="team-group flex justify-center mb-20">
        <div className="single-box">
          <img className="" src={Single} alt="" />
          <p className="text-xl"> Dominic | Kingdom Crypto</p>
          <p className="text-lg">Founder</p>
          
        </div>
        <div className="single-box">
          <img className="" src={Single} alt="" />
          <p className="text-xl">  Daniel Song</p>
          <p className="text-lg">Lead Developer</p>

        </div>
        <div className="single-box">
          <img className="" src={Single} alt="" />
          <p className="text-xl"> Chris Valcarcel</p>
          <p className="text-lg">Head of Media</p>
          

        </div>
      </div>

      <div className="faq-area relative">
        <img className="mx-auto pl-60" src={FaqLogo} alt="" />
        {/* accordion part */}

        {
          FaqData.map((faq) => {
            return (
              <>
                <div id="accordionExample" className="w-5/12 ml-auto mr-16 faq-part">
                  <div class=" border border-neutral-200 my-2.5 dark:border-neutral-600 dark:bg-neutral-800 text-white">
                    <h2 style={{fontFamily:'HallFetica'}} class="mb-0" id={faq.id}>
                      <button
                        class="group relative flex w-full items-center border-0 py-4 px-5 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-cyan-400 [&:not([data-te-collapse-collapsed])]:text-black [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target={faq.dataTarget}
                        aria-expanded={faq.ariaExpanded}
                        aria-controls={faq.ariaControls}
                      >
                        <p style={{fontFamily:'HallFetica'}}> {faq.ask}</p>
                        <span class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id={faq.ariaControls}
                      class={faq.class}
                      data-te-collapse-item
                      data-te-collapse-show
                      aria-labelledby={faq.id}
                      data-te-parent="#accordionExample"
                    >
                      <div class="py-4 px-5">
                        <p style={{fontFamily:'HallFetica'}}>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })

          
        }
        
        {/* accordion part end */}
      </div>
    </div>
  );
};

export default Team;
