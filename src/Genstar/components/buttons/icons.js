import styled from "styled-components";
import Icon from "./Icon";

const Svg = styled(Icon)`
  height: 24px;
  width: 24px;
`;

const InfoIcon = ({ className }) => (
  <Svg title="Info" viewBox="0 0 512 512" className={className}>
    <path
      d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
      fill="none"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M220 220h32v116"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M208 340h88"
    />
    <path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" />
  </Svg>
);

const AddIcon = ({ className }) => (
  <Svg title="Copy" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </Svg>
);

const SendIcon = ({ className }) => (
  <Svg title="Send" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </Svg>
);

const AddLocationIcon = ({ className }) => (
  <Svg title="Copy" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" />
  </Svg>
);

const CloseIcon = ({ className }) => (
  <Svg title="Close" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
    />
  </Svg>
);

const FamilyIcon = ({ className }) => (
  <Svg title="Close" viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
  </Svg>
);

const PersonIcon = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
  </Svg>
);

const ReloadIcon = ({ className }) => (
  <Svg
    title="Copy"
    viewBox="0 0 24 24"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </Svg>
);

const SubtractIcon = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className} title="AngelList">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13H5v-2h14v2z" />
  </Svg>
);

export {
  AddIcon,
  AddLocationIcon,
  CloseIcon,
  FamilyIcon,
  PersonIcon,
  ReloadIcon,
  SubtractIcon,
  SendIcon,
  InfoIcon,
};
