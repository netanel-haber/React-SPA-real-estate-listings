import React from 'react';
import ColumnInnerChild from './ColumnInnerChild';

const { defArea, defMunicipality, defType, defNumber, defStreet } = {
    defArea: "בימת תל חי / מורדות הרי נפתלי",
    defMunicipality: "מעלה נפצוצים",
    defType: "דו-משפחתי",
    defStreet: "הרצל",
    defNumber: "13/5"
};


const AddressColumn = ({ municipality = defMunicipality, area = defArea, street = defStreet, number = defNumber, apt, type = defType, picke }) => (
    <div className="AddressColumn">
        <ColumnInnerChild title={`${street} ${number}`} subtitle={`${type}, ${area}, ${municipality}`} />
    </div>
);

export default AddressColumn;