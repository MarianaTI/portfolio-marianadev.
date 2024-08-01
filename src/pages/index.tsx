import {
  Article,
  ArticleTitle,
  CardContainer,
  CategoryContainer,
  CharacteristicContainer,
  Contact,
  ContactMe,
  Container,
  Content,
  Footer,
  FooterGrid,
  Grid,
  GridAboutMe,
  ImageContainer,
  InfoContent,
  InfoContentAboutMe,
  Information,
  Line,
  PhraseContent,
  SocialMedias,
  SocialMediasContainer,
  TextContent,
  ToolsContainer,
} from "@/styles/Home.style";
import Head from "next/head";
import React from "react";
import { tools } from "../../constants";
import CategoryComponent from "@/components/Category/Category";
import CardComponent from "@/components/Card/Card";
import CharacteristicComponent from "@/components/Characteristic/Characteristic";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaDribbble, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MarianaDev.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Grid id="home">
        <Information>
          <InfoContent>
            <span>Hello! 👋 I am Mariana Trujillo</span>
            <h1>FrontEnd Developer UX/UI</h1>
            <p>
              I love making easy-to-use and nice-looking digital experiences. I
              mix user-focused design with strong frontend coding skills to
              create new and useful solutions.
            </p>
          </InfoContent>
        </Information>
        <ImageContainer>
          <img src="/image/profile.png" alt="profile-marianadev" />
        </ImageContainer>
      </Grid>
      <ToolsContainer>
        {tools.map((tool, index) => (
          <img key={index} src={tool.image}></img>
        ))}
      </ToolsContainer>
      <GridAboutMe id="aboutme">
        <ImageContainer>
          <img
            src="/image/profile.png"
            width={350}
            alt="profile-marianadev-about-me"
          />
        </ImageContainer>
        <Information>
          <InfoContentAboutMe>
            <h1>About me</h1>
            <p>
              I am a passionate frontend developer and UX/UI designer who loves
              creating intuitive and attractive digital experiences. I design in
              Figma to ensure a user-centered and visually consistent interface.
              For my projects, I use modern technologies like Next.js,
              Emotion/styled, JavaScript, Node.js, Express, and Firebase.
            </p>
            <p>
              I combine my creativity in design with strong technical skills to
              deliver innovative and functional solutions that exceed user
              expectations. I enjoy turning ideas into reality and always strive
              to improve user satisfaction through careful design and efficient
              coding.
            </p>
            <p>
              I am responsible and well-organized. I am always excited to learn
              new things and improve my skills in web development and UI design.
            </p>
          </InfoContentAboutMe>
        </Information>
      </GridAboutMe>
      <Content id="projects">
        <h2>My projects</h2>
        <CategoryContainer>
          <CategoryComponent name="All" />
          <CategoryComponent name="Web design" />
          <CategoryComponent name="Web development" />
        </CategoryContainer>
        <CardContainer>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </CardContainer>
      </Content>
      <Article>
        <ArticleTitle>
          <h3>What I know?</h3>
          <span>Lorem ipsum odor amet, consectetuer adipiscing elit. </span>
        </ArticleTitle>
        <CharacteristicContainer>
          <CharacteristicComponent
            label="Characteristics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <CharacteristicComponent
            label="Characteristics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <CharacteristicComponent
            label="Characteristics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
          <CharacteristicComponent
            label="Characteristics"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
          />
        </CharacteristicContainer>
      </Article>
      <PhraseContent>
        <span>
          “Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie ligula
          tellus egestas convallis cras etiam ridiculus.”
        </span>
      </PhraseContent>
      <Footer id="footer">
        <Line></Line>
        <FooterGrid>
          <ContactMe>
            <Contact>
              <IoLocationOutline size={25} color="#A555EC" />
              <span>Mérida, Yucatán, México</span>
            </Contact>
            <Contact>
              <MdOutlineEmail size={25} color="#A555EC" />
              <span>marianatrujillo27@hotmail.com</span>
            </Contact>
            <Contact>
              <FiPhone size={25} color="#A555EC" />
              <span>(+52) 999 273 7423</span>
            </Contact>
          </ContactMe>
          <SocialMediasContainer>
            <SocialMedias>
              <a>
                <FaDribbble size={25} color="#A555EC" />
              </a>
              <a>
                <FaGithub size={25} color="#A555EC" />
              </a>
              <a>
                <FaLinkedin size={25} color="#A555EC" />
              </a>
              <a>
                <FaFacebookF size={25} color="#A555EC" />
              </a>
            </SocialMedias>
            <TextContent>
              <span>Contact me!</span>
              <span>MarianaDev, 2024.</span>
            </TextContent>
          </SocialMediasContainer>
        </FooterGrid>
      </Footer>
    </Container>
  );
}
