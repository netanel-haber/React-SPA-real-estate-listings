import React from 'react';
import ColumnInnerChild from './ColumnInnerChild';
import '../../styles/components/RightColumn.scss';

const { defArea, defMunicipality, defType, defNumber, defStreet } = {
    defArea: "בימת תל חי / מורדות הרי נפתלי",
    defMunicipality: "מעלה נפצוצים",
    defType: "דו-משפחתי",
    defStreet: "הרצל",
    defNumber: "13/5"
};


const RightColumn = ({ municipality = defMunicipality, area = defArea, street = defStreet, number = defNumber, apt, type = defType, picke }) => (
    <div className="RightColumn">
        <ColumnInnerChild title={`${street} ${number}`} subtitle={`${type}, ${area}, ${municipality}`} />
    </div>
);

export default RightColumn;