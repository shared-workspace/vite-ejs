import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";
import tw from "tailwind-styled-components";
const FlexArticleAndSidebar = styled(tw.div`md:flex relative mt-96 sm:ml-16 md:ml-auto`)``;
const ColArticle = styled(
  tw.div`md:flex-grow xl:max-w-[50vw] md:ml-auto bg-red-200`
)``;
const ColSideBar = styled(tw.div`md:max-w-xs md:mx-5 xl:mx-auto`)``;
const ColSideNav = styled(tw.div`min-w-10 max-w-[13rem] w-0 md:w-auto xl:w-full mr-5`)``;
const WrapperArticle = styled(tw.div`p-6 `)``;
const WrapperSidebar = styled(tw.div`sticky top-0  px-4 py-10 bg-gray-100`)``;

export default function HopePage() {
  return (
    <Fragment>
      <SideNav />
      <FlexArticleAndSidebar>
        <ColSideNav />
        <ColArticle>
          <WrapperArticle>
            <ArticleContent />
            <ArticleContent />
          </WrapperArticle>
        </ColArticle>
        <ColSideBar>
          <WrapperSidebar>
            <SidebarContent />
            <SidebarContent />
          </WrapperSidebar>
        </ColSideBar>
      </FlexArticleAndSidebar>
    </Fragment>
  );
}
const SideNavWrapper = styled(tw.div`min-w-10 max-w-[13rem] w-0 md:w-auto xl:w-full fixed top-0 h-screen bg-blue-600 -left-10 sm:left-0`)``;
function SideNav() {
  return (
    <SideNavWrapper />
  )
}
function ArticleContent() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Main Heading of the Article</h1>
      <h2 className="text-2xl font-semibold mb-4">Subheading of the Article</h2>
      <p className="mb-4">
        This is a paragraph of the article. It contains some introductory text
        about the topic discussed in the article. The content here is meant to
        engage the reader and provide some background information.
      </p>
      <Image
        src="https://via.placeholder.com/800x400"
        alt="Placeholder"
        className="w-full h-auto mb-4"
        width={800}
        height={400}
      />
      <p className="mb-4">
        This is another paragraph with some{" "}
        <strong className="font-bold">highlighted text</strong> to emphasize
        important points. The article continues with more detailed information
        and analysis.
      </p>
      <video className="w-full h-auto mb-4" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <p className="mb-4">
        Additional content to ensure the article requires scrolling. This
        paragraph is here to add more text to the article. The more content we
        add, the more the user will need to scroll to read the entire article.
      </p>
      <p className="mb-4">
        More content to make the article longer. This is just filler text to
        demonstrate a long article. The goal is to create a realistic example of
        an article that requires scrolling.
      </p>
      <p className="mb-4">
        Even more content to ensure the article is long enough. This text is
        here to simulate a lengthy article with multiple sections and detailed
        information.
      </p>
    </>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="social-media-links mb-8">
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="popular-posts mb-8">
        <h3 className="text-lg font-semibold mb-2">Popular Posts</h3>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Post 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Post 2
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Post 3
            </a>
          </li>
        </ul>
      </div>
      <div className="tags mb-8">
        <h3 className="text-lg font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <span className="tag bg-gray-200 px-2 py-1 rounded">Tag1</span>
          <span className="tag bg-gray-200 px-2 py-1 rounded">Tag2</span>
          <span className="tag bg-gray-200 px-2 py-1 rounded">Tag3</span>
        </div>
      </div>
      <div className="categories mb-8">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Category 2
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Category 3
            </a>
          </li>
        </ul>
      </div>
      <div className="featured-posts mb-8">
        <h3 className="text-lg font-semibold mb-2">Featured Posts</h3>
        <ul className="list-disc list-inside">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Featured Post 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Featured Post 2
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Featured Post 3
            </a>
          </li>
        </ul>
      </div>
      <div className="author-details mb-8">
        <h3 className="text-lg font-semibold mb-2">About the Author</h3>
        <p className="text-gray-700">Author Name</p>
        <p className="text-gray-600">
          Short bio about the author. This section provides some background
          information about the author of the blog.
        </p>
      </div>
    </>
  );
}
