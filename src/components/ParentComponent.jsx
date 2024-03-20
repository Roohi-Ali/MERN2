import ChildComponent from "./ChildComponent";

function ParentComponent(prop) {

    const count=5
    return(
        <>
        <ChildComponent message='Task1 - This is message from ChildComponent'/>
        <hr/>
        <p>{`Task2 - ${prop.renderProp(count)}`} </p>
        <hr/>
        </>
    )
}

export default ParentComponent;