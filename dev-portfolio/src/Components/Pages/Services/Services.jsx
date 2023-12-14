import { useState } from 'react';
import BgImage from '../../../assets/BgImage.svg';


const Services = () => {
  const [openInfoData, setOpenInfoData] = useState(null);

  const infoData = [
    {
      _id: 123,
      title: 'What does a junior web developer do?',
      details:
        'A junior web developer works alongside their team to build, maintain, test, and debug websites and applications. They also attend a variety of meetings to both brainstorm new ideas and to ensure that the title fits a clients needs.Senior and junior developers are paired together for mentorship throughout a project. As junior developers gain more experience, they all earn greater autonomy to oversee a project by themselves.',
    },
    {
      _id: 124,
      title: 'What skills should a junior web developer have?',
      details:
        'Junior web developers utilize a variety of skills to succeed at their job. It’s understood that theyre new to an industry where honing muscle memory is key. Some companies focus on sharpening frontend development skills first, as theyre easier to pick up. Others will allow ambitious junior developers to jump into the deep end to display the full range of full-stack development skills early on.',
    },
    {
      _id: 125,
      title: 'Junior developer hard skills',
      details:
        'Hard skills are what get you into the field, and should be learned through the courses that you’ve taken. These non-exhaustive hard skills include, HTML/CSS, JavaScript, Frameworks,Libraries,APIs, Responsive design, Version control/GIT, Testing and debugging,Cross-browser platform',
    },
  ];

    const toggleDetailsData = (_id) => {
      setOpenInfoData((prev) => (prev === _id ? null : _id));
  };
  
  return (
    <div>
      <div className='relative'>
        <img src={BgImage} alt='' className='w-full' />
      </div>
      <div className='absolute top-0 md:w-7/12 px-4 py-2 md:px-12 md:py-6 lg:px-24 lg:py-16'>
        <h3 className='my-8 text-4xl font-black '>Junior Web Developer</h3>
        <div className='md:ml-12 flex flex-col gap-4 mt-10'>
          {infoData?.map((singleInfoData) => {
            const { title, details, _id } = singleInfoData;
            return (
              <div
                key={singleInfoData.details}
                className='bg-violet-400 px-3 py-2 rounded my-2'
              >
                {/* modal button */}
                <button
                  onClick={() => toggleDetailsData(_id)}
                  className={`w-full my-2 px-4 py-2 text-xl font-semibold flex items-center justify-between hover:bg-gray-500 rounded-md ${
                    openInfoData === _id
                      ? 'text-white bg-violet-600 hover:bg-slate-500 duration-300'
                      : 'duration-300'
                  } `}
                >
                  {title}
                  <span>
                    <span className='text-sm transform'>
                      {openInfoData === _id ? <>&darr;</> : <>&uarr;</>}
                    </span>
                  </span>
                </button>
                {openInfoData === _id && (
                  <div className='my-2 px-2 pt-1'>
                    <div className="border-t border-violet-300 "></div>
                    <h5 className='font-sans' >{details}</h5>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-6  px-4 py-2 md:px-12 md:py-6 lg:px-24 lg:py-16'>
        <h2 className='text-3xl font-light mt-8 mb-4'>
          Web Development vs. Web Programming
        </h2>
        <p className='font-thin'>
          Web development and web programming sound very similar — and they are.
          But there&apos;s one very important distinction.
          <br /> <br /> Web development refers to the overall process of
          creating websites or web applications, including the project&apos;s
          design, layout, coding, content creation, and functionality. It
          involves using a combination of programming languages, tools, and
          frameworks to bring a website or web application to life. It may also
          encompass project management activities, such as fielding development
          requests from stakeholders or freelance clients.
          <br /> <br /> Web programming, on the other hand, specifically refers
          to the coding and scripting of a website, whether the front-end or
          back-end. It primarily involves writing code to handle data, process
          user inputs, and generate dynamic content. A web programmer will
          rarely, if ever, handle a web development project from end-to-end.
          They may build a certain section of a site or troubleshoot bugs.{' '}
          <br /> <br /> In general, web development encompasses a broader scope.
          Web developers need to have a holistic understanding of web design,
          usability, accessibility, as well as coding and programming skills.
        </p>
      </div>
    </div>
  );
}

export default Services