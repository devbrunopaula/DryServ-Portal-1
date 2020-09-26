import React, { useState }  from 'react';
import {Link, NavLink} from "react-router-dom";
import {MenuListStyle1} from "../../index";
import { Collapse } from 'reactstrap';

const ListStyle = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const { items, display, visible, className } = props;

    const toggle = (e) => setIsOpen(e.target.attributes['data-value'].value);

    return (
        <Collapse tag={"ul"} isOpen={visible} className={className} style={ display !== undefined && display === true ? style : {} }>
            { items.map((subItem, subIndex) => (
                <li key={subIndex + "submenu"}>
                    { (subItem.link !== undefined) ? (
                        <NavLink to={ subItem.link } className="iq-waves-effect">
                            { subItem.icon && (<i className={ subItem.icon } />) }
                            <span>{ subItem.title }</span>
                        </NavLink>
                    ) :(
                        <a href={"!#"} onClick={toggle} data-value={subItem.name} className="iq-waves-effect">
                            { subItem.icon && (<i className={ subItem.icon } />) }
                            <span>{ subItem.title }</span>

                            { (subItem.children !== undefined && subItem.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />) }
                        </a>
                    ) }
                    { (subItem.children !== undefined && subItem.children.length > 0) && (
                        <MenuListStyle1 items={subItem.children} visible={isOpen === subItem.name} className={"iq-submenu"} />
                    ) }
                </li>
            )) }
        </Collapse>
    );
};
const style = {
    display: "block"
};

export default ListStyle;
