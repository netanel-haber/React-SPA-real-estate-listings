import React, { useEffect, useState } from 'react';
import ItemListContext from '../../contexts/ItemListContext';
import { countDocs, getListings } from '../../fetch/data';
import { ItemListWithLoader } from './ItemList';
import Paging from './Paging';
import '../../styles/components/ListContainer.scss';



const ListContainer = ({ type, options }) => {
    const [skip, updateSkip] = useState(0);
    const [count, updateCount] = useState(0);

    const [list, updateList] = useState([]);
    const [listUpdating, toggleUpdating] = useState(true);

    const updateProcedure = (options) => {
        toggleUpdating(true);
        getListings(type, options)
            .then(updateList)
            .catch(ex => alert("אירעה בעיית תקשורת. בדקו את חיבור האינטרנט."))
            .then(() => { toggleUpdating(false) })
    }

    useEffect(() => {
        updateSkip(0);
        updateProcedure({ ...options, skip: 0 })
    }, [options])

    useEffect(() => {
        updateProcedure({ ...options, skip })
    }, [skip])

    useEffect(() => {
        countDocs(type, options.filters).then(updateCount);
    }, [options.filters])


    return (
        <ItemListContext.Provider value={{
            count, list, type, listUpdating,
            numberOfPages: Math.ceil(count / options.limit),
            page: skip / options.limit + 1,
            dispatchSkip: (skipBy) => { updateSkip(((skipBy - 1) * options.limit)) }
        }}>
            <div className="ListContainer">
                <ItemListWithLoader loading={listUpdating} />
                <Paging />
            </div>
        </ItemListContext.Provider>
    );
};



export default ListContainer;
