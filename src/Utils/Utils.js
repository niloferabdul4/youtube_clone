import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';

import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const menuItems = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'NilasCuisine', icon: <CodeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'Javascript', icon: <CodeIcon />, },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Sports', icon: <SportsEsportsIcon />, },
  {name:'Entertainment',icon:<LiveTvIcon/>},
  { name: 'Fashion', icon: <CheckroomIcon />, },
  {name:'Liked Videos',icon:<ThumbUpOffAltOutlinedIcon/>},
  {name:'Logout',icon:<ExitToAppIcon/>,path:'/'}

];