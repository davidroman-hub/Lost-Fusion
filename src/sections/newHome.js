import React, { Fragment } from "react";
import Logo from "../images/Logo.png";
import "react-jinke-music-player/assets/index.css";
import Contact from "./Contact-us";
import Header from "./pages/shared/Header";
import ReactFBLike from "react-fb-like";
import MusicPlayer from "react-responsive-music-player";
import VideoCarousel from "./videoCarousel";
import Videos from "./pages/Videos";
import EstrenosNew from "../images/Fuego.jpg";
import '../sections/pages/shared/styles.scss'

const newHome = () => {
  const Estrenos = () => {
    return (
      <div className="text-center mt-5 Sabes">
        <a
          href="https://open.spotify.com/album/1j1PVVtGsyjYh0u3RXloMS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={EstrenosNew}
            alt="estreno"
            className="estrenos img img-fluid"
          />
        </a>
      </div>
    );
  };

  const NewDescription = () => {
    return (
      <div className="desc-content">
        <span className="animation" style={{ fontSize: "20px" }}>
          Lost Fusión
        </span>{" "}
        es un proyecto musical independiente que surge de la{" "}
        <span className="animation" style={{ fontSize: "20px" }}>
          CDMX
        </span>
        , han logrado mezclar y conectar bastos panoramas musicales como el{" "}
        <span className="animation" style={{ fontSize: "20px" }}>
          rock, funk, reggae, hasta un sonido más urbano y latino
        </span>
        ; dando como resultado el sonido propio que los caracteriza con su
        estilo único “Urban Latin Beat”.
        <span className="animation" style={{ fontSize: "20px" }}>
          {" "}
          El amor, la libertad y el folklore{" "}
        </span>
        son las banderas en cada una de sus presentaciones, poniendo al público
        en una{" "}
        <span className="animation" style={{ fontSize: "20px" }}>
          {" "}
          misma sintonía
        </span>
        .
      </div>
    );
  };

  const playlist = [
    {
      url:
        "https://res.cloudinary.com/dm8dxwvix/video/upload/v1590610006/Lost_Fusi%C3%B3n_-_Guajira_Audio_Oficial_ojeiiv.mp3",
      cover:
        "https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png",
      title: "Serpiente",
      artist: ["Lost-Fusión", "-Guajira-"],
    },
    {
      url:
        "https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231402/lost%20Fusion/lost-fusion-costa-linda-lyric-video_smqknm.mp3",
      cover:
        "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/costa_vvbglw.png",
      title: "Costalinda",
      artist: ["Lost-Fusión", "-Costa Linda-"],
    },
    {
      url:
        "https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231676/lost%20Fusion/lost-fusion-el-camino-del-guerrero-en-vivo-radio-unam_qw4mxd.mp3",
      cover:
        "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/unam_uqj5zi.png",
      title: "Camino",
      artist: ["Lost-Fusión", "-El Camino del guerrero (En Vivo) -"],
    },
    {
      url:
        "https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231985/lost%20Fusion/lost-fusion-cuando-bailas-en-vivo-radio-unam_vryt8o.mp3",
      cover:
        "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/unam_uqj5zi.png",
      title: "cuando bailas",
      artist: ["Lost-Fusión", "-Cuando Bailas (En Vivo)-"],
    },
  ];

  const homeContainer = () => (
    <Fragment>
      <header className="header-content " id="home">
        <div className="header-text">
          <p className="Logo1"></p>
        </div>
      </header>
      <div className="band-4 text-center">
        <img
          className="img img-fluid"
          style={{ maxHeight: "" }}
          src={Logo}
          alt="band-1"
        />
      </div>

      {/* BIOGRAFIA */}

      <div className=" text-center" id="bio">
        <h2 className="titles-descBio">BIO</h2>
      </div>
      <br />

      <div className="biografia">
        <div>
          <img
            className="bio-img img img-fluid "
            style={{ maxHeight: "" }}
            src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1591393548/lost%20Fusion/Lost_Grupal_PNG_hcbvdj.png"
            alt="band-1"
          />
        </div>

        <div className="desc container text-center">
          <NewDescription />
        </div>
      </div>

      <br />
      <br />

      <div className="desc container text-center">
        <span className="animation" style={{ fontSize: "30px" }}>
          Lost Fusión
        </span>{" "}
        <span style={{ fontSize: "30px" }}>es:</span>
        <br />
        • MAYRA FIGUEROA - Voz y Teclado
        <br />• <span>INDIRA VALDELAMAR </span>- Voz y Guitarra
        <br />
        • MIGUEL OVIEDO - Voz y Percusión
        <br />
        • ALBERTO PERALTA - Bajo
        <br />
        • MARCO PALOMO - Batería
        <br />
        <br />
      </div>

      {/* VIDEOS */}

      <br />
      <br />
      <div className="titles-descPrV text-center" id="videos">
        {" "}
        VIDEOS{" "}
      </div>

      <div className="videos">
        <VideoCarousel />
      </div>

      <br />
      <br />

      {/* MUSICA */}

      <div className="titles-descPrR text-center" id="musica">
        {" "}
        MÚSICA{" "}
      </div>

      <div className="reproductor text-center">
        <div className="reproduce2">
          <MusicPlayer playlist={playlist} mode="vertical" />
        </div>
      </div>

      <br />
      <br />

      <div className="musica 1">
        <div className="albums-photo">
          <a
            href="https://open.spotify.com/album/0vnjMPHORQBkvS96uVPGpJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img img-fluid"
              style={{ maxHeight: "" }}
              src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630766/lost%20Fusion/13_zsspdn.png"
              alt="Tingo al tango"
            />
          </a>
          <br />
          <span className="animation-l">1.-</span> Tropas
          <br />
          <span className="animation-l">2.-</span> Cuando Bailas
          <br />
          <span className="animation-l">3.-</span> El Camino del Guerrero
          <br />
          <span className="animation-l">4.-</span> Seducción a un Elefante
          <br />
          <span className="animation-l">5.-</span> Guajira
          <br />
          <span className="animation-l"> 6.- </span> Hechizo
          <br />
          <span className="animation-l">7.- </span> Liberación
          <br />
          <span className="animation-l">8.-</span> Del Tingo Al Tango
        </div>
        <div className="albums-photo">
          <a
            href="https://open.spotify.com/album/4bUlfaa0RJ4fiXBhrGfenJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img img-fluid"
              style={{ maxHeight: "" }}
              src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630764/lost%20Fusion/14_mqk9nn.png"
              alt="prensa1"
            />
          </a>
          <br />
          <span className="animation-a">1.-</span> Guajira (En vivo)
          <br />
          <span className="animation-a">2.-</span> El Camino del Guerrero (En
          vivo)
          <br />
          <span className="animation-a">3.-</span> Cuando Bailas (En vivo)
          <br />
          <span className="animation-a">4.-</span> Costa linda (En vivo)
          <br />
          <span className="animation-a">5.-</span> Madre Tambor (En vivo)
          <br />
          <span className="animation-a">6.-</span> Del Tingo Al Tango (En vivo)
          <br />
          <span className="animation-a">7.-</span> Liberación (En vivo)
        </div>
      </div>
      <div className="musica">
        <div className="albums-photo2"></div>
      </div>
      <div className="albums">
        <div className="group">
          <img
            className="img img-fluid"
            style={{ maxHeight: "" }}
            src="https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630767/lost%20Fusion/12_cbqdyz.png"
            alt="prensa1"
          />
          <br />
        </div>
      </div>

      <div className="logo3">
        <div className="group">
          <img
            className="img img-fluid"
            style={{ maxHeight: "" }}
            src={Logo}
            alt="prensa1"
          />
          <br />
        </div>
      </div>

      {/* GALERIA BOTON */}
      <div></div>
      <div className="titles-descGallery text-center"> GALERIA</div>
      <div id="galeria" />
      <Videos />

      {/* CONTACTO */}

      <div id="contacto" />
      <div className="titles-desc text-center "> CONTACTO:</div>
      <div className="desc container text-center">
        <span className="animation" style={{ fontSize: "30px" }}>
          Booking/Medios
        </span>{" "}
        <span style={{ fontSize: "20px" }}></span>
      </div>
      <div className="mailes">
        <a
          className="mail text-center"
          style={{ fontSize: "18px" }}
          href="mailto:contacto.lostfusion@gmail.com"
        >
          contacto.lostfusion@gmail.com
        </a>
      </div>
      <br />

      {/* <Contact/> */}

      <div className="botas text-center">
        <div
          className="g-ytsubscribe"
          data-channelid="UCRHNmMDXY8N0i3C8Pp9M-nA"
          data-layout="default"
          data-count="default"
        />
        <div className="spacer-figure" />
        <div
          class="fb-like"
          data-href="https://www.facebook.com/lostfusion/"
          data-width=""
          data-layout="box_count"
          data-action="like"
          data-size="small"
          data-share="true"
        />
      </div>
      <br />

      {/* /// to fix the error */}
      <div className="facebook-but">
        <ReactFBLike
          language="es_ES"
          appId={process.env.FB_APP_ID}
          version="v2.12"
        />
      </div>
    </Fragment>
  );

  return (
    <Header>
      {Estrenos()}
      {homeContainer()}

      <br />

      {Contact()}
    </Header>
  );
};

export default newHome;
