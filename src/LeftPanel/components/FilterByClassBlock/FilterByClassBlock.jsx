import React from 'react';
import styles from './FilterByClassBlock.module.css';
import AbominationPortrait from './Portraits/abomination_portrait_roster.png';
import AntiquarianPortrait from './Portraits/antiquarian_portrait_roster.png';
import ArbalestPortrait from './Portraits/arbalest_portrait_roster.png';
import BountyHunterPortrait from './Portraits/bounty_hunter_portrait_roster.png';
import CrusaderPortrait from './Portraits/crusader_portrait_roster.png';
import GraveRobberPortrait from './Portraits/grave_robber_portrait_roster.png';
import HellionPortrait from './Portraits/hellion_portrait_roster.png';
import HighwaymanPortrait from './Portraits/highwayman_portrait_roster.png';
import HoundmasterPortrait from './Portraits/houndmaster_portrait_roster.png';
import JesterPortrait from './Portraits/jester_portrait_roster.png';
import LeperPortrait from './Portraits/leper_portrait_roster.png';
import ManAtArmsPortrait from './Portraits/man_at_arms_portrait_roster.png';
import OccultistPortrait from './Portraits/occultist_portrait_roster.png';
import PlagueDoctorPortrait from './Portraits/plague_doctor_portrait_roster.png';
import VestalPortrait from './Portraits/vestal_portrait_roster.png';


const ClassBtn = ({src}) => {
    return (
        <button className={styles.classBtn}>
            <img src={src}/>
        </button>)
}

const FilterByClassBlock = () => {
    const Portraits = [
        {
            src: AbominationPortrait
        },
        {
            src: AntiquarianPortrait
        },
        {
            src: ArbalestPortrait
        },
        {
            src: BountyHunterPortrait
        },
        {
            src: CrusaderPortrait
        },
        {
            src: GraveRobberPortrait
        },
        {
            src: HellionPortrait
        },
        {
            src: HighwaymanPortrait
        },
        {
            src: HoundmasterPortrait
        },
        {
            src: JesterPortrait
        },
        {
            src: LeperPortrait
        },
        {
            src: ManAtArmsPortrait
        },
        {
            src: OccultistPortrait
        },
        {
            src: PlagueDoctorPortrait
        },
        {
            src: VestalPortrait
        }
    ];
    return (
        <div>
            <button className={styles.filterBtnByClass}>By class</button>
            <div className={styles.hiddenClassBlock}>
                <div className={styles.classBtns}>
                    {Portraits.map(item => <ClassBtn src={item.src}/>)}
                </div>
            </div>
        </div>
    );
};

export default FilterByClassBlock;