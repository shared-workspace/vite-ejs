/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const FlexSideNavAndPage = styled(tw.div`flex`)``;
const SideNavWrapper = styled(
  tw.div`w-full max-w-0 sm:max-w-10 xl:max-w-[13rem] h-screen transition-[max-width] duration-200 flex flex-col`
)``;
const PageWrapper = styled(tw.div`flex-grow`)``;
const HeaderWraper = styled(
  tw.div`h-full max-h-72 md:max-h-[30rem] relative bg-cover bg-center bg-no-repeat`
)`
  background-image: url("/home_banner.jpg");
`;
const NewPostWrapper = styled(
  tw.div`absolute w-full h-full bg-blue-300/80 md:bg-blue-300/90 md:max-w-[16rem] md:right-0`
)``;
export default function HomePage() {
  return (
    <>
      <SideNavWrapper className="bg-white fixed top-0 left-0 z-40">
        <LogoWrapper>
          <Image
            src="/logo.jpg"
            alt="Placeholder"
            className="hidden xl:flex"
            width={150}
            height={100}
          />
        </LogoWrapper>
        <SideNavMenu />
      </SideNavWrapper>
      <FlexSideNavAndPage>
        <SideNav />
        <PageWrapper>
          <HeaderWraper className="bg-green-200">
            <NewPostWrapper className="flex items-center justify-center px-2 md:flex-col">
              <div className="bg-red-400 w-40 md:w-52">
                <Image
                  src="/new_post.jpg"
                  alt="Placeholder"
                  width={300}
                  height={400}
                />
              </div>
              <div className="text-sm text-center px-2 w-44 md:w-auto md:py-2 text-zinc-900 font-semibold">
                <h1 className="">
                  Main Heading of the Article Main Heading of the Article
                </h1>
                <div className="py-1">
                  <button className="px-2 py-1 rounded-md border border-gray-800">
                    Read
                  </button>
                </div>
              </div>
            </NewPostWrapper>
          </HeaderWraper>
          <PopularPost />
        </PageWrapper>
      </FlexSideNavAndPage>
    </>
  );
}
const LogoWrapper = styled(
  tw.div`w-full h-full max-h-[13rem] flex justify-center items-center `
)``;
function SideNav() {
  return <SideNavWrapper className="bg-white " />;
}

const SideNavMenuWrapper = styled(tw.div`bg-black flex flex-col flex-grow`)``;
const SideNavMenuButton = styled(tw.button`flex h-24 w-full`)``;
const SideNavMenuIcon = styled(
  tw.div`w-10 h-full flex justify-center items-center overflow-y-hidden border-b border-gray-800`
)``;
const SideNavMenuLabel = styled(
  tw.div`hidden flex-grow h-full xl:flex justify-start items-center text-2xl pl-8 tracking-wide border-b border-gray-500`
)``;
function SideNavMenu() {
  return (
    <SideNavMenuWrapper>
      <SideNavMenuButton>
        <SideNavMenuIcon>
          <Image
            src="/side_nav_menu_icon1.jpg"
            alt="Placeholder"
            width={40}
            height={80}
          />
        </SideNavMenuIcon>
        <SideNavMenuLabel>Home</SideNavMenuLabel>
      </SideNavMenuButton>
      <SideNavMenuButton>
        <SideNavMenuIcon>
          <Image
            src="/side_nav_menu_icon2.jpg"
            alt="Placeholder"
            width={40}
            height={80}
          />
        </SideNavMenuIcon>
        <SideNavMenuLabel>About</SideNavMenuLabel>
      </SideNavMenuButton>
      <SideNavMenuButton>
        <SideNavMenuIcon>
          <Image
            src="/side_nav_menu_icon3.jpg"
            alt="Placeholder"
            width={40}
            height={80}
          />
        </SideNavMenuIcon>
        <SideNavMenuLabel>Contact</SideNavMenuLabel>
      </SideNavMenuButton>
      <SideNavMenuButton>
        <SideNavMenuIcon>
          <Image
            src="/side_nav_menu_icon4.jpg"
            alt="Placeholder"
            width={40}
            height={80}
          />
        </SideNavMenuIcon>
        <SideNavMenuLabel>Services</SideNavMenuLabel>
      </SideNavMenuButton>
      <SideNavMenuButton>
        <SideNavMenuIcon>
          <Image
            src="/side_nav_menu_icon5.jpg"
            alt="Placeholder"
            width={40}
            height={80}
          />
        </SideNavMenuIcon>
        <SideNavMenuLabel>Blog</SideNavMenuLabel>
      </SideNavMenuButton>
      <SideNavFooter></SideNavFooter>
    </SideNavMenuWrapper>
  );
}
const SideNavFooterWrapper = styled(tw.div`bg-black flex-grow w-full`)``;
function SideNavFooter() {
  return <SideNavFooterWrapper></SideNavFooterWrapper>;
}

// const Container = tw.div`
//    mx-auto px-5 py-2
// `;

// const FlexWrap = tw.div`
//   -m-1 flex flex-wrap md:-m-2 flex-col md:flex-row
// `;

const HalfWidthFlexWrap = tw.div`
  xl:w-1/2 aspect-[1/1] max-h-[min(100vw,100vh)]
`;

const DualFlexWrap = tw.div`
  sm:w-1/2 aspect-[1/1] max-h-[min(100vw,100vh)]
`;

// const ImageWrapper = tw.div`
//   sm:w-1/2 p-1 md:p-1
// `;
// const FullWidthImageWrapper = tw.div`
//   sm:w-full p-1 md:p-1
// `;
// const ImageScalingEffect = styled(tw.div`
//   absolute top-0 left-0 w-full h-full flex items-end justify-start p-2
//   `)`
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center center",
//   backgroundSize: "cover",
//   transition: transform 0.3s ease-in-out;
//   &:hover {
//     transform: scale(1.05);
//   }
//   `;
const PopularPostWrapper = styled(tw.div`mx-auto px-5 py-2`)``;
const PopularPost = () => {
  return (
    <PopularPostWrapper>
      <h1 className="text-4xl font-bold text-white text-center py-10">
        Popular Post
      </h1>
      <div className="bg-white flex flex-col xl:flex-row aspect-[2/1]">
        <HalfWidthFlexWrap className="bg-blue-400">
          {/* <div className="flex flex-col sm:flex-row">
            <DualFlexWrap className="bg-pink-300"></DualFlexWrap>
            <DualFlexWrap className="bg-zinc-300"></DualFlexWrap>
          </div>
          <div className="bg-red-400"></div> */}
        </HalfWidthFlexWrap>
        <HalfWidthFlexWrap className="bg-blue-500">
          {/* <div className="bg-blue-400 flex-grow"></div>
          <div className="flex flex-col sm:flex-row">
            <DualFlexWrap className="bg-yellow-300"></DualFlexWrap>
            <DualFlexWrap className="bg-orange-300"></DualFlexWrap>
          </div> */}
        </HalfWidthFlexWrap>
      </div>
    </PopularPostWrapper>
  );
};
