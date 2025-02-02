
const InterestPage = () => {
    return (
        <div id='interest' className='my-10 mx-16'>
            <p className='font-serif quicksand-font tracking-[5px] uppercase text-sm'>WHat I do?</p>
            <h1 className='font-serif quicksand-font-bold tracking-[5px] uppercase text-xl my-6'>Here are some of my expertise</h1>
            <div className='lg:flex lg:gap-10 '>
                {/* <div className='flex-1'>
                    <p>APP Develpoment</p>
                    <p>I have knowledge of flutter development and have experience in building android and IOS applications.I also have live projects published on Google Play Store</p>
                </div> */}
                <div className='flex-1 shadow-lg shadow-gray-400 p-6'>
                    <p className='quicksand-font-bold text-lg text-center py-3'>Web Development</p>
                    <p className='quicksand-font'>Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js, Prisma, tRPC, ZOD, Redux, Tailwind CSS, UI Libraries (React-Bootstrap, Mantine, MUI, Shadcn UI), Redux Toolkit, Unit Testing.</p>
                </div>
                <div className='flex-1 shadow-lg shadow-gray-400 p-6'>
                    <p className='quicksand-font-bold text-lg text-center py-3'>Expanded Expertise</p>
                    <p className='quicksand-font'>AWS, Docker, GitHub, Frontend System Design, Express.js, Node.js, MongoDB, MERN Stack, SQL, NOSQL, Socket.io, jQuery, Open to Monorepo architecture, Open Source Contribution, Learning Web3</p>
                </div>
            </div>
        </div>
    )
}

export default InterestPage