import React from 'react';
import {useParams} from "react-router-dom";

import ItemPage from './ItemPage';

const ItemsParams = () => {
    const { id } = useParams();

    return (
        <div>
            <ItemPage taskId={id} />
        </div>
    );
};

export default ItemsParams;