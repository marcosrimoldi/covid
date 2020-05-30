import React from 'react';
import './nav.scss';
import DarkModeSwitch from "../dark-mode/switch/dark-mode-switch";
import styled from "@emotion/styled";
import SmTab from "../tabs/sm-tab";

export default class Nav extends React.Component {


    render() {
        return (
            <StyleWrapper>
                <div className={'nav-container'}>
                    <div className={'nav'}>
                        <div className={'logo-container'}>
                            <h1 className={'title'}>Covid-19</h1>
                            <h2 className={'subtitle'}><a href={'https://goo.gl/maps/3fTbwqhnmosFQ3VG8'}
                                                          target={'_blank'}
                                                          rel="noopener noreferrer">San Miguel</a></h2>
                        </div>
                        <DarkModeSwitch
                            onChange={(value) => this.props.onChangeMode ? this.props.onChangeMode(value) : null}/>
                    </div>
                </div>
            </StyleWrapper>
        )
    }
}

const StyleWrapper = styled("div")`
  background: ${props => props.theme.nav.background};
  font-family: "Oxygen", sans-serif;
  h1 {
    color: ${props => props.theme.nav.title};
  }
  h2, a {
    color: ${props => props.theme.nav.subtitle};
  }
`;
