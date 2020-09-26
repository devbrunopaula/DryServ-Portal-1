import React from 'react';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

// Import for the page assets...
/*import { index } from "../../config/pluginsInit";*/
import '../../assets/scss/style.scss';
import '../../assets/css/style.css';

// Import Custom components...
import { Loader, SideBarStyle1, NavBarStyle1, FooterStyle1 } from '../../components/sofbox';
import Home from '../../views/Home';
import Dashboard1 from '../../views/Dashboard/Dashboard1';
import Analytics from '../../views/Dashboard/Analytics';
import WebAnalytics from '../../views/Dashboard/WebAnalytics';
import PatientDashboard from '../../views/Dashboard/PatientDashboard';
import TicketBooking from '../../views/Dashboard/TicketBooking';
import TrackingDashboard from '../../views/Dashboard/Tracking';

import Calender from '../../views/Calender';
import Chat from '../../views/App/Chat';

import TimeLine from '../../views/ExtraPages/TimeLine';
import InvoicePage from '../../views/ExtraPages/InvoicePage';
import BlankPage from '../../views/ExtraPages/BlankPage';
import Pricing from '../../views/ExtraPages/Pricing';
import PricingOne from '../../views/ExtraPages/PricingOne';
import FAQPage from '../../views/ExtraPages/FAQPage';

//Import form components

import FormElement from '../../views/FormElements/FormElement';
import FormValidation from '../../views/FormElements/FormValidation';
import FormRadio from  '../../views/FormElements/FormRadio';
import FormCheckBox from '../../views/FormElements/FormCheckBox';
import FormSwitch from '../../views/FormElements/FormSwitch';


// Import for the Email App
import Inbox from '../../views/App/Email/Inbox';
import EmailCompose from '../../views/App/Email/EmailCompose';

import Alert from '../../views/elements/Alert';
import Buttons from '../../views/elements/Buttons';
import Cards from '../../views/elements/Cards';
import Colors from '../../views/elements/Colors';
import Badges from '../../views/elements/Badges';
import BreadCrumb from '../../views/elements/BreadCrumb';
import Tooltips from '../../views/elements/Tooltips';
import Carousel from '../../views/elements/Carousel';
import Grid from '../../views/elements/Grid';
import Images from '../../views/elements/Images';
import Listgroup from '../../views/elements/Listgroup';
import Media from '../../views/elements/Media';
import Modal from '../../views/elements/Modal';
import Pagination from '../../views/elements/Pagination';
import Popovers from '../../views/elements/Popovers';
import Progressbars from '../../views/elements/Progressbars';
import Tabs from '../../views/elements/Tabs';
import Typography from '../../views/elements/Typography';
import Video from '../../views/elements/Video';
import Notifications from '../../views/elements/Notifications';

import {Switch, Route, Link} from 'react-router-dom'

// Import for the Tables App
import BasicTable from '../../views/Tables/BasicTables';
import DataTable from '../../views/Tables/DataTables';
import EditableTable from '../../views/Tables/EditableTables';

// Import Chart Pages
import MorrisChart from '../../views/Charts/MorrisCharts';
import HighChart from '../../views/Charts/HighCharts';
import AmChart from '../../views/Charts/AmCharts';
import ApexChart from '../../views/Charts/ApexCharts';

// Import Icons Pages
import Dripicons from '../../views/Icons/Dripicons';
import FontAwesomeIcons from '../../views/Icons/FontAwesomeIcons';
/*import LineFontAwesomeIcon from '../../views/Icons/LineFontAwesomeIcon';*/
import Remixicon from '../../views/Icons/IconRemixicon';
import IconUnicons from '../../views/Icons/IconUnicons';

// Import JSON Data...
import sideBarItems from '../../fakeData/json/sideBar';
/*import Loading from "react-loading-bar";*/

// Import Map Pages
import GoogleMaps from '../../views/Maps/GoogleMaps';
import {Collapse} from "reactstrap";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    text: 'Dashboard',
                    href: '/dashboard1/home'
                },
                {
                    text: 'Home',
                    active: true
                }
            ],
            footerItems: [
                {
                    title: "Privacy Policy",
                    href: "/",
                },
                {
                    title: "Terms of Use",
                    href: "/",
                }
            ],
            footerTitle: "Copyright 2020 Sofbox All Rights Reserved.",
            collapsed: false
        }
    }
    componentDidMount() {
        /*index();*/
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    };

    render() {
        const { items, footerItems, footerTitle, collapsed } = this.state;
        return (
            <>
                {/* Loader component */}
                <Loader />
                <div className="wrapper">

                    <SideBarStyle1
                        items={sideBarItems}
                        logo={ require('../../assets/images/logo.png') }
                        homeUrl={"/"}
                    />

                    <NavBarStyle1
                        title={"Dashboard"}
                        homeUrl={"/"}
                        logo={ require('../../assets/images/logo.png') }
                        breadCrumb={items}
                    >
                        <button className="navbar-toggler" type="button" onClick={this.toggleNavbar}>
                            <i className="ri-menu-3-line" />
                        </button>
                        <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="line-menu half start" />
                                <div className="line-menu" />
                                <div className="line-menu half end" />
                            </div>
                        </div>
                        <Collapse isOpen={collapsed} navbar>
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect" href="!#">
                                        <i className="ri-search-line" /></a>
                                    <form action="#" className="search-box">
                                        <input type="text" className="text search-input"
                                               placeholder="Type here to search..."/>
                                    </form>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="!#" className="search-toggle iq-waves-effect">
                                        <i className="ri-mail-line" />
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">
                                                        All Messages<small className="badge  badge-light float-right pt-1">5</small>
                                                    </h5>
                                                </div>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require("../../assets/images/user/01.jpg") }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Nik Emma Watson</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require("../../assets/images/user/02.jpg") }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require("../../assets/images/user/03.jpg") }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Why do we use it?</h6>
                                                            <small className="float-left font-size-12">30 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require("../../assets/images/user/04.jpg") }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Variations Passages</h6>
                                                            <small className="float-left font-size-12">12 Sep</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require("../../assets/images/user/05.jpg") }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                            <small className="float-left font-size-12">5 Dec</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item iq-film-block">
                                    <a href="!#" className="iq-waves-effect">
                                        <i className="ri-film-line" />
                                        <span className="menu-tag">0</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="iq-waves-effect">
                                        <i className="ri-shopping-cart-2-line" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="!#" className="search-toggle iq-waves-effect">
                                        <i className="ri-notification-2-line" /></a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-danger p-3">
                                                    <h5 className="mb-0 text-white">All Notifications<small
                                                        className="badge  badge-light float-right pt-1">4</small></h5>
                                                </div>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New Order Recieved</h6>
                                                            <small className="float-right font-size-12">23 hrs
                                                                ago</small>
                                                            <p className="mb-0">Lorem is simply</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require('../../assets/images/user/01.jpg') }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Emma Watson Nik</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">95 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src={ require('../../assets/images/user/02.jpg') }
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New customer is join</h6>
                                                            <small className="float-right font-size-12">5 days
                                                                ago</small>
                                                            <p className="mb-0">Jond Nik</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="!#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40" src={ require('../../assets/images/small/jpg.svg')}
                                                                 alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Updates Available</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">120 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item iq-full-screen">
                                    <a href="!#" className="iq-waves-effect" id="btnFullscreen">
                                        <i className="ri-fullscreen-line" />
                                    </a>
                                </li>
                            </ul>
                        </Collapse>
                        <ul className="navbar-list">
                            <li>
                                <a href="!#" className="search-toggle iq-waves-effect bg-primary text-white">
                                    <img src={ require('../../assets/images/user/1.jpg') } className="img-fluid rounded" alt="user" />
                                </a>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white line-height">Hello Nik jone</h5>
                                                <span className="text-white font-size-12">Available</span>
                                            </div>
                                            <a href="!#" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-file-user-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">My Profile</h6>
                                                        <p className="mb-0 font-size-12">View personal profile
                                                            details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="!#" className="iq-sub-card iq-bg-primary-success-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-success">
                                                        <i className="ri-profile-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Edit Profile</h6>
                                                        <p className="mb-0 font-size-12">Modify your personal
                                                            details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="!#" className="iq-sub-card iq-bg-primary-danger-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-danger">
                                                        <i className="ri-account-box-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Account settings</h6>
                                                        <p className="mb-0 font-size-12">Manage your account
                                                            parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="!#" className="iq-sub-card iq-bg-primary-secondary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-secondary">
                                                        <i className="ri-lock-line" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Privacy Settings</h6>
                                                        <p className="mb-0 font-size-12">Control your privacy
                                                            parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <Link className="iq-bg-danger iq-sign-btn" to="/">
                                                    Sign out <i className="ri-login-box-line ml-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </NavBarStyle1>

                    <div id="content-page" className={"content-page"}>
                        <div className="container-fluid">
                            <TransitionGroup>
                                <CSSTransition
                                    key={this.props.location.key}
                                    classNames="dialog"
                                    timeout={300}
                                >
                                    <Switch location={this.props.location}>

                                    <Route path="/dashboard1" component={Home} />
                                    <Route path="/dashboard2" component={Dashboard1} />
                                    <Route path="/analytics" component={Analytics} />
                                    <Route path="/web-analytics" component={WebAnalytics} />
                                    <Route path="/patient" component={PatientDashboard} />
                                    <Route path="/ticket-booking" component={TicketBooking} />
                                    <Route path="/tracking" component={TrackingDashboard} />

                                    <Route path="/calender" component={Calender} />

                                        {/* Email App routes */}
                                    <Route path="/email/index" component={Inbox} />
                                    <Route path="/email/compose" component={EmailCompose} />
                                    <Route path="/chat" component={Chat} />

                                        {/* UI elements routes */}
                                    <Route path="/alert" component={Alert} />
                                    <Route path="/cards" component={Cards} />
                                    <Route path="/buttons" component={Buttons} />
                                    <Route path="/colors" component={Colors} />
                                    <Route path="/badges" component={Badges} />
                                    <Route path="/breadCrumb" component={BreadCrumb} />
                                    <Route path="/tooltips" component={Tooltips} />
                                    <Route path="/carousel" component={Carousel} />
                                    <Route path="/video" component={Video} />
                                    <Route path="/grid" component={Grid} />
                                    <Route path="/images" component={Images} />
                                    <Route path="/list-group" component={Listgroup} />
                                    <Route path="/media" component={Media} />
                                    <Route path="/modal" component={Modal} />
                                    <Route path="/pagination" component={Pagination} />
                                    <Route path="/popovers" component={Popovers} />
                                    <Route path="/progress-bars" component={Progressbars} />
                                    <Route path="/tabs" component={Tabs} />
                                    <Route path="/typography" component={Typography} />
                                    <Route path="/notification" component={Notifications} />

                                    <Route path="/tables-basic" component={BasicTable} />
                                    <Route path="/tables-datatable" component={DataTable} />
                                    <Route path="/tables-editable" component={EditableTable} />

                                    <Route path="/chart-morris" component={MorrisChart} />
                                    <Route path="/chart-high" component={HighChart} />
                                    <Route path="/chart-am" component={AmChart} />
                                    <Route path="/chart-apex" component={ApexChart} />

                                    {/* Form Elements */}
                                    <Route path={"/form"} component={FormElement} />
                                    <Route path={"/form-validation"} component={FormValidation} />
                                    <Route path={"/form-switch"} component={FormSwitch} />
                                    <Route path={"/form-radio"} component={FormRadio} />
                                    <Route path={"/form-checkbox"} component={FormCheckBox} />

                                    <Route path="/icon-dripicons" component={Dripicons} />
                                    <Route path="/icon-font-awesome" component={FontAwesomeIcons} />
                                    <Route path="/icon-line-awesome" component ={FontAwesomeIcons}/>
                                    <Route path={"/remixicon-icon"} component={Remixicon} />
                                    <Route path={"/unicons-icon"} component={IconUnicons} />

                                    <Route path="/map-google" component={GoogleMaps} />
                                    {/* Extra pages Routes */}
                                    <Route path="/timeline" component={TimeLine} />
                                    <Route path="/invoice" component={InvoicePage} />
                                    <Route path="/blank-page" component={BlankPage} />
                                    <Route path="/pricing" component={Pricing} />
                                    <Route path="/pricing-one" component={PricingOne} />
                                    <Route path="/faq" component={FAQPage} />


                                    <Route path="/" exect component={Home} />
                                </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>

                    </div>

                </div>

                <FooterStyle1 footerNavList={footerItems} title={footerTitle} />
            </>
        );
    }
}

export default Index;
