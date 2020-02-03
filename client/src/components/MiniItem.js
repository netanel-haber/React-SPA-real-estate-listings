import React from 'react';
import '../styles/components/MiniItem.scss';


const { heb_rooms, heb_floor, heb_sq_m, priceNotSet, nis } = {
    heb_rooms: "חדרים",
    heb_floor: "קומה",
    heb_sq_m: "מ\"ר",
    priceNotSet: "לא צוין מחיר",
    nis: "₪ "
}


const RightColumn = ({ municipality, areaId, street, number, apt, type, pickey }) => (
    <div className="RightColumn">
        <div>jjljiojiojoijjoijoijoijjoijoijoijoijoioooookj</div>
        <img src="https://via.placeholder.com/150" height="43" width="43"></img>
    </div>
);

const MiddleColumn = ({ rooms, floor, sqMeters }) => {
    const ColumnInnerChild = ({ title, subtitle }) => (
        <div className="RightColumn__inner-child">
            <span>{title}</span> <br></br>
            <span className="Column__inner-child-subtitle">{subtitle}</span>
        </div>
    );
    return (
        <div className="MiddleColumn">
            <ColumnInnerChild title={rooms} subtitle={heb_rooms} />
            <ColumnInnerChild title={floor} subtitle={heb_floor} />
            <ColumnInnerChild title={sqMeters} subtitle={heb_sq_m} />
        </div>
    );
}

const LeftColumn = ({ price, mitigator, updatedAt }) => {
    const title = price ? `${nis} ${price}` : priceNotSet,
        subtitle = mitigator || updatedAt;
    return (
        <div className="LeftColumn">
            <div className="LeftColumn__inner-child">
                <span>{title}</span> <br></br>
                <span className="Column__inner-child-subtitle">{subtitle}</span>
            </div>
        </div>
    )
};



const MiniItem = (props) => {
    const {
        price, type, rooms,
        address: { municipality, areaId, street, number, apt },
        picKeys, floor, totalPropertyFloors, sqMeters,
        mitigator, updatedAt
    } = props;

    return (
        <div className="MiniItem__container">
            <RightColumn />
            <MiddleColumn rooms={rooms} floor={floor} sqMeters={sqMeters} />
            <LeftColumn price={price} mitigator={mitigator} updatedAt={updatedAt} />
        </div>
    );
}

export default MiniItem;




// {price}, <br></br>
// {type}, <br></br>
// {municipality}, <br></br>
// {areaId}, <br></br>
// {street}, <br></br>
// {number}, <br></br>
// {apt}, <br></br>
// {picKeys}, <br></br>
// {floor}, <br></br>
// {totalPropertyFloors}, <br></br>
// {sqMeters} 