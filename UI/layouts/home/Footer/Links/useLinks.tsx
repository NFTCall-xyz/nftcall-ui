import GitHubIcon from '@mui/icons-material/GitHub'
// import MenuBookIcon from '@mui/icons-material/MenuBook'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
// import EmailIcon from '@mui/icons-material/Email'

const MediumIcon = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M4.53934 7.46817C4.56611 7.20495 4.46528 6.94531 4.26899 6.76865L2.27035 4.35958V4H8.47861L13.2771 14.5241L17.4957 4H23.414V4.35958L21.7044 5.99864C21.5572 6.11106 21.484 6.29575 21.5144 6.47866V18.5222C21.484 18.7042 21.5572 18.8889 21.7044 19.0014L23.3738 20.6404V21H14.976V20.6404L16.706 18.9612C16.8756 18.7917 16.8756 18.7417 16.8756 18.4821V8.74765L12.0672 20.9607H11.4177L5.81882 8.74765V16.9331C5.77242 17.2767 5.88663 17.6237 6.12843 17.8718L8.37779 20.6003V20.9607H2V20.6003L4.24936 17.8718C4.49026 17.6228 4.59733 17.274 4.53934 16.9331V7.46817Z"
      />
    </svg>
  )
}

const links = [
  { label: 'Github', linkTo: 'https://github.com/vinciprotocol', icon: <GitHubIcon /> },
  { label: 'Twitter', linkTo: 'https://twitter.com/vinciprotocol', icon: <TwitterIcon /> },
  { label: 'Medium', linkTo: 'https://medium.com/@vinciprotoco', icon: <MediumIcon /> },
  { label: 'Telegram', linkTo: 'https://t.me/vinciprotocol', icon: <TelegramIcon /> },
  // { label: 'Docs', linkTo: 'https://docs.vinci.io', icon: <MenuBookIcon /> },
  // { label: 'Email', linkTo: 'mailto:info@vinci.io', icon: <EmailIcon /> },
]

export const useLinks = () => {
  return {
    links,
  }
}
