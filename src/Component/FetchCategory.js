import React, { useState } from 'react';
import categoryData from '../Data/Categorry.json';
import { FlexboxGrid, Panel } from 'rsuite';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';

const FetchCategory = ({ redirectToCategory }) => {


    const [categories] = useState(categoryData);

    const CategoryList = () => (
        categories.map((category) => (
            <FlexboxGridItem style={{padding:20, cursor: 'pointer'}} key={category.id} onClick={() => redirectToCategory(category.id)}>
                 <Panel shaded bordered bodyFill style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', width: 240, height: 200, flexWrap: 'wrap', alignContent: 'center' }}>
                    <h3>{category.name}</h3>
                </Panel>
            </FlexboxGridItem>
        ))
    );

    return (
        <FlexboxGrid justify='center'>
            <CategoryList />
        </FlexboxGrid>
    );

    
};

export default FetchCategory;