import talbaImg from "../../img/talba.png"
import tdbaImg from "../../img/tdba.png"


function TopNavBrand() {
    return (
        <>
            <img style={{
                marginRight: 20
            }}
                src={tdbaImg} alt="" width="48" height="48"></img>
            <img src={talbaImg} alt="" width="48" height="48"></img>
        </>
    );
}


export default TopNavBrand;
