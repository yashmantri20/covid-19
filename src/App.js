import React, {useState} from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';

function App() {
  const [color,setcolor] = useState("");
  const [color1,setcolor1] = useState("");
  const [color2,setcolor2] = useState("");
  const [color3,setcolor3] = useState("");

  const handler = () => setcolor("#859398")
  const down = () => setcolor("")

  const handler1 = () => setcolor1("#859398")
  const down1 = () => setcolor1("")

  const handler2 = () => setcolor2("#859398")
  const down2 = () => setcolor2("")

  const handler3 = () => setcolor3("#859398")
  const down3 = () => setcolor3("")

  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{color:"black"}} className="header" title="COVID-19">
            <Navigation>
                <Link style={{backgroundColor: color,fontSize:"17px",color:'black',fontFamily:"Hind",fontWeight:"600"}} onMouseEnter={handler} onMouseLeave={down} to="/Home">Home</Link>
                <Link style={{backgroundColor: color1,fontSize:"17px",color:'black',fontFamily:"Hind",fontWeight:"600"}} onMouseEnter={handler1} onMouseLeave={down1} to="/Info">Guidance</Link>
                <Link style={{backgroundColor: color2,fontSize:"17px",color:'black',fontFamily:"Hind",fontWeight:"600"}} onMouseEnter={handler2} onMouseLeave={down2} to="/Test">Self Assessment Test</Link>
                <Link style={{backgroundColor: color3,fontSize:"17px",color:'black',fontFamily:"Hind",fontWeight:"600"}} onMouseEnter={handler3} onMouseLeave={down3} to="/Links">Links</Link>
            </Navigation>
        </Header>  
        <Drawer style={{backgroundColor: '#eef2f3'}}>
            <Navigation>
                <Link style={{color: 'Black',fontFamily:"Hind",fontWeight:"600"}} to="/Home">Home</Link>
                <Link style={{color: 'Black',fontFamily:"Hind",fontWeight:"600"}} to="/Info" >Guidance</Link>
                <Link style={{color: 'Black',fontFamily:"Hind",fontWeight:"600"}} to="/Test" >Self Assessment Test</Link>
                <Link style={{color: 'Black',fontFamily:"Hind",fontWeight:"600"}} to="/Links" >Links</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        </Layout>
    </div>
  );
}

export default App;
