import BgImage from '../../../assets/BgImage.svg';

const Services = () => {

  const infoData = [
    {
      _id: 123,
      title: 'What does a junior web developer do?',
      details:
        'A junior web developer works alongside their team to build, maintain, test, and debug websites and applications. They also attend a variety of meetings to both brainstorm new ideas and to ensure that the content fits a clients needs.Senior and junior developers are paired together for mentorship throughout a project. As junior developers gain more experience, they all earn greater autonomy to oversee a project by themselves.',
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
        'Hard skills are what get you into the field, and should be learned through the courses that you’ve taken. These non-exhaustive hard skills include, HTML/CSS,JavaScript,Frameworks,Libraries,APIs,Responsive design,Version control/GIT,Testing and debugging,Cross-browser platform',
    },
  ];
  return (
    <div>
      <div className='relative' >
        <img src={BgImage} alt="" className='w-full' />
      </div>
      <div className='absolute top-0 md:w-6/12 px-4 py-2 md:px-12 md:py-6 lg:px-24 lg:py-16'>
        <h3>Junior Web Developer</h3>
        <div className='flex flex-col gap-4 mt-10'>
          {infoData.map((info) => (
            <li key={info._id}>{info.details}</li>
          ))}
        </div>
      </div>
      <div className='my-6' >
        dsfa
      </div>
    </div>
  );
}

export default Services