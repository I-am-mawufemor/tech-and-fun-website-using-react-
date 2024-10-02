import Approach from "./approach";
import approachData from "./approachData";

export default function ApproachContent(){
    const approachElement = approachData.map(approachItem=>{
        return(
        <Approach 
        key = {approachItem.id}
        {...approachItem}
        />
        );
    });

    return(
        <div className="">
                {approachElement}
        </div>
    )
}