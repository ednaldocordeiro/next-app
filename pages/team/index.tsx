import Head from "next/head";
import Image from "next/image";
import { HeaderContainer } from "../../styles/Home";
import logo_vercel from "../../public/vercel_logo.svg";
import ednaldo from "../../public/ednaldo.jpg";
import italo from "../../public/italo.jpg";
import lavinia from "../../public/lavinia.png";
import green from "../../public/blur-green.png";
import yellow from "../../public/blur-yellow.png";
import purple from "../../public/blur-purple.png";
import { Profile, ProfileContainer, ProfileList } from "../../styles/Team";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <Head>
        <title>NextApp - Team</title>
      </Head>
      <HeaderContainer>
        <Image src={logo_vercel} alt="logo vercel" height={20} width={80} />
      </HeaderContainer>
      <ProfileContainer>
        <h1>Conheça à Equipe</h1>

        <ProfileList>
          <Profile>
            <Image
              className="profile-img"
              src={ednaldo}
              alt="logo vercel"
              height={100}
              width={100}
            />
            <p>Ednaldo Cordeiro</p>
            <Image
              className="gradient-green"
              src={green}
              alt="logo vercel"
              height={650}
              width={650}
            />
          </Profile>
          <Profile>
            <Image
              className="profile-img"
              src={italo}
              alt="logo vercel"
              height={100}
              width={100}
            />
            <p>Ítalo Gustavo</p>
            <Image
              className="gradient-yellow"
              src={yellow}
              alt="logo vercel"
              height={650}
              width={650}
            />
          </Profile>
          <Profile>
            <Image
              className="profile-img"
              src={lavinia}
              alt="logo vercel"
              height={100}
              width={100}
            />
            <p>Lavínia Leite</p>
            <Image
              className="gradient-purple"
              src={purple}
              alt="logo vercel"
              height={650}
              width={650}
            />
          </Profile>
        </ProfileList>

        <Link className="btn btn-primary" href="/">
          Voltar para Home{" "}
        </Link>
      </ProfileContainer>
    </>
  );
}
