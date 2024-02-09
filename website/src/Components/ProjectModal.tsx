import React, { ReactElement } from "react";
import { Modal } from "react-bootstrap";
import { GithubImg } from "./BaseImg";

interface ProjectProps {
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  open: string;
}

interface ModalProps extends ProjectProps {
  name: string;
  title?: string;
  children?: React.ReactNode;
}

const ModalBase = (props: ModalProps): ReactElement => {
  const handleClose = (): void => props.setOpen("");
  return (
    <Modal
      show={props.open === props.name}
      onHide={handleClose}
      dialogClassName="modal-custom"
    >
      <div className="modal-custom bg-dark text-light text-center fs-4">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="w-100" as="h2">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </div>
    </Modal>
  );
};

export const ProjectModal = (props: ProjectProps): ReactElement => {
  return (
    <div>
      <BusPoolModal {...props} />
      <PokerModal {...props} />
      <WebsiteModal {...props} />
      <UniversityModal {...props} />
      <YandexModal {...props} />
      <TopicoModal {...props} />
      <YTLiveModal {...props} />
      <AnimedleModal {...props} />
    </div>
  );
};

const BusPoolModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="buspool" title="BusPool" {...props}>
      <div>
        <p>
          An API that handles simulated transportation demand with buses that
          find optimal paths similar to a carpool. Uses MQTT and Kafka for
          communication and GO for the API.
        </p>
        <GithubImg href="https://github.com/eisandbar/BusPool" />
      </div>
    </ModalBase>
  );
};

const PokerModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="poker" title="Poker" {...props}>
      <div>
        <p>
          A poker odds CLI written in GO that works with ranges. The most
          interesting part was improving performance with pprof by reducing
          memory allocation and using Goroutines .
        </p>
        <GithubImg href="https://github.com/eisandbar/Poker" />
      </div>
    </ModalBase>
  );
};

const WebsiteModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="website" title="Website" {...props}>
      <div>
        <p>This website! It was written by me using Typescript and React.</p>
        <GithubImg href="https://github.com/eisandbar/website" />
      </div>
    </ModalBase>
  );
};

const UniversityModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="university" title="University" {...props}>
      <div>
        <p>
          While studying computational neuroscience at TU Berlin I did most of
          my work in python.
        </p>
        <p>
          Examples of projects I completed are a DQN that traverses a 2D dynamic
          grid, MRI image analysis and simulations of populations of neurons.
        </p>
      </div>
    </ModalBase>
  );
};

const YandexModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="yandex" title="Yandex" {...props}>
      <div>
        <p>
          I worked as a backend developer at Yandex in a team that did service
          discovery.
        </p>
        <p>
          I was one of 2 people responsible for a graph processing API written
          in python and partly GO, as well as its dev-facing UI.
        </p>
        <p>
          We used a kanban board type system so I worked on various tasks such
          as performance improvement, bug fixing and management of the test
          suite.
        </p>
        <p>
          At Yandex I also did frontend work on the dev-facing UI that used
          React and Redux.
        </p>
        <p>
          I did work such as adding new pages/components, fixing hooks and
          fixing visual bugs.
        </p>
      </div>
    </ModalBase>
  );
};
const TopicoModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="topico" title="Topico Chat App" {...props}>
      <div>
        <p>
          Topico is one of my first Javascript/React projects. It is a
          multi-room messaging app that uses websockets.
        </p>
        <p>
          Since then my skills have greatly improved, but it was a nice finished
          product that I hosted on a VPS.
        </p>

        <GithubImg href="https://github.com/eisandbar/Topico" />
      </div>
    </ModalBase>
  );
};

const YTLiveModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="ytlive" title="YT Live" {...props}>
      <div>
        <p>
          YT Live is a website I started to help with discoverability of
          livestreams on youtube. You can check it out{" "}
          <a href="https://ytlive.eisandbar.xyz">here</a>
        </p>
        <p>
          The backend is written in GO and is integrated with Youtube&#39;s Data
          API.
        </p>
        <p>
          The frontend is in Typescript using React hosted with Google&#39;s App
          Engine
        </p>
        <p>Stream and category data was stored using Postgres</p>

        <GithubImg href="https://github.com/eisandbar/ytlive" />
      </div>
    </ModalBase>
  );
};

const AnimedleModal = (props: ProjectProps): ReactElement => {
  return (
    <ModalBase name="animedle" title="Animedle" {...props}>
      <div>
        <p>
          Animedle is an anime guessing game inspired by Wordle and Gamedle. You
          can find it <a href="https://animedle.eisandbar.xyz">here</a>
        </p>
        <p>I used Golang, Postgres, Typescript and React to build this site.</p>

        <GithubImg href="https://github.com/eisandbar/animedle-client" />
      </div>
    </ModalBase>
  );
};
