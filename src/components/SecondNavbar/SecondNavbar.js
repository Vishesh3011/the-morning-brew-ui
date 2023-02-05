import React from 'react';

import { Link } from 'react-router-dom';

import './SecondNavbar.css';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import BusinessIcon from '@mui/icons-material/Business';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SportsIcon from '@mui/icons-material/Sports';
import ScienceIcon from '@mui/icons-material/Science';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BalconyIcon from '@mui/icons-material/Balcony';
import FlagIcon from '@mui/icons-material/Flag';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import PublicIcon from '@mui/icons-material/Public';

function SecondNavbar() {
  return (
    <div className='secondNavbar'>
        <div className='newsByCategories'>
            <div className='newsTitle'>
                <h3>News By Categories</h3>
            </div>
            <div className='newsByCategory'>
                <div className='categories'>
                    <NewspaperIcon className='categoriesIcon'/>
                    <Link to = '/general' className='category'>General</Link>
                </div>
                <div className='categories'>
                    <BusinessIcon className='categoriesIcon'/>
                    <Link to = '/business' className='category'>Business</Link>
                </div>
                <div className='categories'>
                    <ConfirmationNumberIcon className='categoriesIcon'/>
                    <Link to = '/entertainment' className='category'>Entertainment</Link>
                </div>
                <div className='categories'>
                    <SportsIcon className='categoriesIcon'/>
                    <Link to = '/sports' className='category'>Sports</Link>
                </div>
                <div className='categories'>
                    <ScienceIcon className='categoriesIcon'/>
                    <Link to = '/science' className='category'>Science</Link>
                </div>
                <div className='categories'>
                    <NightlifeIcon className='categoriesIcon'/>
                    <Link to = '/lifestyle' className='category'>Lifestyle</Link>
                </div>
                <div className='categories'>
                    <BloodtypeIcon className='categoriesIcon'/>
                    <Link to = '/health' className='category'>Health</Link>
                </div>
            </div>
        </div>
        <div className='newsByLocations'>
            <div className='newsTitle'>
                <h3>News By Location</h3>
            </div>
            <div className='newsByLocation'>
                <div className='categories'>
                    <LocationCityIcon className='categoriesIcon'/>
                    <Link to = '/vadodara' className='category'>Your Location</Link>
                </div>
                <div className='categories'>
                    <BalconyIcon className='categoriesIcon'/>
                    <Link to = '/gujarat' className='category'>Your State</Link>
                </div>
                <div className='categories'>
                    <FlagIcon className='categoriesIcon'/>
                    <Link to = '/india' className='category'>Your Country</Link>
                </div>
                <div className='categories'>
                    <SouthAmericaIcon className='categoriesIcon'/>
                    <Link to = '/asia' className='category'>Your Continent</Link>
                </div>
                <div className='categories'>
                    <PublicIcon className='categoriesIcon'/>
                    <Link to = '/world' className='category'>World</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondNavbar