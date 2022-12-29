import SocialIcon from "../../atoms/SocialIcon/SocialIcon";

const  Footer = () => {
    return (
        <footer className="w-full bg-teal-700 py-5 px-2">
           <div className="flex w-full justify-center gap-5">
                <SocialIcon destination='facebook' size='small'/>
                <SocialIcon destination='instagram' size='small'/>
           </div>
        </footer>
     );
}
 
export default Footer ;