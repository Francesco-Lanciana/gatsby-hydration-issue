import React from "react"

import "./index.css";

const IndexPage = () => {
    const isWindowDefined = typeof window !== 'undefined';
    const attributeValue = isWindowDefined ? true : false;

    return (
        <div data-attribute={attributeValue}>
            Hey
        </div>
    )
}

export default IndexPage
