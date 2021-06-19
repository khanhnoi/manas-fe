import React from 'react';
import { css } from "@emotion/core";
import { CircleLoader} from 'react-spinners'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Loader = () => {
    return (
        <>
            <div className="loader loader--fixed" >
                <CircleLoader
                    css={override}
                    size={150} />
            </div>
            <div className="loader" >
            </div>
            

        </>
    );
}

export default Loader;
