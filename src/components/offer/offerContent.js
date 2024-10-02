import Offer from "./offer";
import offerData from "./offerData";

function OfferContent(){
    const offerElement= offerData.map(item=>{
        return(
            <Offer 
            key={item.id}
            {...item}
            />
        );
    });
 return(
    
<div>
{offerElement}
</div>

 )

}export default OfferContent;