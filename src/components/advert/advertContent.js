import AdvertSection from "./advert";
import advertData from "./advertData";

function AdvertContent(){
    const advertElement = advertData.map(advertItem =>{
        return(
            <AdvertSection 
        key = {advertItem.id}
        {...advertItem}
        />
        );
    });
    return(
        <div className="advert-content">
                {advertElement}
        </div>
    )
}export default AdvertContent;