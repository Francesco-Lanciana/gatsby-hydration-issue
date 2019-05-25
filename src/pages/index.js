import React from "react"
import { useMedia } from "../hooks/window-hooks";
import "./index.css";

const IndexPage = () => {
    const [attributeValue, setAttributeValue] = useMedia("(max-width: 800px)", true, false);

    // const isWindowDefined = typeof window !== 'undefined';
    // const attributeValue = isWindowDefined ? true : false;

    return (
        <div data-attribute={attributeValue}>
            The attribute value is: {attributeValue ? "true" : "false"}
        </div>
    )
}

export default IndexPage
