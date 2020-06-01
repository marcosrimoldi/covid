import React from "react";
import styled from "@emotion/styled";
import {getDataByCountry} from "../../services/covid-service";
import ArCasesCards from "../cards/ArCasesCards";

const FIRST_DAY = '2020-03-03T00:00:00Z';
const COUNTRY = 'argentina';

export default class ArTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {current: null, previous: null};
    }

    componentDidMount() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        getDataByCountry(COUNTRY, FIRST_DAY, today.toISOString()).then(res => {
            const lastUpdate = this.getDate(res[res.length - 1].Date);
            this.setState({
                lastUpdate: lastUpdate,
                data: res,
                current: res[res.length - 1],
                previous: res[res.length - 2]
            });
        });
    }

    getDate(value) {
        const date = value.split('T')[0].split('-');
        console.log(date);
        return date[2] + '/' + date[1] + '/' + date[0]
    }

    render() {
        return (
            <StyleWrapper>
                <div id={'argentina-tab'}>
                    <div>
                        <div className={'last-update'}>
                            <h3>Última
                                actualización: {this.state.current ? this.state.lastUpdate : ''}</h3>
                        </div>
                        <ArCasesCards current={this.state.current} previous={this.state.previous}/>
                    </div>
                    <div>
                        <p className={'source'}><strong>Fuente: </strong><a
                            rel={'noopener noreferrer'}
                            target={'_blank'}
                            href={'https://covid19api.com'}>COVID19 API</a></p>
                    </div>
                </div>
            </StyleWrapper>
        )
    }

}

const StyleWrapper = styled("div")`
  .soon {
    color: ${props => props.theme.text};
  }
`;
