import { FC } from "react";




interface SocialIconProps {
    destination: 'facebook' | 'instagram';
    size:'small' | 'medium' 
}

const links =  {
    facebook: 'https://www.facebook.com/profile.php?id=100089071540442',
    instagram: 'https://www.instagram.com/vashi.mebli_ua/'
}

const sizes = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12'
}


const SocialIcon:FC<SocialIconProps> = ({destination,size}) => {
    return ( 
        <a href={links[destination]} target='_blank'>
            <img src={'/icons/'+destination+'.svg'} alt={'посилання на '+ destination} className={sizes[size]+' hover:invert duration-300'}/>        
        </a>
     );
}
 
export default SocialIcon;