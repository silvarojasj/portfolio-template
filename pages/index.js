import Head from "next/head";
import { BsChatFill } from "react-icons/bs";
import { DiCode } from "react-icons/di";
import { FaFlagCheckered, FaGraduationCap, FaTools } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { RiUserVoiceFill } from "react-icons/ri";
import { CoverText } from "../components/CoverText";
import { ExperienceBox } from "../components/ExperienceBox";
import { Header } from "../components/Header";
import Layout from "../components/Layout";
import { LeftColumn } from "../components/LeftColumn";
import { RightColumn } from "../components/RightColumn";
import { SkillsItem } from "../components/SkillsItem";
import { SkillsList } from "../components/SkillsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ada Lovelace - Portfolio</title>
        <link rel="icon" href="/favicon-96x96.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <LeftColumn>
          <Header
            name="Juan Manuel Silva"
            position="Ingeniero Electronico y futuro FullStack"
            profilePicture="/img/profile-pic.jpg"
          />
          <CoverText>
          Ingeniero electrónico recién egresado, con conocimiento en el desarrollo e implementación de
          sistemas electrónicos analógicos, digitales y de potencia; sistemas de control y automatización,
          además de conocimientos en redes de comunicación.
          Con experiencia en formulación y desarrollo de proyectos interdisciplinarios, además de
          investigación.
          Gran comunicador, adicto a la tecnología y deportista.
          Interesado en ser parte importante de un proyecto digital que me aporte nuevos conocimientos.
          </CoverText>
          <ExperienceBox
            date="Diciembre 1843"
            position="Matemática"
            place="Londres, Reino Unido"
          >
            Escritura del primer algoritmo de computación
          </ExperienceBox>
          <ExperienceBox
            date="Enero 1842"
            position="Matemática"
            place="Universidad de Londres, Reino Unido"
          >
            Traducción y mejora del articulo de la máquina analítica de Babbage
          </ExperienceBox>
        </LeftColumn>
        <RightColumn>
          <SkillsList name="Educación" icon={FaGraduationCap}>
            <SkillsItem date="Junio 1835" institution="Universidad de Londres">
              Matemática
            </SkillsItem>
            <SkillsItem date="Enero 1830">Escritora</SkillsItem>
          </SkillsList>
          <SkillsList name="Contacto" icon={GrContactInfo}>
            <SkillsItem>+573103872998</SkillsItem>
            <SkillsItem>
              <a
                href="mailto:silvarojasj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                silvarojasj@gmail.com
              </a>
            </SkillsItem>
            <SkillsItem>
              <a
                href="https://ada-school.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                ada-school.org
              </a>
            </SkillsItem>
            <SkillsItem>
              Urban Rd, Nottingham NG17 8AH, United Kingdom
            </SkillsItem>
          </SkillsList>
          <SkillsList name="Lenguajes y Frameworks" icon={DiCode}>
            <SkillsItem>Assembler</SkillsItem>
            <SkillsItem>c</SkillsItem>
            <SkillsItem>C++</SkillsItem>
            <SkillsItem>C#</SkillsItem>
            <SkillsItem>Python</SkillsItem>
            <SkillsItem>Matlab</SkillsItem>
            <SkillsItem>Qt</SkillsItem>
            <SkillsItem>Spyder</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades técnicas" icon={FaTools}>
            <SkillsItem>Diseno de circuitos</SkillsItem>
            <SkillsItem>Simulacion de circuitos</SkillsItem>
            <SkillsItem>Sistemas Embebidos</SkillsItem>
          </SkillsList>
          <SkillsList name="Habilidades Blandas" icon={RiUserVoiceFill}>
            <SkillsItem>Comunicación efectiva</SkillsItem>
            <SkillsItem>Touch typing</SkillsItem>
            <SkillsItem>Trabajo en equipo</SkillsItem>
          </SkillsList>
          <SkillsList name="Intereses" icon={FaFlagCheckered}>
            <SkillsItem>Inteligencia artificial</SkillsItem>
            <SkillsItem>Patrones de UI / UX</SkillsItem>
            <SkillsItem>AR / VR</SkillsItem>
          </SkillsList>
          <SkillsList name="Idiomas" icon={BsChatFill}>
            <SkillsItem>Inglés</SkillsItem>
            <SkillsItem>Francés</SkillsItem>
            <SkillsItem>Español</SkillsItem>
          </SkillsList>
        </RightColumn>
      </Layout>
    </>
  );
}
