import React from 'react'

import BusinessIcon from '@mui/icons-material/Business';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SportsIcon from '@mui/icons-material/Sports';
import ScienceIcon from '@mui/icons-material/Science';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
// import LocationCityIcon from '@mui/icons-material/LocationCity';
import BalconyIcon from '@mui/icons-material/Balcony';
import FlagIcon from '@mui/icons-material/Flag';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import PublicIcon from '@mui/icons-material/Public';


export const SubBarData = [
    {
        title: 'Business',
        path: 'news/business',
        icon: <BusinessIcon/>
    },
    {
        title: 'Entertainment',
        path: 'news/entertainment',
        icon: <ConfirmationNumberIcon/>
    },
    {
        title: 'Sports',
        path: 'news/sports',
        icon: <SportsIcon/>
    },
    {
        title: 'Science',
        path: 'news/science',
        icon: <ScienceIcon/>
    },
    // {
    //     title: 'LifeStyle',
    //     path: '/lifestyle',
    //     icon: <NightlifeIcon/>
    // },
    {
        title: 'India Today',
        path: 'news/india',
        icon: <FlagIcon/>
    },
    {
        title: 'Health',
        path: 'news/health',
        icon: <BloodtypeIcon/>
    }
]

export default SubBarData