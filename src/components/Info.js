import React,{useState} from 'react'
import {Tabs,Tab} from 'react-mdl'
import { Grid, Cell} from 'react-mdl';

function Pro() {
    const [state, setflag] = useState({
        activeTab: 0,
    });

    
    const toggleCategories = () => 
    {
        if(state.activeTab === 1){
          return(
            <div className='gui'>
            {/* <p style={{justifyContent:'center',color:"black",fontStyle:'bold',fontSize:'30px',fontFamily: 'Hind',fontWeight:'600'}}>SYMPTOMS </p> */}
            <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Call your doctor:  If you think you have been exposed to COVID-19 and develop a fever and symptoms, such as cough or difficulty breathing, call your healthcare provider for medical advice.</p>
            <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>These symptoms may appear 2-14 days after exposure (based on the incubation period of MERS-CoV viruses).</p>
            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Fever</li>
            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Cough</li>
            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Shortness of breath</li>

            <p></p>

            <div style={{paddingLeft:'6%'}}>
            <img
                src={require('./f.png')}
                alt="avatar"
                className="avatar-img"
                 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <img
                src={require('./fever.png')}
                alt="avatar"
                className="avatar-img"
                 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <img
                src={require('./b.png')}
                alt="avatar"
                className="avatar-img"
                 />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <h5 style={{fontWeight:"600"}}>STAY SAFE AND STAY AT HOME</h5>
                <div className="link">
                  <text rel="noopener noreferrer">covid19india</text>
                </div>
              </div>
               </div>
          )
        } else if(state.activeTab === 0) {
          return (
            <div className='gui'>
        
            {/* <p style={{justifyContent:'center',color:"black",fontStyle:'bold',fontSize:'30px',fontFamily: 'Hind',fontWeight:'600'}}>TESTING FOR COVID-19</p> */}
            <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>There are laboratory tests that can identify the virus that causes COVID-19 in respiratory specimens. State and local public health departments have received tests from CDC while medical providers are getting tests developed by commercial manufacturers.</p>
            <p style={{justifyContent:'center',color:"black",fontStyle:'bold',fontSize:'30px',fontFamily: 'Hind'}}>Who should be tested</p>
            <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Not everyone needs to be tested for COVID-19. Here is some information that might help in making decisions about seeking care or testing.</p>

            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Most people have mild illness and are able to recover at home.</li>
            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>There is no treatment specifically approved for this virus.</li>
            <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Testing results may be helpful to inform decision-making about who you come in contact with.</li>

            {/* <p style={{justifyContent:'center',color:"black",fontStyle:'bold',fontSize:'30px',fontFamily: 'Hind'}}>How to get tested</p>
            <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>If you have symptoms of COVID-19 and want to get tested, try calling your state or local health department or a medical provider. While supplies of these tests are increasing, it may still be difficult to find a place to get tested.</p>      */}
            <div>
            <h5 style={{fontWeight:"600"}}>STAY SAFE AND STAY AT HOME</h5>
              <div className="link">
                <text rel="noopener noreferrer">covid19india</text>
              </div>
            </div>
            &nbsp;
            </div>
          )
        }
        else if(state.activeTab === 2){
            return(
              <div className="gui">          
              <p style={{justifyContent:'center',color:"black",fontStyle:'bold',fontSize:'25px',fontFamily: 'Hind'}}>WHEN TO SEEK MEDICAL ATTENTION ? </p>
              <p style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>
              If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include :
              </p>
              <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Trouble breathing</li>
              <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Persistent pain or pressure in the chest</li>
              <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>New confusion or inability to arouse</li>
              <li style={{fontFamily: 'Hind',fontSize:'16px',fontWeight:"600",color:"gray"}}>Bluish lips or face</li>
  
              <p></p>
              <div>
              <p style={{color:'red',fontFamily: 'Hind',fontSize:'18px',fontWeight:"600"}}>*This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning.</p>
              
              <h5 style={{fontWeight:"600"}}>STAY SAFE AND STAY AT HOME</h5>
                <div className="link">
                  <text rel="noopener noreferrer">covid19india</text>
                </div>
              </div>
               </div>
  
            )
          }
      }
    return (
        <div className="demo-tabs">
            <Tabs style={{marginLeft:"20px"}} activeTab={state.activeTab} onChange={(tabId) => setflag({ activeTab: tabId })} ripple>
            <Tab>TESTING</Tab>
            <Tab>SYMPTOMS</Tab>
            <Tab>MEDICAL</Tab>
            </Tabs>
           
      <Grid>
        <Cell col={12}>
          <div className="content">{toggleCategories()}</div>
        </Cell>
      </Grid>
        </div>    
    )
}

export default Pro
