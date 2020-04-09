import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Grid,Card, CardTitle} from 'react-mdl';
import {formatDistance} from 'date-fns';
import {formatDate, formatDateAbsolute} from '../time/time';

function Home(props) {
  const [states, setStates] = useState([]);
  const [total, settotal] = useState(0);
  const [newcase, setnew] = useState(0);
  const [recovered, setrecovered] = useState(0);
  const [newrecovered, setrecover] = useState(0);
  const [active, setactive] = useState(0);
  const [deaths, setdeath] = useState(0);
  const [newdeath, setdeaths] = useState(0);
  const [fetched, setFetched] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [response, stateDistrictWiseResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
        /* axios.get('https://api.covid19india.org/raw_data.json'),*/
      ]);
      setStates(response.data.statewise.slice(1,16));
      settotal(response.data.statewise[0].confirmed)
      setnew(response.data.statewise[0].deltaconfirmed)
      setactive(response.data.statewise[0].active)
      setdeath(response.data.statewise[0].deaths)
      setdeaths(response.data.statewise[0].deltadeaths)
      setrecovered(response.data.statewise[0].recovered)
      setrecover(response.data.statewise[0].deltarecovered)
      setLastUpdated(response.data.statewise[0].lastupdatedtime);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Home">
            <div className="home-left">
            <div className="header-mid">
              <h3 style={{fontFamily:'Hind',fontWeight:'600'}}>INDIA COVID-19 TRACKER</h3>
    
            <Grid>
              <Card style={{minWidth: '450', margin: 'auto',backgroundColor:'#ff073a20'}}>
                <CardTitle style={{justifyContent:'center',color: 'black', height: '100px'}}>
                  <text style={{marginTop:"40px",fontSize:"22px",fontFamily:"Hind",fontWeight:"600"}}>Total Confirmed Cases</text>
                </CardTitle>
                <p style={{justifyContent:'center',color:"red",fontStyle:'bold',fontFamily: 'Hind',fontWeight:'600'}}>[+{newcase}]</p>
                <p>
                <b style={{justifyContent:'center',color:"red",fontSize:"25px",fontFamily: 'Hind'}}>{total}</b></p>
              </Card>
              
              <Card style={{minWidth: '450', margin: 'auto',backgroundColor:'#28a74520'}}>
                <CardTitle style={{justifyContent:'center',color: 'black', height: '100px'}}>
                <text style={{marginTop:"40px",fontSize:"22px",fontFamily:"Hind",fontWeight:"600"}}>Total Recovered</text>
                </CardTitle>
                <p style={{justifyContent:'center',color:"green",fontStyle:'bold',fontFamily: 'Hind',fontWeight:'600'}}>[+{newrecovered}]</p>
                <p>
                <b style={{justifyContent:'center',color:"green",fontSize:"25px",fontFamily: 'Hind'}}>{recovered}</b></p>
              </Card>
              
              <Card style={{minWidth: '450', margin: 'auto',backgroundColor:'#007bff10'}}>
                <CardTitle style={{justifyContent:'center',color: 'black', height: '100px'}}>
                <text style={{marginTop:"40px",fontSize:"22px",fontFamily:"Hind",fontWeight:"600"}}>Total Active Cases</text>
                </CardTitle>
                <p>&nbsp;</p>
                <p>
                <b style={{justifyContent:'center',color:"#007bff99",fontSize:"25px",fontFamily: 'Hind'}}>{active}</b></p>
              </Card>

              <Card style={{minWidth: '450', margin: 'auto',backgroundColor:'#6c757d10'}}>
                <CardTitle style={{justifyContent:'center',color: 'black', height: '100px'}}>
                <text style={{marginTop:"40px",fontSize:"22px",fontFamily:"Hind",fontWeight:"600"}}>Total Deaths</text>
                </CardTitle>
                <p style={{justifyContent:'center',color:"grey",fontStyle:'bold',fontFamily: 'Hind',fontWeight:'600'}}>[+{newdeath}]</p>
                <p>
                <b style={{justifyContent:'center',color:"grey",fontSize:"25px",fontFamily: 'Hind'}}>{deaths}</b></p>
              </Card>
              </Grid>
             &nbsp;
              <p style={{marginTop:'34px',fontFamily: 'Hind',fontWeight:"600"}}>Last Updated
              <p style={{color: '#28a745', fontWeight: 600,fontFamily: 'Hind'}}>
                {isNaN(Date.parse(formatDate(lastUpdated)))
                  ? ''
                  : formatDistance(
                      new Date(formatDate(lastUpdated)),
                      new Date()
                    ) + ' Ago'}
              
              <p style={{color: '#28a745', fontWeight: 600,fontFamily: 'Hind'}}>
                {isNaN(Date.parse(formatDate(lastUpdated)))
                  ? ''
                  : formatDateAbsolute(lastUpdated)}
              </p></p></p>
              
          </div>
          </div>

          <div className="home-right">
          <h3 style={{marginLeft:'40px',fontFamily:'Hind',fontWeight:'600'}}>TOP 15 AFFECTED STATES</h3>
          <Grid style={{marginLeft:'40px'}}>
            <table >
              <thead>
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {
                  states.map(row => (
                    <tr>
                      <td>{row.state}</td>
                      <td>{row.confirmed}</td>
                      <td>{row.active}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
                </Grid>
                <h5 style={{marginLeft:"40px"}}>STAY SAFE AND STAY AT HOME</h5>
                <div className="link">
                <text style={{marginLeft:'40px'}} rel="noopener noreferrer">covid19india</text>
                </div>
          </div> 
    </div>
  )}
export default Home