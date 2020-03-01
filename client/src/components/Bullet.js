import React from 'react';
import classnames from 'classnames';
import '../styles/components/Bullet.scss';

const Bullet = ({ selected }) =>
    <div className={selected ? "happy-bullet-parent" : "sad-bullet-parent"}><div className="bullet-child"></div></div>;

export default Bullet;

